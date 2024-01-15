<script setup>
import { ref } from 'vue';
const text = ref("EXPLORE MORE")
</script>

<template>
    <div>
        <button class="pt-5 pb-6 px-3 lg:pt-6 lg:pb-7 lg:px-5 bg-no-repeat bg-contain fz-utility lg:text-base
        overflow-hidden">
            <span class="relative block"
            :data-content="text">{{ text }}</span>
        </button>
    </div>
</template>

<style scoped>
button{
    background-image: url('/public/button_subtract.svg');
}
span {
    transform: translateX(0);
    animation: marquee 2.3s linear infinite;
    &::before{
        content: attr(data-content);
        display: block;
        position: absolute;
        top: 0;
        transform: translateX(calc(-130% - 0.6em));
        left: 0;
        width: 100%;
        height: 100%;
    }
}

@keyframes marquee {
    from {
        transform: translate(0);
    }
    to{
        transform: translateX(calc(130% + 0.6em))
    }
}
</style>