<template>
    <Navbar />
    <div style="padding: 2rem 0;">
        <slot />
    </div>
</template>

<script setup lang="ts">
import Navbar from '../components/navbar.vue';
</script>