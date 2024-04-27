<template>
    <div>
        <p>Sample Post video component (Taken from Codepen Sample)</p>

        <video id='video' controls="true" preload='none' width="600" poster="https://assets.codepen.io/32795/poster.png">
            <source id='mp4' src="http://media.w3.org/2010/05/sintel/trailer.mp4" type='video/mp4' />
            <source id='webm' src="http://media.w3.org/2010/05/sintel/trailer.webm" type='video/webm' />
            <source id='ogv' src="http://media.w3.org/2010/05/sintel/trailer.ogv" type='video/ogg' />

            <!-- 
                We're not using Flash as a fallback option.
                -->
            <p>Your user agent does not support the HTML5 Video element.</p>
        </video>

    </div>
</template>

<script setup lang="ts">

</script>