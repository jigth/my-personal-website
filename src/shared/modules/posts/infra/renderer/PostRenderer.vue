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

const html = MarkdownRenderer.getInstance().renderTextToHTML(props.markdownContent as string);
</script>

<style lang="scss" scoped>
// #post-content :deep() {
//     h1 {
//         color: red;
//     }

//     p {
//         color: blue;
//     }

//     img {
//         width: 300px;
//     }
// }
</style>