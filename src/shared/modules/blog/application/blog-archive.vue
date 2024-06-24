<template>
    <section class="blog-archive">
        <h1 class="blog-archive__title">{{ title }}</h1>

        <div class="blog-archive__grid">
            <BlogArchivePostItem 
                v-for="(post, i) in posts" :key="i"
                class="blog-archive__grid-item"
                :title="post.title ?? 'archive-post-title'"
                :description="post.description ?? 'archive-post-description'"
                :imgUrl="post.imgUrl ?? 'archive-post-imgUrl'"
                :imgAlt="post.imgAlt ?? 'archive-post-imgAlt'"
                :postLink="post.postLink ?? '#'"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import { type PropType } from 'vue';
import BlogArchivePostItem from './blog-archive-post-item.vue';
import { type BlogArchivePost } from '../domain/posts'

defineProps({
    title: {
        type: String,
        required: true,
    },
    posts: {
        type: Object as PropType<BlogArchivePost[]>,
        required: true,
    }
})
</script>

<style scoped lang="scss">
.blog-archive__title {
    margin-bottom: 20px;
}

.blog-archive {
    padding: 20px;

    &__title {
        text-align: center !important;
    }

    &__grid {
        max-width: 80%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
    }
}
</style>