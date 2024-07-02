<template>
    <div class="blog-archive-post">
        <a class="blog-archive-post__link" :href="postLink" target="_blank">
            <img class="blog-archive-post__img" :src="imgUrl" :alt="imgAlt" />
        </a>
        <a class="blog-archive-post__link" :href="postLink" target="_blank">
            <h3 class="blog-archive-post__title">{{ title }}</h3>
        </a>
        <p class="blog-archive-post__description">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    imgAlt: {
        type: String,
        required: true,
    },
    postLink: {
        type: String,
        required: true,
    }
})
</script>

<style scoped lang="scss">
$width: 350px;
$height: $width;
$textColor: #555;

.blog-archive-post {
    padding: 20px;
    box-shadow: .1px .2px 3px .1px #999;

    &__img {
        width: $width;
        height: $height;
        display: block;
        margin: 0 auto;
    }

    &__link {
        display: block;
        padding: 20px auto !important;
        text-decoration: none;
    }

    &__title {
        margin-top: 15px;
        text-align: center;
        text-transform: capitalize;
        color: $textColor;
    }

    &__description {
        max-width: $width;
        margin: 0 auto;
        color: $textColor;

        &::first-letter {
            text-transform: uppercase;
        }
    }
}
</style>