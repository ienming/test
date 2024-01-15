<script setup>
import IconLogo from './icons/IconLogo.vue';

const linksDesktop = [
    {
        label: 'HOME',
        visible: 'desktop'
    },
    {
        label: 'ABOUT',
        visible: 'desktop'
    },
    {
        label: 'SERVICE',
        visible: 'desktop'
    },
    {
        label: 'GALLERY',
        visible: 'desktop'
    },
    {
        label: 'CONTACT',
        visible: 'desktop'
    }
]

const linksMobile = [
    {
        label: 'MENU',
        visible: 'mobile'
    }
]
</script>

<template>
    <header class="flex justify-between w-screen py-4 px-8
    border-b border-white">
        <div class="w-[90px]">
            <IconLogo class="w-full h-full"></IconLogo>
        </div>
        <section class="fz-body-small">
            <div class="hidden lg:flex gap-16">
                <a href="" v-for="(link, idx) of linksDesktop"
                :class="idx === 0 ? 'active':''"
                class="underline studio-link">{{ link.label }}</a>
            </div>
            <a href="" v-for="link of linksMobile"
            class="lg:hidden underline studio-link">{{ link.label }}</a>
        </section>
    </header>
</template>

<style scoped>
.studio-link{
    position: relative;
    --dot-size: 8px;
    --dot-gap: 12px;
    &::before{
        content: '';
        display: block;
        width: var(--dot-size);
        height: var(--dot-size);
        position: absolute;
        top: 70%;
        left: -20px;
        transform: translateY(-50%);
        border-radius: 50%;
        background-color: white;
        opacity: 0;
        transition: all .1s ease-in;
    }
}

.studio-link:hover::before,
.studio-link.active::before{
    opacity: 1;
    top: 50%;
}
</style>