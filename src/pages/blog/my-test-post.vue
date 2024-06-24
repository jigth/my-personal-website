<template>
    <div>
        <PostRenderer id="html" :markdown-content="content" />
    </div>
</template>

<script setup lang="ts">
import PostRenderer from '~/src/shared/modules/posts/infra/renderer/PostRenderer.vue';

const content = `
# My best post

This is a sample title

![me](/me.webp)
`
</script>

<style lang="scss" scoped>
@import "~/src/shared/assets/scss/blog/posts.scss";
</style>