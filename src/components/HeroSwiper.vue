<script setup>
import { nextTick, onMounted, ref } from "vue";
import { gsap } from "gsap";

// Images
import PrevIcon from '../assets/icon_prev.svg';
import NextIcon from '../assets/icon_next.svg';
import Hero0 from '../assets/hero_0.png';
import Hero0Mobile from '../assets/hero_0_mob.png';
import Hero1 from '../assets/hero_1.png';
import Hero1Mobile from '../assets/hero_1_mob.png';
import Hero2 from '../assets/hero_2.png';
import Hero2Mobile from '../assets/hero_2_mob.png';
import SmileIcon from '../assets/icon_smile.svg';
import IconHeroText from "./icons/IconHeroText.vue";

const heros = [
    {   
        'id': 'hero0',
        'desktop': Hero0,
        'mobile': Hero0Mobile
    },
    {
        'id': 'hero1',
        'desktop': Hero1,
        'mobile': Hero1Mobile
    },
    {
        'id': 'hero2',
        'desktop': Hero2,
        'mobile': Hero2Mobile
    }
]

// Controls
// Swipte on phone
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

function handleGesture(touchstartX, touchstartY, touchendX, touchendY) {
    const delx = touchendX - touchstartX;
    const dely = touchendY - touchstartY;
    if(Math.abs(delx) > Math.abs(dely)){
        if(delx > 0) {
            // alert("right")
            prevHero()
        }else{
            // alert("left")
            nextHero()
        }
    }
}

function scrollBox(){
    const dom = heroScrollBox.value
    gsap.to(dom, {
            x: ()=>{
                if (activeHero.value === 0){
                    return (heros[activeHero.value].left)*-1
                }else if (activeHero.value === heros.length - 1){
                    let gap = window.innerWidth - heros[activeHero.value].width
                    return (heros[activeHero.value].left)*-1+gap
                }else{
                    let gap = (window.innerWidth - heros[activeHero.value].width)/2
                    return (heros[activeHero.value].left)*-1+gap
                }

            }
        })
}

function initHero(){
    const herosDom = heroScrollBox.value.children
    const arr = Array.from(herosDom)
    for (let i=0; i<arr.length; i++){
        console.log(arr[i].offsetLeft)
        heros[i]['left'] = arr[i].offsetLeft
        heros[i]['width'] = arr[i].clientWidth
    }
    scrollBox()
}

function nextHero(){
    if (activeHero.value + 1 < heros.length){
        activeHero.value += 1
    }else{
        activeHero.value = 0
    }
    scrollBox()
}

function prevHero(){
    if (activeHero.value > 0){
        activeHero.value -= 1
    }else{
        activeHero.value = heros.length - 1
    }
    scrollBox()
}


// 
const activeHero = ref(1);
const heroScrollBox = ref(null);
const heroBox = ref(null);
onMounted(()=>{
    nextTick(()=>{
        initHero()

        const gestureZone = heroBox.value
        gestureZone.addEventListener('touchstart', function(event) {
            touchstartX = event.changedTouches[0].screenX;
            touchstartY = event.changedTouches[0].screenY;
        }, false);
        gestureZone.addEventListener('touchend', function(event) {
            touchendX = event.changedTouches[0].screenX;
            touchendY = event.changedTouches[0].screenY;
            handleGesture(touchstartX, touchstartY, touchendX, touchendY)
        }, false); 
    })
})

window.addEventListener('resize', ()=>{
    initHero()
})
</script>

<template>
    <section class="relative py-4 outer" ref="heroBox">
        <section class="overflow-hidden">
            <div class="flex items-center" ref="heroScrollBox"
            id="heroScrollBox">
                <div v-for="(hero, idx) of heros" :key="hero.id" class="shrink-0 transition-all
                w-10/12"
                :class="{'hero-prev': idx === activeHero - 1,
                'hero-active': idx === activeHero,
                'hero-next': idx === activeHero + 1,}">
                    <img :src="hero.desktop" class="hidden lg:block w-full" alt="">
                    <img :src="hero.mobile" class="lg:hidden w-full" alt="">
                </div>
            </div>
        </section>
        <div class="hidden absolute lg:flex justify-between w-full top-1/2 z-10">
            <img :src="PrevIcon" @click="prevHero" alt="" />
            <img :src="NextIcon" @click="nextHero" alt="" />
        </div>
        <div id="smileIcon" class="absolute w-6 lg:w-32 spin-3d">
            <img :src="SmileIcon" alt="">
        </div>
        <div id="textIcon" class="absolute">
            <IconHeroText class="w-32 lg:w-fit"></IconHeroText>
        </div>
    </section>
</template>

<style scoped>
.hero-prev{
    & img{
        perspective-origin: left;
        transform: perspective(500px) rotateY(2deg) translateZ(-10px);
    }
}

.hero-active{
    transform: perspective(500px) translateZ(0);
}
.hero-next {
    & img{
        perspective-origin: right;
        transform: perspective(500px) rotateY(-2deg) translateZ(-10px);
    }
}

#smileIcon{
    top: 72px;
    right: 137px;
}

#textIcon{
    top: 50%;
    left: 137px;
}

@media screen and (min-width: 992px){
    .outer{
        &::before, &::after{
            content: '';
            position: absolute;
            top: 0;
            display: block;
            width: 50px;
            height: 100%;
            background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
            z-index: 1;
        }
        &::after{
            right: 0;
            background: linear-gradient(-90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
        }
    }
}
</style>