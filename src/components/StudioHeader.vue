<script setup>
import { reactive } from 'vue';
import IconLogo from './icons/IconLogo.vue';

const links = reactive([
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
    },
    {
        label: 'MENU',
        visible: 'mobile'
    }
])
</script>

<template>
    <header class="flex justify-between w-screen py-4 px-8
    border-b border-white">
        <div class="w-[90px]">
            <IconLogo class="w-full h-full"></IconLogo>
        </div>
        <div class="flex gap-16 fz-body-small">
            <a href="" v-for="link of links"
            class="underline studio-link">{{ link.label }}</a>
        </div>
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
        top: 50%;
        left: -20px;
        transform: translateY(-50%);
        border-radius: 50%;
        background-color: white;
        opacity: 0;
    }
}

.studio-link:hover::before{
    opacity: 1;
}
</style>