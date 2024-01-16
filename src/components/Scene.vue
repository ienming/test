<script setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { nextTick, onMounted, ref } from 'vue';
import IconLogo from './icons/IconLogo.vue';
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
renderer.setSize(window.innerWidth, window.innerHeight*0.7);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const sceneContainer = ref(null);
onMounted(()=>{
    nextTick(()=>{
        console.log(sceneContainer.value)
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


// Light
const spotLight = new THREE.SpotLight(0xffffff,  3, 100, 0.22, 1);
spotLight.position.set(0, 25, 0);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);


// Real 3D object
// Load a glTF resource
const loader = new GLTFLoader()
let mesh
loader.load('/ring.glb', (gltf) => {
    mesh = gltf.scene;
    // console.log(mesh)

    let material = new THREE.MeshMatcapMaterial({
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
    <section ref="sceneContainer" class="relative overflow-hidden">
        <h2 class="text absolute top-1/2 -translate-y-1/2 left-1/2 fz-h1 pointer-events-none whitespace-nowrap">
            <span>NATURE. ELEGANT. CLASSIC.</span>
            <span class="pl-72">NATURE. ELEGANT. CLASSIC.</span>
        </h2>
        <IconLogo class="logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></IconLogo>
    </section>
</template>