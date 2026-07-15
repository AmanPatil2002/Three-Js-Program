// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,100);
// camera.position.set(0, 1, 2);

// // ✅ Correctly select the canvas by its ID
// const canvas = document.getElementById('canvas');
// const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.toneMappingExposure = 1;
// // ✅ Modern property (replaces deprecated outputEncoding)
// renderer.outputColorSpace = THREE.SRGBColorSpace;

// // Load HDRI environment map
// const rgbeLoader = new HDRLoader();
// rgbeLoader.load(
//   'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/cobblestone_parish_road_4k.hdr',
//   (texture) => {
//     texture.mapping = THREE.EquirectangularReflectionMapping;
//     scene.environment = texture;
//   },
//   undefined,
//   (error) => {
//     console.warn('HDRI failed to load, using fallback lighting', error);
//     scene.background = new THREE.Color(0x222222);
//     // Add a simple light so the cube is still visible
//     scene.add(new THREE.AmbientLight(0xffffff, 0.5));
//   }
// );

// const loader = new GLTFLoader();
// loader.load( '/fizzy_drink.glb', function ( gltf ) {
//   gltf.scene.position.y = -1;
//   scene.add( gltf.scene );
// }, )

// // Orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = true;
// controls.update();


// // Resize handler
// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// // Animation loop
// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }
// animate();