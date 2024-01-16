<script setup>
import { nextTick, onMounted, ref } from 'vue';

const icon = ref(null)
onMounted(()=>{
    nextTick(()=>{
        const els = icon.value.querySelectorAll(".svg-line-draw")
        Array.from(els).forEach((el) => {
            el.style['stroke-dasharray'] = el.getTotalLength()
            el.style['stroke-dashoffset'] = el.getTotalLength()
        })
    })
})
</script>
<template>
    <svg width="67" height="233" viewBox="0 0 67 233" fill="none" xmlns="http://www.w3.org/2000/svg"
    ref="icon">
<path class="svg-line-draw" d="M0.99987 1C26.9999 5.66667 75.4999 36.1248 64.9999 99.5C53.7999 167.1 17.6665 216 0.99987 232L42.4999 211.5" stroke="#7C7C7C"/>
</svg>
</template>