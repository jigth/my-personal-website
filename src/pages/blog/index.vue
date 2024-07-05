<template>
    <section>
        <BlogArchive title="Tech Insights" subtitle="By Daniel Ochoa Montes" :posts="blogArchivePosts"/>
    </section>
</template>

<script setup lang="ts">
import BlogArchive from "~/src/shared/modules/blog/application/blog-archive.vue";
import type { BlogArchivePost } from "../../shared/modules/blog/domain/posts";

const blogArchivePosts: BlogArchivePost[] = [
    {
        title: 'Rsync, a faster backup option',
        description: 'Backup and copy your files between servers and PCs using Rsync',
        imgUrl: '/modules/blog/assets/backup-rsync.webp',
        imgAlt: 'Mobile Phone post',
        postLink: '/blog/backup-copy-files-rsync',
    },
]
</script>

<style lang="scss" scoped>
</style>