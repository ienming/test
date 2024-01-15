<script setup>
import { nextTick, onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 
console.log(gsap)

// Images
import PrevIcon from '../assets/icon_prev.svg';
import NextIcon from '../assets/icon_next.svg';
import Hero0 from '../assets/hero_0.png';
import Hero0Mobile from '../assets/hero_0_mob.png';
import Hero1 from '../assets/hero_1.png';
import Hero1Mobile from '../assets/hero_1_mob.png';
import Hero2 from '../assets/hero_2.png';
import Hero2Mobile from '../assets/hero_2_mob.png';

const heros = [
    {   
        'id': 'hero0',
        'desktop': Hero0,
        'mobile': Hero0Mobile
    },
    {
        'id': 'hero1',
        'desktop': Hero1,
        'mobile': Hero1Mobile
    },
    {
        'id': 'hero2',
        'desktop': Hero2,
        'mobile': Hero2Mobile
    }
]


// 
const heroScrollBox = ref();
console.log(heroScrollBox);
onMounted(()=>{
    const dom = heroScrollBox.value
    nextTick(()=>{
        const herosDom = dom.children
        Array.from(herosDom).forEach(hero => {
            console.log(hero.clientWidth)
            console.log(hero.offsetLeft)
        })
    })
    // gsap.to(dom, {
    //     xPercent: -100
    // })
})
</script>

<template>
    <section class="relative py-4">
        <section class="overflow-hidden">
            <div class="flex gap-4 items-center" ref="heroScrollBox"
            id="heroScrollBox">
                <div v-for="(hero, idx) of heros" :key="hero.id" class="shrink-0">
                    <img :src="hero.desktop" class="hidden lg:block" alt="">
                    <img :src="hero.mobile" class="lg:hidden" alt="">
                </div>
            </div>
        </section>
        <div class="absolute flex justify-between w-full top-1/2">
            <img :src="PrevIcon" alt="" />
            <img :src="NextIcon" alt="" />
        </div>
    </section>
</template>

<style scoped>
/* section{
    &::before{
        //TOOD: gradient overlap
    }
    &::after{
        //TOOD: gradient overlap
    }
} */
</style>