<template>
    <BaseLayout>
        <template #content>
            <GropiusCard class="login-container mt-5" v-if="store.isLoggedIn">
                <p class="text-center text-body-1 my-2">Logged in as {{ me?.displayName }} ({{ me?.username }})</p>
                <DefaultButton class="full-width-btn" @click="logout"> Logout
                </DefaultButton>
            </GropiusCard>
            <GropiusCard class="login-container mt-5" v-else>
                <p class="text-center text-body-1 mt-2">{{ isLogin ? "Login to continue" : "Sign up to continue" }}</p>
                <v-tabs v-model="credentialTab" align-tabs="center">
                    <v-tab v-for="(strategy, index) in currentStrategies.credential" :key="index" :value="index">
                        {{ strategy.name }}
                    </v-tab>
                </v-tabs>
                <v-divider />
                <v-window v-model="credentialTab">
                    <v-window-item v-for="(strategy, index) in currentStrategies.credential" :key="index" :value="index"
                        class="pt-4">
                        <v-form>
                            <v-text-field v-for="(field, idx) in isLogin ? strategy.loginFields : strategy.registerFields"
                                :key="idx" :label="field.displayName ?? field.name"
                                v-model="formDataAt(strategy.id)[field.name]"
                                :type="(isPwdVisibleAt(strategy.id)[field.name] || field.type != 'password') ? 'text' : 'password'"
                                :append-icon="field.type == 'password' ? (isPwdVisibleAt(strategy.id)[field.name] ? 'mdi-eye' : 'mdi-eye-off') : undefined"
                                @click:append="isPwdVisibleAt(strategy.id)[field.name] = !isPwdVisibleAt(strategy.id)[field.name]"></v-text-field>
                        </v-form>
                    </v-window-item>
                </v-window>
                <DefaultButton class="full-width-btn" @click="submitForm"> Continue </DefaultButton>
                <div v-if="allowModeSwitch" class="mt-2">
                    <p v-if="isLogin">
                        <span class="text-middle">Don't have an account?</span>
                        <v-btn variant="text" density="comfortable" class="px-0" @click="toggleIsLogin">Sign up</v-btn>
                    </p>
                    <p v-else>
                        <span class="text-middle">Already have an account?</span>
                        <v-btn variant="text" density="comfortable" class="px-0" @click="toggleIsLogin">Login</v-btn>
                    </p>
                </div>
                <v-divider class="mt-4 mb-3" />
                <DefaultButton v-for="strategy in currentStrategies.redirect" :key="strategy.id" class="full-width-btn my-2"
                    variant="outlined" density="default" @click="redirect(strategy)">
                    {{ `${isLogin ? "Login" : "Sign up"} with ${strategy.name}` }}
                </DefaultButton>
            </GropiusCard>
            <v-dialog v-model="showSyncDialog" width="auto">
                <v-card color="surface-elevated-3" rounded="lger" class="pa-3" elevation="0">
                    <v-card-title>Allow sync?</v-card-title>
                    <v-card-text>
                        Shoule we sync issues with this account?<br />You can always agree to this later.
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <DefaultButton variant="text" @click="afterSelectSync!(false)">Do not sync</DefaultButton>
                        <DefaultButton variant="text" @click="afterSelectSync!(true)">Sync</DefaultButton>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </template>
    </BaseLayout>
</template>
<script setup lang="ts">
import BaseLayout from "@/components/BaseLayout.vue";
import { Ref, computed } from "vue";
import { ref } from "vue";
import {
    CredentialStrategyInstance,
    GroupedStrategyInstances,
    RedirectStrategyInstance,
    LoginStrategy,
    LoginStrategyInstance,
    OAuthRespose
} from "./model";
import { testStrategies } from "./testData";
import GropiusCard from "@/components/GropiusCard.vue";
import { withErrorMessage } from "@/util/withErrorMessage";
import { asyncComputed, computedAsync } from "@vueuse/core";
import axios from "axios";
import router from "@/router";
import { handleOAuthResponse } from "./oauthResponse";
import { useAppStore } from "@/store/app";
import { useClient } from "@/graphql/client";
const store = useAppStore();

const isLogin = ref(true);
const allowModeSwitch = ref(true);
//const strategies = ref<StrategyInstance[]>(testStrategies);

const loadingStrategies = ref(true)
const strategies = asyncComputed(
    async () => {
        const strategies: LoginStrategy[] = await withErrorMessage(
            async () => (await axios.get(`/api/login/login/strategy/`, {})).data,
            "Could not fetch available strategies"
        );
        const instances: LoginStrategyInstance[] = await withErrorMessage(
            async () => (await axios.get(`/api/login/login/strategyInstance/`, {})).data,
            "Could not fetch available strategy instances"
        );
        const strategiesByName = new Map(strategies.map(s => [s.typeName, s]));
        const redirectInstances = instances.filter(instance => strategiesByName.get(instance.type)?.needsRedirectFlow)
            .map(instance => ({
                ...instance,
                type: "redirect",
            } satisfies RedirectStrategyInstance));

        const credentialInstances = instances
            .filter(instance => Object.keys(strategiesByName.get(instance.type)?.acceptsVariables ?? {}).length > 0)
            .map(instance => {
                const strategy = strategiesByName.get(instance.type);
                const fields = Object.values(strategy?.acceptsVariables ?? {})
                return {
                    ...instance,
                    type: "credential",
                    loginFields: fields,
                    registerFields: fields,
                } satisfies CredentialStrategyInstance
            });
        return [...redirectInstances, ...credentialInstances]
    },
    [],
    { shallow: false, evaluating: loadingStrategies }
);

const currentStrategies = computed<GroupedStrategyInstances>(() => {
    const loginInstances = strategies.value.filter(
        (strategy) => (strategy.isLoginActive && isLogin.value) || (strategy.isSelfRegisterActive && !isLogin.value)
    );
    return {
        credential: loginInstances.filter((strategy) => strategy.type === "credential") as CredentialStrategyInstance[],
        redirect: loginInstances.filter((strategy) => strategy.type === "redirect") as RedirectStrategyInstance[]
    };
});
const credentialTab = ref(0);
const showSyncDialog = ref(false);
const afterSelectSync = ref<undefined | ((sync: boolean) => void)>();
const formData = ref<Record<string, Record<string, string>>>({});

const client = useClient();
const me: Ref<any> = computedAsync(async () => {
    if (!store.isLoggedIn) {
        return undefined;
    }
    const meResponse = await withErrorMessage(
        () => client.getCurrentUser(),
        "Could not load user data");
    return meResponse.currentUser
    return undefined
}, undefined, { shallow: false });

function formDataAt(id: string) {
    if (!(id in formData.value)) {
        formData.value[id] = {};
    }
    return formData.value[id];
}

const isPwdVisible = ref<Record<string, Record<string, boolean>>>({});
function isPwdVisibleAt(id: string) {
    if (!(id in isPwdVisible.value)) {
        isPwdVisible.value[id] = {};
    }
    return isPwdVisible.value[id];
}

function toggleIsLogin() {
    isLogin.value = !isLogin.value;
    credentialTab.value = 0;
}

function submitForm() {
    const strategy = currentStrategies.value.credential[credentialTab.value];
    if (isLogin.value) {
        submitFormLogin(strategy, formDataAt(strategy.id));
    } else {
        if (strategy.isSyncActive) {
            afterSelectSync.value = (sync) => {
                showSyncDialog.value = false;
                submitFormRegister(strategy, formDataAt(strategy.id), sync);
            };
            showSyncDialog.value = true;
        } else {
            submitFormRegister(strategy, formDataAt(strategy.id), false);
        }
    }
}

function redirect(strategy: RedirectStrategyInstance) {
    if (isLogin.value) {
        redirectLogin(strategy);
    } else {
        if (strategy.isSyncActive) {
            afterSelectSync.value = (sync) => {
                showSyncDialog.value = false;
                redirectRegister(strategy, sync);
            };
            showSyncDialog.value = true;
        } else {
            redirectRegister(strategy, false);
        }
    }
}

async function submitFormLogin(strategyInstance: CredentialStrategyInstance, formData: Record<string, string>) {
    const loginResult: OAuthRespose = await withErrorMessage(
        async () => (await axios.post(`/api/login/authenticate/oauth/${strategyInstance.id}/token`,
            {
                ...formData,
                grant_type: "password",
                client_id: import.meta.env.VITE_LOGIN_OAUTH_CLIENT_ID
            }
        )).data,
        "Could not log in. Error Messgage see console, todo: better error logging");
    const newRoute = await handleOAuthResponse(loginResult);
    if (newRoute === true) {
    } else if (newRoute === false) {
        try { withErrorMessage(() => { throw new Error() }, "Unknown error during login"); } catch (err) { }
    } else {
        router.push(newRoute);
    }
}

function submitFormRegister(
    strategyInstance: CredentialStrategyInstance,
    formData: Record<string, string>,
    sync: boolean
) {
    // TODO: implement
    console.log(formData);
}

function redirectLogin(strategyInstance: RedirectStrategyInstance) {
    // TODO: add oauth state
    window.location.href = `/api/login/authenticate/oauth/${strategyInstance.id}/authorize/login?client_id=${import.meta.env.VITE_LOGIN_OAUTH_CLIENT_ID}`

}

function redirectRegister(strategyInstance: RedirectStrategyInstance, sync: boolean) {
    // TODO: implement
    console.log(strategyInstance);
}

function logout() {
    store.setNewTokenPair("", "");
}
</script>
<style scoped>
.login-container {
    max-width: 500px;
    margin: 0 auto;
}

.full-width-btn {
    width: 100%;
}

.text-middle {
    vertical-align: middle;
}
</style>
