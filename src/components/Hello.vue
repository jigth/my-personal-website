<template>
    <h1>Hello, I am {{ name }}</h1>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('Daniel');
</script>

<style scoped>
h1 {
    color: red;
    text-align: center;
}
</style>