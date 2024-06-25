<template>
    <div>
        <div id="post-content" v-html="html"></div>
    </div>
</template>

<script setup lang="ts">
import { MarkdownRenderer } from "./markdown-renderer";

const props = defineProps({
    markdownContent: {
        required: true,
        type: String,
    }
})

const html = ref<string>('')

watch(() => props.markdownContent, () => {
    if (props.markdownContent.length > 0) {
        html.value = MarkdownRenderer.getInstance().renderTextToHTML(props.markdownContent as string);
    }
})
</script>

<style lang="scss" scoped>
</style>