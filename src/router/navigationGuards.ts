import { useAppStore } from "@/store/app";
import { pushErrorMessage, withErrorMessage } from "@/util/withErrorMessage";
import axios from "axios";
import { RouteLocationNormalized, NavigationGuardNext, RouteLocationRaw } from "vue-router";
import { OAuthRespose, TokenScope } from "../views/auth/model";

export async function handleOAuthResponse(
    tokenResponse: OAuthRespose,
    store = useAppStore()
): Promise<RouteLocationRaw | boolean> {
    store.setNewTokenPair(tokenResponse.access_token, tokenResponse.refresh_token);

    const scopes = tokenResponse.scope.split(" ");
    if (scopes.includes(TokenScope.BACKEND)) {
        return {
            name: "home",
            replace: true
        };
    }
    if (scopes.includes(TokenScope.LOGIN_SERVICE_REGISTER)) {
        return {
            name: "register",
            replace: true
        };
    }

    withErrorMessage(() => {
        throw new Error(
            `Access token has no valid known scope. Expected scope ${TokenScope.BACKEND} or ${TokenScope.LOGIN_SERVICE_REGISTER}. Got ${tokenResponse.scope}`
        );
    }, "Login failed.");
    return {
        name: "login",
        replace: true
    };
}

export async function onLoginEnter(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
): Promise<RouteLocationRaw | boolean> {
    const oauthCode = to.query["code"] ?? "";
    const store = useAppStore();
    if (await store.isLoggedIn()) {
        return {
            name: "logout",
            replace: true
        };
    }
    if (oauthCode !== undefined && oauthCode.length > 0) {
        try {
            const tokenResponse: OAuthRespose = await withErrorMessage(
                async () =>
                    (
                        await axios.post("/api/login/authenticate/oauth/some_value/token", {
                            grant_type: "authorization_code",
                            client_id: import.meta.env.VITE_LOGIN_OAUTH_CLIENT_ID,
                            code: oauthCode
                        })
                    ).data,
                "Could not login."
            );

            return await handleOAuthResponse(tokenResponse, store);
        } catch (err) {
            return {
                name: "login",
                replace: true
            };
        }
    } else if ((await store.getValidTokenScopes()).includes(TokenScope.LOGIN_SERVICE_REGISTER)) {
        return {
            name: "register",
            replace: true
        };
    }
    return true;
}

export async function onRegisterEnter(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
): Promise<RouteLocationRaw | boolean> {
    const tokenScope = await useAppStore().getValidTokenScopes();
    if (!tokenScope.includes(TokenScope.LOGIN_SERVICE_REGISTER)) {
        return {
            name: "login",
            replace: true
        };
    }
    return true;
}

export async function onAnyEnter(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
): Promise<RouteLocationRaw | boolean> {
    if (to.name == "login" || to.name == "register") {
        return true;
    }
    const store = useAppStore();
    if (!(await store.isLoggedIn())) {
        if (from.name == "login" || to.redirectedFrom?.name == "login") {
            pushErrorMessage("Redirect loop. This should not happen.");
            return false;
        }
        return {
            name: "login"
        };
    } else {
        store.validateUser();
    }
    return true;
}
