<script setup>
// Assets
import MaskButton from './MaskButton.vue';
import IconLineH from './icons/IconLineH.vue';
import IconLineV from './icons/IconLineV.vue';

function getImgUrl(id){
    return new URL(`../assets/item_${id}.png`, import.meta.url).href
}

const items = [
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
    },
    // {
    //     id: "2-1",
    //     src: Item_2_1,
    //     class: `col-start-4 col-span-3 row-start-2 row-span-2
    //     lg:col-start-7 lg:row-start-1`,
    //     intro: "CLASSIC JACKET"
    // },
    // {
    //     id: "2-2",
    //     src: Item_2_2,
    //     class: "row-start-4 col-start-2 row-span-2",
    //     intro: "2020 FW BLACK SUIT"
    // },
    // {
    //     id: "2-3",
    //     src: Item_2_3,
    //     class: "row-start-5 col-start-3 row-span-2",
    //     intro: "GERDERLESS PAINT"
    // }
]
</script>

<template>
    <section class="p-4 lg:p-16 grid">
        <div class="leading-none col-start-1 col-span-4 row-start-1
        lg:col-span-5" data-scroll-in="true">
            <h2 class="fz-h1">SEASONAL</h2>
            <h2 class="fz-h2 flex items-center gap-2">
                <span>FEATURED</span>
                <MaskButton class="hidden lg:inline-flex"></MaskButton>    
            </h2>
            <h2 class="fz-h1">ITEMS</h2>
            <MaskButton class="lg:hidden"></MaskButton>
        </div>
        <IconLineV class="col-start-6 col-span-1 py-12
        lg:col-start-10 lg:py-0 lg:self-end" data-scroll-in="true"></IconLineV>
        <div class="inline item-img" data-scroll-in="true" v-for="item of items"
        :class="item.class ? item.class : ''">
            <img :src="getImgUrl(item.id)" alt="" />
            <p class="mt-2 text-center lg:text-left">{{ item.intro }}</p>
        </div>
        <IconLineH class="row-start-5 col-span-3 w-40
        lg:row-start-4 lg:col-start-5 lg:w-auto" data-scroll-in="true"></IconLineH>
    </section>
</template>

<style scoped>
section.grid{
    grid-gap: 20px;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(100px, auto);
}

@media screen and (min-width: 992px) {
    section.grid{
        grid-template-columns: repeat(10, 1fr);
    }
}
</style>