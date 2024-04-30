<template>
    <nav class="navbar">
        <div class="navbar-item">
            <a href="#">DOM</a>
        </div>
        <div class="navbar-item navbar-item__specialty">Software Engineer</div>
        <div class="navbar-item">
            <a href="#">Blog</a> <!-- Blog posts archive -->
        </div>
        
        <div class="navbar-separator">|</div>
        
        <div class="navbar-item">
            <a href="#">Info</a> <!-- About me, tech that I use & contact links -->
        </div> 
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.navbar {
    display: flex;
    justify-content: space-between;
    padding: .5rem 1rem;
    font-size: 1.15rem;

    &-separator {
        padding: 0 1rem;
    }

    &-item {
        &:first-child > a {
            font-weight: bold;
        }

        a {
            text-decoration: none;
            &:link {
                color: $defaultTextColor;
            }
            &:active {
                color: $defaultTextColor;
            }
            &:visited {
                color: $defaultTextColor;
            }
        }

        &__specialty {
            margin-left: auto;
            padding-right: 10rem;
        }
    }
}
</style>