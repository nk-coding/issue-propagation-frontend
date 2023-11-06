<template>
    <BaseLayout>
        <template #content>
            <GropiusCard class="login-container mt-5">
                <p class="text-center text-body-1 mt-2">{{ isLogin ? "Login to continue" : "Sign up to continue" }}</p>
                <v-tabs v-model="credentialTab" align-tabs="center">
                    <v-tab v-for="(strategy, index) in currentStrategies.credential" :key="index" :value="index">
                        {{ strategy.name }}
                    </v-tab>
                </v-tabs>
                <v-divider />
                <v-window v-model="credentialTab">
                    <v-window-item
                        v-for="(strategy, index) in currentStrategies.credential"
                        :key="index"
                        :value="index"
                        class="pt-4"
                    >
                        <v-form>
                            <v-text-field
                                v-for="(field, idx) in isLogin ? strategy.loginFields : strategy.registerFields"
                                :key="idx"
                                :label="field.name"
                                v-model="formDataAt(strategy.id)[field.name]"
                            />
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
                <DefaultButton
                    v-for="strategy in currentStrategies.redirect"
                    :key="strategy.id"
                    class="full-width-btn my-2"
                    variant="outlined"
                    density="default"
                    @click="redirect(strategy)"
                >
                    {{ `${isLogin ? "Login" : "Sign up"} with ${strategy.name}` }}
                </DefaultButton>
            </GropiusCard>
            <v-dialog v-model="showSyncDialog" width="auto">
                <v-card color="surface-elevated-3" rounded="lger" class="pa-3" elevation="0">
                    <v-card-title>Allow sync?</v-card-title>
                    <v-card-text>
                        Shoule we sync issues with this account?<br/>You can always agree to this later.
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
import { computed } from "vue";
import { ref } from "vue";
import {
    CredentialStrategyInstance,
    GroupedStrategyInstances,
    RedirectStrategyInstance,
    StrategyInstance
} from "./model";
import { testStrategies } from "./testData";
import GropiusCard from "@/components/GropiusCard.vue";

const isLogin = ref(true);
const allowModeSwitch = ref(true);
const strategies = ref<StrategyInstance[]>(testStrategies);
const currentStrategies = computed<GroupedStrategyInstances>(() => {
    const loginInstances = strategies.value.filter(
        (strategy) => (strategy.isLoginActive && isLogin.value) || (strategy.isSelfRegistrationActive && !isLogin.value)
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

function formDataAt(id: string) {
    if (!(id in formData.value)) {
        formData.value[id] = {};
    }
    return formData.value[id];
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

function submitFormLogin(strategyInstance: CredentialStrategyInstance, formData: Record<string, string>) {
    // TODO: implement
    console.log(formData);
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
    // TODO: implement
    console.log(strategyInstance);
}

function redirectRegister(strategyInstance: RedirectStrategyInstance, sync: boolean) {
    // TODO: implement
    console.log(strategyInstance);
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
