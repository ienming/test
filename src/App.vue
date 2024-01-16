<script setup>
import StudioHeader from './components/StudioHeader.vue';
import StudioFooter from './components/StudioFooter.vue';
import HeroSwiper from './components/HeroSwiper.vue';
import MarqueeSection from './components/MarqueeSection.vue';
import FeatureItems from './components/FeatureItems.vue';
import Swiper from './components/Swiper.vue';
import Scene from './components/Scene.vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nextTick, onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger);
onMounted(()=>{
  nextTick(()=>{
    const els = document.querySelectorAll('[data-scroll-in="true"]')
    console.log(els)
    Array.from(els).forEach(el => {
      gsap.fromTo(el, {
        opacity: 0
      },{
        scrollTrigger: {
          trigger: el,
          start: "clamp(-=200, top)",
          end: "clamp(bottom, bottom)",
        },
        opacity: 1
      })
    })
  })
})
</script>

<template>
  <StudioHeader data-scroll-in="true"></StudioHeader>
  <main>
    <HeroSwiper data-scroll-in="true"></HeroSwiper>
    <FeatureItems></FeatureItems>
    <MarqueeSection data-scroll-in="true"></MarqueeSection>
    <section class="p-4 py-8 lg:py-40 flex flex-col justify-center items-center relative">
      <Swiper></Swiper>
    </section>
    <Scene data-scroll-in="true"></Scene>
  </main>
  <StudioFooter data-scroll-in="true"></StudioFooter>
</template>

<style scoped>
</style>