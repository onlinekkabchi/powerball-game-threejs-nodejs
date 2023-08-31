import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// threejs 인스턴스
// import { gridHelper, axesHelper } from "./helper/helper.js";
// import { camera, orbitController } from "./camera/camera.js";
// import { orbitController } from "./camera/camera.js";
// // import { renderer } from "./camera/renderer.js";
import {
  ambientLight,
  dirLight,
  hemiLight,
  dirLightHelper,
  hemiLightHelper,
} from "./light/light.js";

import { rectLight1, rectLight2, rectLight3 } from "./light/light-rect.js";
import { pointLight, pointLightHelper } from "./light/light-point.js";
import { bulbLight } from "./light/light-bulb.js";

// // 모델
// import { cube1, cube2 } from "./models/cube.js";
// import { stage, stageBaked } from "./models/stage.js";
// import Lottery from "./models/lottery-machine-class.js";
// import { Fox } from "./models/fox.js";
// import { sphere, sphere1 } from "./models/sphere.js";

// // 텍스쳐
// import { hdrLoader } from "./camera/hdr.js";

const loader = new GLTFLoader();

let mesh;
let group, camera, scene, renderer;

init();

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a1a1a);
  console.log("scene");

  // camera = new THREE.PerspectiveCamera(
  //   40,
  //   window.innerWidth / window.innerHeight,
  //   1,
  //   100
  // );
  // camera.position.set(5, 2, 8);

  camera = new THREE.OrthographicCamera(
    window.innerWidth / -2,
    window.innerWidth / 2,
    window.innerHeight / 2,
    window.innerHeight / -2,
    -200,
    500 // 카메라 거리
  );
  camera.position.set(0, 1, 10);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 20;
  controls.maxDistance = 50;
  controls.maxPolarAngle = Math.PI / 2;

  scene.add(ambientLight, dirLight, dirLightHelper, hemiLight, hemiLightHelper);
  // const light = new THREE.PointLight(0xffffff, 1000, 0, 0);

  scene.add(new THREE.AxesHelper(20));
  const meshMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    opacity: 0.5,
    side: THREE.DoubleSide,
    transparent: true,
  });
  const meshGeometry = new THREE.BoxGeometry(100, 100, 100);
  mesh = new THREE.Mesh(meshGeometry, meshMaterial);
  mesh.position.set(0, 80, 0);
  scene.add(mesh);

  // window.addEventListener( 'resize', onWindowResize );

  // 무대 베이킹본
  loader.load(
    "./static/model/stage-baked/scene.gltf",
    function (gltf) {
      const model = gltf.scene;

      console.log(model);

      model.position.set(0, 0, 0);
      model.scale.set(20, 20, 20); // orthographic 카메라 사용할때 크기 주의할것
      scene.add(model);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (err) {
      console.error(err);
    }
  );

  animate();

  // render();
}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.y += 0.005;

  render();
}

function render() {
  renderer.render(scene, camera);
}
