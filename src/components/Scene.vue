<script setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { nextTick, onMounted, ref } from 'vue';
import modelPath from '../assets/ring.glb';
import IconLogo from './icons/IconLogo.vue';
import IconStone from '../assets/icon_stone.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// THREE
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(4, 5, 11);

const renderer = new THREE.WebGLRenderer({
    alpha: true
});
const canvasH = window.innerWidth > 992 ? window.innerHeight*0.7:window.innerHeight*0.5
renderer.setSize(window.innerWidth, canvasH);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const sceneContainer = ref(null);
onMounted(()=>{
    nextTick(()=>{
        // console.log(sceneContainer.value)
        sceneContainer.value.appendChild(renderer.domElement);

        const logo = sceneContainer.value.querySelector(".logo")
        const text = sceneContainer.value.querySelector(".text")
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: sceneContainer.value,
                start: "clamp(-150 top)",
                end: "+=1000",
                pin: true,
                scrub: 1,
                // markers: true
            },
        })
        tl.add(
            gsap.to(logo, {
                scale: 0.2
            })
        ).add(
            gsap.fromTo(text,{
                opacity: 0,
            },
            {
                opacity: 1,
                xPercent: -50
            }),
            "<"
        )
    })
})

// Control
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

// Real 3D object
// Load a glTF resource
const loader = new GLTFLoader()
let mesh, material
loader.load(modelPath, (gltf) => {
    mesh = gltf.scene;
    // console.log(mesh)

    material = new THREE.MeshMatcapMaterial({
        color: 0xD7FF66
    });
    mesh.traverse((child) => {
        if (child.isMesh) {
            child.material = material;
        }
      });

    
    mesh.position.set(0, 1.05, -1);

    const Size = 45
    mesh.scale.set(Size, Size, Size);

    scene.add(mesh);
}, undefined, function (error) {
    console.error(error);
});

function mapTo01(value, originalMin, originalMax) {
    const newMin = 0.225;
    const newMax = 0.5;
    const normalizedValue = (value - originalMin) / (originalMax - originalMin);
    return normalizedValue * (newMax - newMin) + newMin;
}

function changeColor(evt){
    const [mouseX, mouseY] = [evt.clientX, evt.clientY]
    const [canvasW, canvasH] = [sceneContainer.value.clientWidth, sceneContainer.value.clientHeight]
    const h = mapTo01(mouseX, 0, canvasW);
    const l = (mouseY * 0.5)/canvasH;

    const color = new THREE.Color();
    color.setHSL(h, 1.0, l);

    material.color.copy(color);
}

function animate() {
    if (mesh){
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
    }
    controls.update();
    renderer.render(scene, camera);

    //looping
    requestAnimationFrame(animate);
}
animate();
</script>

<template>
    <section ref="sceneContainer" data-scroll-in class="relative overflow-x-hidden" @mousemove="changeColor">
        <h2 class="text absolute top-1/2 -translate-y-1/2 left-1/2 fz-h1 pointer-events-none whitespace-nowrap"
        style="z-index: -1;">
            <span>NATURE. ELEGANT. CLASSIC.</span>
            <span class="pl-28 lg:pl-72">NATURE. ELEGANT. CLASSIC.</span>
        </h2>
        <IconLogo class="logo w-full lg:w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></IconLogo>
        <img :src="IconStone" data-scroll-in class="spin-2d w-6 left-12 lg:left-30 lg:top-20" alt="" />
        <img :src="IconStone" data-scroll-in class="spin-2d w-12 top-12 right-20" alt="" />
        <img :src="IconStone" data-scroll-in class="spin-2d w-6 right-48 bottom-20" alt="" />
    </section>
</template>

<style scoped>
.spin-2d{
    pointer-events: none;
    @apply absolute lg:w-fit;
}
</style>