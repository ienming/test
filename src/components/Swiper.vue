<script setup>
import ImageDesktop from '../assets/sec_4.png';
import ImageMobile from '../assets/sec_4_mob.png';
</script>

<template>
    <div class="inline-block">
        <div class="relative z-10">
            <img :src="ImageDesktop" alt="" class="lg:w-75 hidden lg:block">
            <img :src="ImageMobile" alt="" class="lg:w-75 lg:hidden">
        </div>
        <div class="relative card-content">
            <div class="border border-white rounded-2xl lg:rounded-[40px] p-4 relative">
                <h2 class="fz-h3">FW2020</h2>
                <p class="fz-h4 leading-none">BLACK COLLECTION</p>
                <button class="absolute right-0 bottom-1/2 py-5 px-7 border border-white ">
                    <span>PREVIOUS</span>
                </button>
                <button class="py-5 px-7 border border-white ">
                    <span>NEXT</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-content{
    --dist: 100px;
    top: calc(var(--dist)*-1);
    &>div{
        padding-top: var(--dist);
        width: 90%;
    }
}

@media screen and (min-width: 992px) {
    .card-content{
        --dist: 210px;
        padding-left: var(--dist);
    }
}
</style>