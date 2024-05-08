<template>
    <section>
        <h1>My Blog</h1>
        <ul>
            <li><a href="#">Post one</a></li>
            <li><a href="#">Post two</a></li>
            <li><a href="#">Post three</a></li>
        </ul>
    </section>

    <section>
        <h1>Experiment Zone</h1>
        <PostImage 
            src="https://img.freepik.com/free-vector/hand-drawn-samurai-silhouette_23-2151184880.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1714003200&semt=sph"
            alt="Samurai Image"
            legend="Greatest samurai in the history of Japan"
            imgStyles="width: 100px; height: 100px;"
        />
        <PostVideo />
    </section>
</template>

<script setup lang="ts">
import PostImage from "../shared/modules/posts/application/PostImage.vue"
import PostVideo from "../shared/modules/posts/application/PostVideo.vue"
</script>

<style lang="scss" scoped>
$linkColor: white;

section {
    padding: $pagePadding;
    background-color: $bgColor;
    ul {
        a {
            &:link {
                color: $linkColor;
            }
        }
    }
}
</style>