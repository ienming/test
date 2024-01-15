<script setup>
import MaskButton from './components/MaskButton.vue';
import StudioHeader from './components/StudioHeader.vue';
import HeroSwiper from './components/HeroSwiper.vue';
import MarqueeSection from './components/MarqueeSection.vue';
</script>

<template>
  <StudioHeader></StudioHeader>
  <main>
    <HeroSwiper></HeroSwiper>
    <MarqueeSection></MarqueeSection>
    <h1 class="fz-h1">Heading 1</h1>
    <h2 class="fz-h2">Heading 2</h2>
    <h3 class="fz-h3">Heading 3</h3>
    <h4 class="fz-h4">Heading 4</h4>
    <p>Body 1</p>
    <p class="fz-body-small">Body 2</p>
    <p class="fz-utility">Utility</p>
    <div class="p-20">
      <MaskButton></MaskButton>
    </div>
  </main>
</template>

<style scoped>
</style>