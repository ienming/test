<script setup>
import { computed, ref, onMounted, onUnmounted, nextTick } from 'vue';
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
            class: `col-start-4 col-span-3 row-span-2
        lg:col-start-4 lg:row-start-1 lg:row-span-4 lg:col-span-4`,
            intro: "CLASSIC JACKET"
        },
        {
            id: "1_2",
            class: `col-start-1 col-span-2 row-start-2 row-span-2
        lg:row-start-4 lg:col-span-3`,
            intro: "2020 FW BLACK SUIT"
        },
        {
            id: "1_3",
            class: `col-start-5 col-span-2 row-start-3 row-span-2
        lg:col-start-5 lg:col-span-3 lg:row-start-5`,
            intro: "GERDERLESS PAINT"
        }
    ],
    [
        {
            id: "2_1",
            class: `col-start-4 col-span-3 row-span-2
        lg:col-start-5 lg:row-start-1`,
            intro: "CLASSIC JACKET"
        },
        {
            id: "2_2",
            class: `col-start-1 col-span-2 row-start-2 row-span-2
        lg:row-start-2 lg:col-span-4`,
            intro: "2020 FW BLACK SUIT"
        },
        {
            id: "2_3",
            class: `col-start-5 col-span-2 row-start-3 row-span-2
        lg:col-start-6 lg:row-start-4 lg:col-span-3`,
            intro: "GERDERLESS PAINT"
        }
    ],
    [
        {
            id: "3_1",
            intro: "CLASSIC JACKET"
        },
        {
            id: "3_2",
            intro: "2020 FW BLACK SUIT"
        },
        {
            id: "3_3",
            intro: "GERDERLESS PAINT"
        }
    ]
]

let currentIndex = ref(0)
let timer
const nowItems = computed(()=>{
    return items[currentIndex.value]
})

const title = ref(null)
const grid = ref(null)

function recalculateGrid(){
    if (window.innerWidth >= 992){
        nextTick(()=>{
            const titleHeight = title.value.clientHeight
            grid.value.style['margin-top'] = titleHeight*-1+'px'
        })
    }
}

onMounted(()=>{
    window.addEventListener('resize', ()=>{
        recalculateGrid()
    })
    recalculateGrid()
    // timer = window.setInterval(()=>{
    //     if (currentIndex.value < items.length - 1){
    //         currentIndex.value +=1
    //     }else{
    //         currentIndex.value = 0
    //     }
    // }, 2000)
})

onUnmounted(()=>{
    window.clearInterval(timer)
})
</script>

<template>
    <section class="p-4 lg:p-16">
        <div class="leading-none" data-scroll-in ref="title">
            <h2 class="fz-h1">SEASONAL</h2>
            <h2 class="fz-h2 flex items-center gap-2">
                <span>FEATURED</span>
                <MaskButton class="hidden lg:inline-flex"></MaskButton>
            </h2>
            <h2 class="fz-h1">ITEMS</h2>
            <MaskButton class="lg:hidden"></MaskButton>
        </div>
        <section ref="grid" class="grid lg:pl-[33.3vw]">
            <IconLineV class="hidden lg:block col-start-8 col-span-2 row-span-4 self-center" data-scroll-in></IconLineV>
            <div class="relative" data-scroll-in
            v-for="item of nowItems"
            :key="item.id"
            :class="item.class ? item.class : ''">
                <img :src="getImgUrl(item.id)" alt="" class="w-full" />
                <p class="mt-2 text-center lg:text-left">{{ item.intro }}</p>
            </div>
            <IconLineH class="w-40 row-start-4 col-span-4 lg:row-start-6 lg:w-auto" data-scroll-in></IconLineH>
        </section>
    </section>
</template>

<style scoped>
section.grid {
    grid-gap: 8px;
    row-gap: 20px;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(100px, max-content);
}

@media screen and (min-width: 992px) {
    section.grid {
        grid-gap: 48px;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(4, auto);
    }
}
</style>