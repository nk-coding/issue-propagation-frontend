<template>
    <div class="d-flex align-center">
        <img v-if="showAvatar" :src="user.avatar" class="rounded-circle avatar" />
        <div v-if="showName" :class="{ 'ml-1': showAvatar }">{{ user.displayName }}</div>
    </div>
</template>
<script setup lang="ts">
import { DefaultUserInfoFragment } from "@/graphql/generated";
import { PropType } from "vue";

defineProps({
    user: {
        type: Object as PropType<DefaultUserInfoFragment>,
        required: true
    },
    showAvatar: {
        type: Boolean,
        required: false,
        default: true
    },
    showName: {
        type: Boolean,
        required: false,
        default: true
    }
});
</script>
<style scoped>
.avatar {
    height: 100%;
}
</style>
