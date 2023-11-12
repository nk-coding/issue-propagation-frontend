<template>
    <BaseLayout>
        <template #content>
            <GropiusCard class="login-container mt-5">
                <p class="text-center text-body-1 my-2">Logged in as {{ me?.displayName }} ({{ me?.username }})</p>
                <DefaultButton class="full-width-btn" @click="logout"> Logout </DefaultButton>
            </GropiusCard>
        </template>
    </BaseLayout>
</template>
<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue';
import GropiusCard from '@/components/GropiusCard.vue';
import { useClient } from '@/graphql/client';
import { useAppStore } from '@/store/app';
import { withErrorMessage } from '@/util/withErrorMessage';
import { computedAsync } from '@vueuse/core';
import { Ref } from 'vue';

const store = useAppStore();
const client = useClient();

function logout() {
    store.setNewTokenPair(undefined, undefined);
}

const me: Ref<any> = computedAsync(
    async () => {
        if (!(await store.isLoggedIn())) {
            return undefined;
        }
        const meResponse = await withErrorMessage(() => client.getCurrentUser(), "Could not load user data");
        return meResponse.currentUser;
    },
    undefined,
    { shallow: false }
);
</script>