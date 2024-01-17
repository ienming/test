<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
// Assets
import MaskButton from './MaskButton.vue';
import IconLineH from './icons/IconLineH.vue';
import IconLineV from './icons/IconLineV.vue';

function getImgUrl(id) {
    return new URL(`../assets/item_${id}.png`, import.meta.url).href
}

const items = [
    [
        {
            id: "1_1",
            class: `col-start-4 col-span-3 row-start-2 row-span-2
        lg:col-start-7 lg:row-start-1`,
            intro: "CLASSIC JACKET"
        },
        {
            id: "1_2",
            class: `col-start-1 col-span-2 row-start-3 row-span-2
        lg:col-start-4 lg:row-start-2`,
            intro: "2020 FW BLACK SUIT"
        },
        {
            id: "1_3",
            class: `col-start-5 col-span-2 row-start-4 row-span-2
        lg:col-start-8 lg:row-start-3`,
            intro: "GERDERLESS PAINT"
        }
    ],
    [
        {
            id: "2_1",
            class: `col-start-4 col-span-3 row-start-2 row-span-2
            lg:col-start-7 lg:row-start-1 lg:row-span-1 lg:col-span-2`,
            intro: "CLASSIC JACKET"
        },
        {
            id: "2_2",
            class: `col-start-1 col-span-2 row-start-3 row-span-2
            lg:col-start-4 lg:row-start-2`,
            imgClass: `lg:origin-bottom-left lg:scale-125`,
            intro: "2020 FW BLACK SUIT"
        },
        {
            id: "2_3",
            class: `col-start-5 col-span-2 row-start-4 row-span-2
            lg:col-start-8 lg:row-start-3`,
            intro: "GERDERLESS PAINT"
        }
    ],
    [
        {
            id: "3_1",
            class: `col-start-4 col-span-3 row-start-2 row-span-2
            lg:col-start-7 lg:row-start-1 lg:row-span-1 lg:col-span-2`,
            intro: "CLASSIC JACKET"
        },
        {
            id: "3_2",
            class: `col-start-1 col-span-2 row-start-3 row-span-2
            lg:col-start-4 lg:row-start-2`,
            intro: "2020 FW BLACK SUIT"
        },
        {
            id: "3_3",
            class: `col-start-5 col-span-2 row-start-4 row-span-2
            lg:col-start-7 lg:row-start-3`,
            imgClass: `lg:origin-bottom-left lg:scale-150`,
            intro: "GERDERLESS PAINT"
        }
    ]
]

let currentIndex = ref(0)
let timer
const nowItems = computed(()=>{
    return items[currentIndex.value]
})

onMounted(()=>{
    timer = window.setInterval(()=>{
        if (currentIndex.value < items.length - 1){
            currentIndex.value +=1
        }else{
            currentIndex.value = 0
        }
    }, 3000)
})

onUnmounted(()=>{
    window.clearInterval(timer)
})
</script>

<template>
    <section class="p-4 lg:p-16 grid">
        <div class="leading-none col-start-1 col-span-4 row-start-1
        lg:col-span-5" data-scroll-in>
            <h2 class="fz-h1">SEASONAL</h2>
            <h2 class="fz-h2 flex items-center gap-2">
                <span>FEATURED</span>
                <MaskButton class="hidden lg:inline-flex"></MaskButton>
            </h2>
            <h2 class="fz-h1">ITEMS</h2>
            <MaskButton class="lg:hidden"></MaskButton>
        </div>
        <IconLineV class="col-start-6 col-span-1 py-12
        lg:col-start-10 lg:py-0 lg:self-end" data-scroll-in></IconLineV>
        <transition-group name="fade">
            <div class="relative" data-scroll-in
            v-for="item of nowItems"
            :key="item.id"
            :class="item.class ? item.class : ''">
                <img :src="getImgUrl(item.id)" alt="" class="w-full"
                :class="item.imgClass"/>
                <p class="mt-2 text-center lg:text-left">{{ item.intro }}</p>
            </div>
        </transition-group>
        <IconLineH class="row-start-5 col-span-3 w-40
        lg:row-start-4 lg:col-start-5 lg:w-auto" data-scroll-in></IconLineH>
    </section>
</template>

<style scoped>
section.grid {
    grid-gap: 8px;
    row-gap: 20px;
    grid-template-columns: repeat(6, 1fr);
}

@media screen and (min-width: 992px) {
    section.grid {
        grid-gap: 20px;
        grid-template-columns: repeat(10, 1fr);
    }
}
</style>