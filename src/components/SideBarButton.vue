<template>
    <button class="sidebar-button" :class="{ active: active }">
        <div class="icon-container d-flex align-center justify-center">
            <v-expand-x-transition>
                <div
                    v-show="active"
                    class="icon-pill selected-pill mx-auto"
                    :style="`background: rgb(var(--v-theme-${color}-container))`"
                ></div>
            </v-expand-x-transition>
            <div class="icon-pill overlay-pill"></div>
            <v-icon :color="iconColor">{{ icon }}</v-icon>
        </div>
        <div class="button-label text-caption">
            {{ text }}
        </div>
    </button>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: false,
        default: "secondary"
    },
    active: {
        type: Boolean,
        required: false,
        default: false
    }
});

defineEmits(["click"]);

const iconColor = computed(() => {
    if (props.active) {
        return `rgb(var(--v-theme-on-${props.color}-container))`;
    } else {
        return `rgb(var(--v-theme-on-surface-variant))`;
    }
});
</script>
<style scoped>
.icon-container {
    overflow: hidden;
    width: 56px;
    height: 32px;
    position: relative;
}
.icon-pill {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    border-radius: 9999px;
}
.sidebar-button:hover .overlay-pill {
    opacity: calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier));
}
.sidebar-button:active .overlay-pill {
    opacity: calc(var(--v-pressed-opacity) * var(--v-theme-overlay-multiplier));
}
.overlay-pill {
    opacity: 0;
    background-color: currentColor;
    color: inherit;
}

.button-label {
    color: rgb(var(--v-theme-on-surface-variant));
}
.sidebar-button.active .button-label {
    color: rgb(var(--v-theme-on-surface));
}
</style>
