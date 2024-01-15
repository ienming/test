<script setup>
import IconDot from './icons/IconDot.vue';
import bgImgDesktop from '../assets/sec_3.png';
import bgImgMobile from '../assets/sec_3_mob.png';
import mqImg from '../assets/sec_3_marquee.png';
</script>

<template>
    <section class="relative overflow-hidden">
        <img :src="bgImgDesktop" class="w-full hidden lg:block" alt="">
        <img :src="bgImgMobile" class="w-full lg:hidden" alt="">
        <section class="absolute top-0 left-0 fz-h1 flex">
            <div class="marquee whitespace-nowrap relative" v-for="n of 2" :key="n">
                <span class="flex items-center gap-4">
                    <span>NATURE. ELEGANT. CLASSIC</span>
                    <div>
                        <IconDot class="w-2 lg:w-6"></IconDot>
                    </div>
                    <div class="w-28 lg:w-48">
                        <img :src="mqImg" alt="" class="w-full"/>
                    </div>
                    <div>
                        <IconDot class="w-2 lg:w-6"></IconDot>
                    </div>
                </span>
            </div>
        </section>
    </section>
</template>

<style scoped>
.marquee{
    animation: marquee 10s infinite linear;
}
.marquee:nth-child(2){
    left: -100%;
    /* border: 1px solid red; */
}

@keyframes marquee {
    0% {
        transform: translateX(0%);
    }
    100%{
        transform: translateX(100%);
    }
}
</style>