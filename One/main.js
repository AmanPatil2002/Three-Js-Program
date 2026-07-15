import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as dat from 'lil-gui';


let loader = new THREE.TextureLoader();
let color = loader.load("./text/color.jpg");
let roughness = loader.load("./text/roughness.jpg");
let normal = loader.load("./text/normal.png");
let height = loader.load("./text/height.jpg");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const geometry = new THREE.BoxGeometry(3,1.8,2)
const material = new THREE.MeshStandardMaterial( { map: color, roughnessMap: roughness, normalMap: normal , displacementMap: height });
const cube = new THREE.Mesh( geometry, material );


const ambient = new THREE.AmbientLight( 0xffffff ,2); 
scene.add( ambient );

const directional = new THREE.DirectionalLight( 0xffffff, 3 );
directional.position.set( 2, 2, 2 );
scene.add( directional );

const helper = new THREE.DirectionalLightHelper(directional, 2);
scene.add(helper);

// const point = new THREE.PointLight( 0xffffff, 1 , 10, 2);
// point.position.set(0.3,-0.1,1);
// scene.add( point );

// const PointLightHelper = new THREE.PointLightHelper(point, 2);
// scene.add(PointLightHelper);

scene.add( cube );

camera.position.z = 5;

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize( window.innerWidth, window.innerHeight );

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
//controls.autoRotate = true;
controls.enableZoom = true;
//controls.autoRotateSpeed = 5.0

const gui = new dat.GUI();

const materialFolder = gui.addFolder('Material');
materialFolder.add(material, 'roughness', 0, 1, 0.01).name('Roughness');
materialFolder.add(material, 'metalness', 0, 1, 0.01).name('Metalness');
materialFolder.addColor(material, 'color').name('Color');
materialFolder.open();

const meshFolder = gui.addFolder('Mesh');
meshFolder.add(cube.scale, 'x', 0, 5, 0.01).name('Scale X');
meshFolder.add(cube.scale, 'y', 0, 5, 0.01).name('Scale Y');
meshFolder.add(cube.scale, 'z', 0, 5, 0.01).name('Scale Z');
meshFolder.add(cube.position, 'x', -10, 10, 0.01).name('Position X');
meshFolder.add(cube.position, 'y', -10, 10, 0.01).name('Position Y');
meshFolder.add(cube.position, 'z', -10, 10, 0.01).name('Position Z');
meshFolder.open();



window.addEventListener('resize', () =>{
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix()
})

function animate( time ) {
  window.requestAnimationFrame(animate)
  renderer.render( scene, camera );
  controls.update();
}
animate();