<template>
    <div class="d-flex align-center">
        <img
            v-if="showAvatar"
            :src="user.avatar"
            class="rounded-circle avatar"
            :class="{
                [`avatar--size-${size}`]: true
            }"
        />
        <div v-if="showName" :class="{ 'ml-1': showAvatar }">{{ user.displayName }}</div>
        <v-tooltip activator="parent" location="top" class="rich-tooltip">
            <img v-if="showAvatar" :src="user.avatar" class="rounded-circle overlay-avatar" />
            <div class="d-flex text-body-1">
                <span>{{ user.displayName }}</span>
                <span v-if="user.username" class="text-medium-emphasis">
                    &nbsp;·
                    {{ user.username }}
                </span>
            </div>
        </v-tooltip>
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
    },
    size: {
        type: String,
        required: false,
        default: "default"
    }
});
</script>
<style scoped lang="scss">
@use "@/styles/settings.scss";

.avatar {
    @each $name, $value in settings.$avatar-sizes {
        &--size-#{$name} {
            width: $value;
            height: $value;
        }
    }
}

.overlay-avatar {
    height: 50px;
}
</style>
