import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { gridHelper, axesHelper } from "./helper/helper.js";
import { camera, orbitController } from "./camera/camera.js";
import { renderer } from "./camera/renderer.js";
import { dirLight, bulbLight, hemiLight } from "./light.js";
// import { scene, sceneBaked } from "./scene.js";
import { cube1, cube2, stageFlag } from "./cube.js";
import { stage, stageBaked } from "./stage.js";
import egg from "./egg.js";
import { lottery, objLottery } from "./lottery-machine.js";
// import fox from "./fox.js";
import { Fox } from "./fox.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1b1b1b);

// helper 세팅
scene.add(gridHelper, axesHelper);

// // 캔버스 생성 및 랜더링 조건 설정
// const params = {
//   exposure: 1.0,
//   toneMapping: "ACESFilmic",
//   blurriness: 0.3,
//   intensity: 1.0,
// };
// const toneMappingOptions = {
//   None: THREE.NoToneMapping,
//   Linear: THREE.LinearToneMapping,
//   Reinhard: THREE.ReinhardToneMapping,
//   Cineon: THREE.CineonToneMapping,
//   ACESFilmic: THREE.ACESFilmicToneMapping,
//   Custom: THREE.CustomToneMapping,
// };
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.shadowMap.enabled = true;
// // renderer.toneMapping = THREE.ReinhardToneMapping;
// renderer.toneMapping = toneMappingOptions.Cineon;
// renderer.toneMappingExposure = params.exposure;
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);

orbitController(camera, renderer);

// 캔버스 추가
document.body.appendChild(renderer.domElement);

// 큐브 추가
scene.add(cube2, stageFlag);

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
const fox = new Fox(scene);

// 빛!
scene.add(dirLight, bulbLight, hemiLight);

const radius = 5;
const angularSpeed = 1;

// 큐브 추가 및 움직임
function render() {
  cube2.rotation.x += 0.03;
  // cube1.rotation.y += 0.03;
  cube2.rotation.y += 0.03;
  stageFlag.rotation.y += 0.05;

  // 전구 원운동
  const time = performance.now() * 0.001; // Convert to seconds
  const bulbX = radius * Math.cos(angularSpeed * time);
  const bulbZ = radius * Math.sin(angularSpeed * time);
  bulbLight.position.set(bulbX, 1, bulbZ);
  cube1.position.set(bulbX, 1, bulbZ);

  // 파이널 랜더링
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

animate();
