import { useAppStore } from "@/store/app";
import { withErrorMessage } from "@/util/withErrorMessage";
import axios from "axios";
import { RouteLocationNormalized, NavigationGuardNext, RouteLocationRaw } from "vue-router";
import { OAuthRespose, TokenScope } from "../views/auth/model";

export async function handleOAuthResponse(
    tokenResponse: OAuthRespose,
    store = useAppStore()
): Promise<RouteLocationRaw | boolean> {
    console.log(tokenResponse);
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
    } else if (store.validTokenScope.includes(TokenScope.LOGIN_SERVICE_REGISTER)) {
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
    const tokenScope = useAppStore().validTokenScope;
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
    if (!useAppStore().isLoggedIn) {
        if (from.name == "login" || to.redirectedFrom?.name == "login") {
            try {
                withErrorMessage(() => {
                    throw new Error();
                }, "Redirect loop. This should not happen.");
            } catch (err) {}
            return false;
        }
        return {
            name: "login"
        };
    }
    return true;
}
