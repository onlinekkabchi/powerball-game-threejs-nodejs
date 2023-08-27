import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// import { scene, sceneBaked } from "./scene.js";
import { cube1, cube2, stageFlag } from "./cube.js";
import { stage, stageBaked } from "./stage.js";
import egg from "./egg.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa0a0a0);

// 카메라 세팅
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(0, 2, 10);

// 캔버스 생성 및 라이트닝 조건 설정
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true;
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);

// 카메라 궤도 컨트롤러
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 3;
controls.maxDistance = 100;
controls.maxPolarAngle = Math.PI / 2;
controls.target.set(0, 1, 0);
controls.update();

// 캔버스 추가
document.body.appendChild(renderer.domElement);

// 큐브 추가
scene.add(cube1, cube2);

// 무대 원본, 베이킹본
stage(scene);
// stageBaked(scene);

// 달걀
egg(scene);

// 빛!
const light = new THREE.DirectionalLight(0xd5deff);
light.position.set(400, 250, 500);

const bulbGeometry = new THREE.SphereGeometry(0.02, 16, 8);
const bulbLight = new THREE.PointLight(0xffee88, 1, 100, 2);
const bulbMat = new THREE.MeshStandardMaterial({
  emissive: 0xffffee,
  emissiveIntensity: 1,
  color: 0x000000,
});
bulbLight.add(new THREE.Mesh(bulbGeometry, bulbMat));
bulbLight.position.set(0, 2, 0);
bulbLight.castShadow = true;

const hemiLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 0.02);

scene.add(light);
scene.add(hemiLight);
scene.add(bulbLight);

function animate() {
  requestAnimationFrame(animate);
  render();
}

// 큐브 추가 및 움직임
function render() {
  cube1.rotation.x += 0.03;
  cube1.rotation.y += 0.03;
  cube2.rotation.y += 0.03;

  // 파이널 랜더링
  renderer.render(scene, camera);
}

animate();
