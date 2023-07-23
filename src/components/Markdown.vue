<template>
    <div class="markdown-editor-viewer">
        <Viewer v-if="!editMode" :value="valueWrapper" :plugins="plugins"></Viewer>
        <Editor v-else :value="valueWrapper" @change="handleChange" :plugins="plugins"></Editor>
    </div>
</template>
<script setup lang="ts">
import gfm from "@bytemd/plugin-gfm";
import { Editor, Viewer } from "@bytemd/vue-next";
import { ref, watch } from "vue";

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    editMode: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits<{
    (event: "update:modelValue", value: string): void;
}>();

const valueWrapper = ref(props.modelValue);

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
}

.bytemd {
    height: max(300px, 40vh);
    border: none;
    background-color: unset;

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
}
</style>
<style></style>
