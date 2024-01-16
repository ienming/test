<script setup>
import ImageDesktop from '../assets/sec_4.png';
import ImageMobile from '../assets/sec_4_mob.png';

import IconStarText from './icons/iconStarText.vue';
import IconWeb from './icons/iconWeb.vue';
</script>

<template>
    <div class="text-right w-full inline-flex justify-end" data-scroll-in="true">
        <IconStarText class="w-1/2 lg:w-fit lg:absolute right-40 top-40"></IconStarText>
    </div>
    <div class="inline-block" data-scroll-in="true">
        <div class="relative z-10">
            <img :src="ImageDesktop" alt="" class="hidden lg:block lg:w-75">
            <img :src="ImageMobile" alt="" class="w-full lg:hidden">
        </div>
        <div class="card-content">
            <div class="border border-white rounded-2xl lg:rounded-[40px] p-4 lg:p-8 relative">
                <h2 class="fz-h3 inline-block">FW2020</h2>
                <p class="fz-h4 leading-none">BLACK COLLECTION</p>
                <div class="absolute right-0 bottom-1/4 lg:bottom-1/2 translate-x-1/2 flex z-10">
                    <button disabled class="rounded-l-lg lg:rounded-l-xl">
                        <span>PREVIOUS</span>
                    </button>
                    <button class="rounded-r-lg lg:rounded-r-xl">
                        <span>NEXT</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full pl-10 lg:pl-0" data-scroll-in="true">
        <IconWeb class="w-1/4 lg:w-fit lg:absolute left-40 bottom-40
        spin-3d"></IconWeb>
    </div>
</template>

<style scoped>
.card-content{
    --dist: 100px;
    --dot-size: 8px;
    margin-top: calc(var(--dist)*-1);
    > div{
        padding-top: var(--dist);
        width: 90%;
    }
    h2 {
        position: relative;
    }
    h2::after{
        content: '';
        display: block;
        position: absolute;
        right: calc(-32px - var(--dot-size));
        top: 50%;
        width: var(--dot-size);
        height: var(--dot-size);
        background-color: #fff;
        border-radius: 50%;
        transform: translateY(-50%);
    }
}

button {
    >span{

        writing-mode: vertical-lr;
    }
    @apply py-3 px-2 lg:py-5 lg:px-6 border border-white bg-white text-black;
    &:disabled{
        @apply bg-transparent text-white;
    }
    &:not(:disabled):hover{
        @apply bg-white/90;
    }
}

@media screen and (min-width: 992px) {
    .card-content{
        --dist: 210px;
        --dot-size: 24px;
        padding-left: var(--dist);
        > div{
            width: 100%;
        }
    }
}
</style>