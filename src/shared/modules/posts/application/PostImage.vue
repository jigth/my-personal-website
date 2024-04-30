<template>
    <div>
        <img 
            :style="[
                legend ? 'display: block;' : '',
                imgStyles ?? '',
            ]"
            :src="src"
            :alt="alt"
        />
        <small>{{ legend }}</small>
    </div>
</template>

<script setup lang="ts">
defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
    legend: {
        type: String,
        required: false,
    },
    imgStyles: {
        type: String,
        required: false,
    }
})

</script>