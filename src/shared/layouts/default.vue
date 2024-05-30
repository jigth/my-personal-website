<template>
    <section class="page-container">
        <Navbar />
    
        <slot />
    </section>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
</script>

<style scoped lang="scss">
.page-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>