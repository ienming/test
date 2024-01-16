<script setup>
// Assets
import MaskButton from './MaskButton.vue';
import Item_1_1 from '../assets/item_1_1.png';
import Item_1_2 from '../assets/item_1_2.png';
import Item_1_3 from '../assets/item_1_3.png';
import Item_2_1 from '../assets/item_2_1.png';
import Item_2_2 from '../assets/item_2_2.png';
import Item_2_3 from '../assets/item_2_3.png';

const items = [
    {
        id: "1-1",
        src: Item_1_1,
        class: `col-start-4 row-start-2 col-span-3 row-span-2
        lg:row-start-1`,
        intro: "CLASSIC JACKET"
    },
    {
        id: "1-2",
        src: Item_1_2,
        class: `col-start-1 row-start-3 col-span-2
        lg:col-start-2 lg:row-start-2`,
        intro: "2020 FW BLACK SUIT"
    },
    {
        id: "1-3",
        src: Item_1_3,
        class: `col-start-5 row-start-4 col-span-2
        lg:col-start-4 lg:row-start-3`,
        intro: "GERDERLESS PAINT"
    },
    // {
    //     id: "2-1",
    //     src: Item_2_1,
    //     class: "row-start-1 col-start-3 row-span-3",
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
    <!-- grid-cols-6 grid-rows-4 -->
    <section class="p-4 grid auto-cols-max">
        <div class="leading-none col-start-1 row-start-1 col-span-4">
            <h2 class="fz-h1">SEASONAL</h2>
            <h2 class="fz-h2 flex items-center gap-2">
                <span>FEATURED</span>
                <MaskButton class="hidden lg:inline-flex"></MaskButton>    
            </h2>
            <h2 class="fz-h1">ITEMS</h2>
            <MaskButton class="lg:hidden"></MaskButton>
        </div>
        <div class="inline item-img" v-for="item of items"
        :class="item.class ? item.class : ''">
            <img :src="item.src" alt="" />
            <p class="lg:mt-2">{{ item.intro }}</p>
        </div>
    </section>
</template>