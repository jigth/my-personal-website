<template>
    <div>
        <PostRenderer id="post-content" :markdown-content="content" />
    </div>
</template>

<script setup lang="ts">
import PostRenderer from '~/src/shared/modules/posts/infra/renderer/PostRenderer.vue';

const route = useRoute()
const slug = route.params.postFilepath || []

const joinedFilepath = (slug as string[]).join('/')

let content = ref<string>('')

$fetch(`/api/markdown-reader/${joinedFilepath}`)
    .then((res) => {
        if (res.data.includes('Error reading filepath')) {
            content.value = 'Post Not Found'
            return
        }
        
        content.value = res.data
    })
    .catch(err => {
        if (err.message.includes('Error reading filepath')) {
            console.log('Error reading filepath.')
            return
        }

        console.log('Error while reading file from local API.\n', err.message)
    });
</script>

<style lang="scss" scoped>
@import "~/src/shared/assets/scss/blog/posts.scss";
</style>