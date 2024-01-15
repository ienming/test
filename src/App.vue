<script setup>
import StudioHeader from './components/StudioHeader.vue';
import StudioFooter from './components/StudioFooter.vue';
import HeroSwiper from './components/HeroSwiper.vue';
import MarqueeSection from './components/MarqueeSection.vue';
import FeatureItems from './components/FeatureItems.vue';
import Swiper from './components/Swiper.vue';
import Scene from './components/Scene.vue';
</script>

<template>
  <StudioHeader></StudioHeader>
  <main>
    <HeroSwiper></HeroSwiper>
    <FeatureItems></FeatureItems>
    <MarqueeSection></MarqueeSection>
    <section class="p-4 py-8 lg:py-40 flex flex-col justify-center items-center relative">
      <Swiper></Swiper>
    </section>
    <Scene></Scene>
  </main>
  <StudioFooter></StudioFooter>
</template>

<style scoped>
</style>