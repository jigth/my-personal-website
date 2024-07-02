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
                <div class="navbar-desktop">
                    <div class="navbar-item" v-for="(item, i) in navMenuItems" :key="i">
                        <a class="navbar-item__link" :href="item.link">{{ item.name }}</a> <!-- Blog posts archive -->
    
                        <div
                            v-if="i < (navMenuItems.length - 1)"
                            class="navbar-separator"
                        >|</div>
    
                    </div>
                </div>

                <div class="navbar-mobile">
                    <button class="navbar-mobile__toggle">
                        <font-awesome @click="() => displayMobileItems = !displayMobileItems" icon="burger" style="font-size: 25px;" />
                    </button>

                    <div :style="[ displayMobileItems ? 'display: flex;' : 'display: none;' ]" class="navbar-mobile__items">
                        <div class="navbar-mobile__items__item" v-for="(item, i) in navMenuItems" :key="i">
                            <a class="navbar-item__link" :href="item.link">{{ item.name }}</a> <!-- Blog posts archive -->
                        </div>
                    </div>
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

const displayMobileItems = ref<boolean>(false)
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

    .navbar-desktop {
        display: flex;
    }

    .navbar-mobile {
        display: none;
    }
}

@media (width <= 992px) {
    .navbar-item__specialty {
        display: none;
    }

    .navbar-menu {
        .navbar-desktop {
            display: none;
        }

        .navbar-mobile {
            display: flex;

            &__toggle {
                order: 2;
                background: none;
                color: inherit;
                border: none;
                padding: 0;
                font: inherit;
                cursor: pointer;
                outline: inherit;
            }

            &__items {
                order: 1;
                flex-direction: column;
                background: $navbarMobileMenuColor;
                width: 100vw;
                position: absolute;
                top: 55px;
                padding: 10px 0;
                left: 0;

                &__item {
                    display: block;
                    width: 100%;
                    text-align: center;
                    padding: 2px 0;
                    margin: auto;

                    a {
                        color: #eee;
                        text-shadow: 0 0 0.7px #eee;

                    }
                }
            }
        }
    }
}
</style>