import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// import { scene, sceneBaked } from "./scene.js";
import { cube1, cube2, stageFlag } from "./cube.js";
import { stage, stageBaked } from "./stage.js";
import egg from "./egg.js";
import { lottery, objLottery } from "./lottery-machine.js";
// import fox from "./fox.js";
import { Fox } from "./fox.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1b1b1b);

let mixer = null;

// 그리드 세팅
// const gridSize = 80;
// const gridDivisions = 80;
// const gridColor = "0xffff80";
// const gridHelper = new THREE.GridHelper(
//   gridSize,
//   gridDivisions,
//   gridColor,
//   gridColor
// );
// scene.add(gridHelper);

// 축 세팅
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// 카메라 세팅
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(0, 2, 10);

// 캔버스 생성 및 랜더링 조건 설정

const params = {
  exposure: 1.0,
  toneMapping: "ACESFilmic",
  blurriness: 0.3,
  intensity: 1.0,
};
const toneMappingOptions = {
  None: THREE.NoToneMapping,
  Linear: THREE.LinearToneMapping,
  Reinhard: THREE.ReinhardToneMapping,
  Cineon: THREE.CineonToneMapping,
  ACESFilmic: THREE.ACESFilmicToneMapping,
  Custom: THREE.CustomToneMapping,
};
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true;
// renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMapping = toneMappingOptions.Cineon;
renderer.toneMappingExposure = params.exposure;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);

// 카메라 궤도 컨트롤러
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 3;
controls.maxDistance = 100;
controls.maxPolarAngle = Math.PI / 2;
controls.target.set(0, 1, 0);
// 줌 비활성화
// controls.enableZoom = false;
controls.update();

// 캔버스 추가
document.body.appendChild(renderer.domElement);

// 큐브 추가
scene.add(cube1, cube2, stageFlag);

// 무대 원본, 베이킹본
stage(scene);
// stageBaked(scene);

// 달걀
egg(scene);

// 로터리 머신 비동기함수
lottery("./static/model/lottery-machine1.glb", scene);
// const loadLottery = async () => {
//   await gltfLoader.loadAsync("./static/model/lottery-machine1.glb").then(
//     (model) => scene.add(model.scene),
//     (error) => {
//       console.log("model error: " + error);
//     }
//   );
// };
// objLottery(scene);

// loadLottery();

// 여우
// fox(scene);
const fox = new Fox(scene);

// 빛!
const light = new THREE.DirectionalLight(0xd5deff);
light.position.set(400, 250, 500);
scene.add(light);

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
scene.add(bulbLight);

const hemiLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 0.02);
scene.add(hemiLight);

// 큐브 추가 및 움직임
function render() {
  cube1.rotation.x += 0.03;
  cube1.rotation.y += 0.03;
  cube2.rotation.y += 0.03;
  stageFlag.rotation.y += 0.05;

  // 파이널 랜더링
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

animate();
