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

function animateTarget(target, mouseX, mouseY) {
  const { top, left, width, height } = target.getBoundingClientRect();
  const centerX = left + width / 2;
  const centerY = top + height / 2;

  const distX = mouseX - centerX;
  const distY = mouseY - centerY;

  const attractionRadius = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);

  if (
    Math.abs(distX) < attractionRadius &&
    Math.abs(distY) < attractionRadius
  ) {
    const displacementX = (distX / attractionRadius) * 20;
    const displacementY = (distY / attractionRadius) * 20;

    gsap.to(target, {
      x: displacementX,
      y: displacementY,
      duration: 0.3,
      ease: "power2.out",
    });
  } else {
    gsap.to(target, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
  }
}

onMounted(()=>{
  nextTick(()=>{
    revealOnScroll()

    const targets = document.querySelectorAll(".toucher");
    document.addEventListener("mousemove", function (e) {
        Array.from(targets).forEach(target => {
          animateTarget(target, e.clientX, e.clientY);
        })
    });
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
  <StudioFooter></StudioFooter>
</template>

<style scoped>
</style>