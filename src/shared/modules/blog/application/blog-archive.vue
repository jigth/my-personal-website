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
    font-size: 2.5rem;
    font-weight: 500;
    color: #444;
}

.blog-archive {
    padding: 20px;

    &__title {
        text-align: center !important;
    }

    &__grid {
        max-width: 80vw;
        margin: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
    }
}

@media (width <= 992px) {
    .blog-archive {
        &__img {
            width: 350px !important;
            height: 350px !important;
        }

        &__description {
            max-width: 350px;
        }
    }
}
</style>

<style lang="scss">
@media (width <= 768px) {
    .blog-archive-post {
        &__img {
            width: 250px !important;
            height: 250px !important;
        }

        &__description {
            max-width: 250px;
        }
    }
}
</style>