//body {
//}

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

//const controls = new OrbitControls(camera, renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa0a0a0);
//scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / 2 / window.innerHeight,
//   0.1,
//   1000
// );
// camera.lookAt(0, 0, 0);
// camera.position.z = 20;

const camera = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(7, 4, 1);

const ambient = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 0.15);
scene.add(ambient);

const renderer = new THREE.WebGLRenderer();
const loader = new GLTFLoader();
loader.load(
  "./static/model/Tiger_I1.glb",
  function (gltf) {
    const model = gltf.scene;
    model.position.set(0, 0, 0);
    model.scale.set(1, 1, 1);
    scene.add(model);

    const animations = gltf.animations;
    let mixer = new THREE.AnimationMixer(model);
    mixer.clipAction(animations[0]).play();
  },
  undefined,
  function (err) {
    console.error(err);
  }
);

renderer.setSize(window.innerWidth / 2, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 2;
controls.maxDistance = 10;
controls.maxPolarAngle = Math.PI / 2;
controls.target.set(0, 1, 0);
controls.update();

document.body.appendChild(renderer.domElement);

// 큐브 그리기
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

function animate() {
  requestAnimationFrame(animate);

  //   cube.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
