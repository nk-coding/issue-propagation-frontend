<template>
    <div class="markdown-editor-viewer">
        <Viewer v-if="!editMode" :value="valueWrapper" :plugins="plugins"></Viewer>
        <Editor
            v-else
            :key="theme.current.value.dark"
            :value="valueWrapper"
            :plugins="plugins"
            :editor-config="editorConfig"
            @change="handleChange"
        ></Editor>
    </div>
</template>
<script setup lang="ts">
import gfm from "@bytemd/plugin-gfm";
import { Editor, Viewer } from "@bytemd/vue-next";
import { ref, watch } from "vue";
import "codemirror/theme/midnight.css";
import { useTheme } from "vuetify/lib/framework.mjs";
import { computed } from "vue";
import "bytemd/dist/index.css";

const props = defineProps({
    modelValue: {
        type: String,
        required: false,
        default: ""
    },
    editMode: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits<{
    (event: "update:modelValue", value: string): void;
}>();

const theme = useTheme();
const valueWrapper = ref(props.modelValue);

const editorConfig = computed(() => {
    return {
        theme: theme.current.value.dark ? "midnight" : "default"
    };
});

function handleChange(text: string) {
    valueWrapper.value = text;
    emit("update:modelValue", text);
}

watch(
    () => props.modelValue,
    (value) => {
        valueWrapper.value = value;
    }
);
const plugins = [gfm()];
</script>
<style lang="scss">
.v-theme--light {
    .markdown-editor-viewer {
        @import "github-markdown-css/github-markdown-light";
    }
}
.v-theme--dark {
    .markdown-editor-viewer {
        @import "github-markdown-css/github-markdown-dark";
    }
}

.markdown-body {
    background: none !important;
    font-family: "Roboto", sans-serif !important;

    h1 {
        font-weight: 400 !important;
    }
    h2 {
        font-weight: 450 !important;
    }
    h3,
    h4,
    h5,
    h6 {
        font-weight: 500 !important;
    }
}

.bytemd {
    height: max(300px, 30vh);
    border: none;
    background-color: unset;
    color: rgb(var(--v-theme-on-surface-container));

    .CodeMirror {
        background: none !important;
    }

    .bytemd-toolbar {
        background: none !important;
    }

    .bytemd-toolbar-right [bytemd-tippy-path="4"] {
        display: none;
    }

    .bytemd-toolbar-right [bytemd-tippy-path="5"] {
        display: none;
    }

    & > * {
        border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
    }
}

.bytemd-body > * {
    border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
</style>
<style></style>
