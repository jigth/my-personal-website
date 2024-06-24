<template>
    <section>
        <BlogArchive title="My Posts" :posts="blogArchivePosts"/>
    </section>
</template>

<script setup lang="ts">
import BlogArchive from "~/src/shared/modules/blog/application/blog-archive.vue";
import type { BlogArchivePost } from "../../shared/modules/blog/domain/posts";

const blogArchivePosts: BlogArchivePost[] = [
    {
        title: 'title 1',
    description: 'description 1',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        imgAlt: 'Mobile Phone post',
        postLink: '/',
    },
    {
        title: 'title 2',
        description: 'description 2',
        imgUrl: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
        imgAlt: 'Colorful peacock',
        postLink: '/',
    },
    {
        title: 'title 3',
        description: 'description 3',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Creeperasha_Linux_test_image_upload.png',
        imgAlt: 'Tux Being Tux',
        postLink: '/',
    },
]
</script>

<style lang="scss" scoped>
</style>