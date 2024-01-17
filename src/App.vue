<script setup>
import StudioHeader from './components/StudioHeader.vue';
import StudioFooter from './components/StudioFooter.vue';
import HeroSwiper from './components/HeroSwiper.vue';
import MarqueeSection from './components/MarqueeSection.vue';
import FeatureItems from './components/FeatureItems2.vue';
import Swiper from './components/Swiper.vue';
import Scene from './components/Scene.vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nextTick, onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger);

function revealOnScroll(){
  const els = document.querySelectorAll('[data-scroll-in]')
    // console.log(els)
    Array.from(els).forEach(el => {
      gsap.fromTo(el, {
        opacity: 0
      },{
        scrollTrigger: {
          trigger: el,
          start: "clamp(-500 top)",
          end: "clamp(bottom top)",
        },
        opacity: 1
      })
    })
}

onMounted(()=>{
  nextTick(()=>{
    revealOnScroll()
  })
})
</script>

<template>
  <StudioHeader></StudioHeader>
  <main>
    <HeroSwiper data-scroll-in></HeroSwiper>
    <FeatureItems></FeatureItems>
    <MarqueeSection data-scroll-in></MarqueeSection>
    <section class="p-4 py-8 lg:p-40 flex flex-col justify-center items-center relative">
      <Swiper></Swiper>
    </section>
    <Scene data-scroll-in></Scene>
  </main>
  <StudioFooter data-scroll-in></StudioFooter>
</template>

<style scoped>
</style>