import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { GUI } from "dat.gui";

// Create a scene
const scene = new THREE.Scene({
  background: 0x9f9fff,
});
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.getElementById("canvas"),
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x444444);
// Create a cube

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(1000, 1000, 10, 10),
  new THREE.MeshLambertMaterial({
    color: 0x9f9fff,
  })
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -10;
scene.add(floor);

// =================================================
let root;
const loader = new GLTFLoader();
loader.load("./Room.glb", (gltf) => {
  root = gltf.scene;
  scene.add(root);
  console.log(gltf.scene);
  gltf.scene.scale.set(10, 10, 10);
  gltf.scene.rotation.set(0, 0, 0);
  gltf.scene.transform.set(0, 0, 0);
  gltf.scene.updateMatrix();
  gltf.scene.updateMatrixWorld(true);
});

// =================================================
let axisHelper = new THREE.AxisHelper(0.1);
var localToCameraAxesPlacement = new THREE.Vector3(
  0.45 * camera.aspect,
  -0.45,
  -2
); // make sure to update this on window resize
scene.add(axisHelper);
const axesPlacement = camera.localToWorld(localToCameraAxesPlacement.clone());
axisHelper.position.copy(axesPlacement);
// =================================================

// var cubeMesh = new THREE.Mesh(cubeGeometry, basicMaterial);
// scene.add(cubeMesh);
camera.position.z = 50;
camera.position.x = 100;
camera.position.y = 70;

// Create a light +  controls
const controls = new OrbitControls(camera, renderer.domElement);
scene.add(controls);

// const light = new THREE.SpotLight(0xffffff, 0.1, 1);
// scene.add(light);

// =================================================
var light = new THREE.PointLight(0x9f9fff, 1);
light.scale.set(10, 10, 10);
scene.add(light);
light.position.set(12, 40, 30);
const lightHelp = new THREE.PointLightHelper(light, 1);
scene.add(lightHelp);
// =================================================

const spotLight = new THREE.SpotLight(0xffff00, 1.8, 100);
spotLight.position.set(30, 100, 20);
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
spotLight.shadow.camera.near = 0.5;
spotLight.shadow.camera.far = 50;
spotLight.shadow.camera.fov = 30;

scene.add(spotLight);

const spotLightHelp = new THREE.SpotLightHelper(spotLight, 1);
scene.add(spotLightHelp);
// =================================================

const directLight = new THREE.DirectionalLight(0x9f9fff, 0.04);
directLight.position.set(0, 40, -30);
const t = new THREE.Object3D();
t.translateX(10);
t.translateY(30);
scene.add(t);
directLight.target = t;
directLight.target.updateMatrixWorld();
scene.add(directLight);
const directLightHelp = new THREE.DirectionalLightHelper(directLight, 1);
scene.add(directLightHelp);
// =================================================
// INIT GUI
const gui = new GUI();
gui.add(light, "intensity", 0, 2);
gui.add(light, "distance", 0, 100);
gui.add(light, "decay", 0, 2);
gui.add(light.scale, "x", -100, 100);
gui.add(light.scale, "y", -100, 100);
gui.add(light.scale, "z", -100, 100);
// =================================================

// gui spotLight
gui.add(spotLight, "intensity", 0, 2);
gui.add(spotLight, "distance", 0, 100);
gui.add(spotLight, "decay", 0, 2);
gui.add(spotLight.scale, "x", -100, 100);
gui.add(spotLight.scale, "y", -100, 100);
gui.add(spotLight.scale, "z", -100, 100);

// =================================================
//DirectLight
gui.add(directLight, "intensity", 0, 2);

// =================================================

const axes = new THREE.AxesHelper(20);
const grid = new THREE.GridHelper(100, 10);
scene.add(grid);
scene.add(axes);

// =================================================

function animate() {
  requestAnimationFrame(animate);
  // scene.rotation.y += 0.001;
  renderer.render(scene, camera);
}

animate();
