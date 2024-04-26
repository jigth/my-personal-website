<template>
    <section>
        <h1>Hello, I am {{ name }}</h1>
        <p>And the CI/CD process with Netlify is rocking!</p>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('Daniel');
</script>

<style scoped>
section {
    width: 50vw;
    height: 200px;
    background-color: rgb(25, 172, 25);
    margin: 0 auto;
    border-radius: 0.5rem;
    padding: 1rem;
}

h1 {
    color: rgb(172, 31, 31);
}

p {
    font-family: Palatino, monospace;
}
</style>