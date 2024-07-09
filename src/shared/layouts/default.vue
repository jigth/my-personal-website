<template>
    <div class="layout">
        <Navbar />
        
        <div class="content">
            <slot />
        </div>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>

<style scoped lang="scss">
.layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    padding: 50px 0;
    flex-grow: 1;
}
</style>