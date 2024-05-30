<template>
    <header class="navbar-container">
        <nav class="navbar">
            <div class="navbar-item navbar-item__home">
                <a href="/">DOM</a>
            </div>
            <div class="navbar-item navbar-item__specialty">
                <span>Software Engineer</span>
            </div>
    
            <div class="navbar-menu">
                <div class="navbar-item" v-for="(item, i) in navMenuItems" :key="i">
                    <a class="navbar-item__link":href="item.link">{{ item.name }}</a> <!-- Blog posts archive -->

                    <div 
                        v-if="i < (navMenuItems.length - 1)"
                        class="navbar-separator"
                    >|</div>

                </div>
            </div>
        </nav>

    </header>
</template>

<script setup lang="ts">
const navMenuItems: { name: string, link: string }[] = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
]
</script>

<style scoped lang="scss">
.navbar-container {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: $navbarColor;
}

.navbar {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
    font-size: 1.15rem;

    &-separator {
        padding: 0 1rem;
        cursor: default;
    }
    
    &-item {
        display: flex;
        text-decoration: none;

        &__link {
            display: block;
            transition: all .2s ease-in-out;
            text-decoration: none;
            
            &:hover {
                text-shadow: 0 0 0.7px $defaultTextColor;
                transform: scale(1.05);
            } 

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
        
        &__home {
            font-weight: bolder;
        
            a {
                transition: 
                    color 0.25s ease-in-out, 
                    transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);

                &:hover {
                    color: rgb(2, 109, 2) !important;
                    transform: scale(1.1);
                }
            }

            a {
                text-decoration: none;
            }
        }

        &__specialty {
            margin-left: auto;
            padding-right: 10rem;
            cursor: default;

            span {
                display: block;
                transition: transform .25s ease-in-out;
                
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
}

.navbar-menu {
    display: flex;
}
</style>