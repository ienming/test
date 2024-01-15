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
        class: "row-start-1 col-start-3 row-span-3",
        intro: "CLASSIC JACKET"
    },
    {
        id: "1-2",
        src: Item_1_2,
        class: "row-start-4 col-start-2 row-span-2",
        intro: "2020 FW BLACK SUIT"
    },
    {
        id: "1-3",
        src: Item_1_3,
        class: "row-start-5 col-start-3 row-span-2",
        intro: "GERDERLESS PAINT"
    },
    {
        id: "2-1",
        src: Item_2_1,
        class: "row-start-1 col-start-3 row-span-3",
        intro: "CLASSIC JACKET"
    },
    {
        id: "2-2",
        src: Item_2_2,
        class: "row-start-4 col-start-2 row-span-2",
        intro: "2020 FW BLACK SUIT"
    },
    {
        id: "2-3",
        src: Item_2_3,
        class: "row-start-5 col-start-3 row-span-2",
        intro: "GERDERLESS PAINT"
    }
]
</script>

<template>
    <section class="grid p-4" id="itemSec">
        <div class="leading-none col-start-1 row-span-3">
            <h2 class="fz-h1">SEASONAL</h2>
            <h2 class="fz-h2">FEATURED</h2>
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

<style scoped>
section.grid{
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, auto);
}

.item-img{

}
</style>