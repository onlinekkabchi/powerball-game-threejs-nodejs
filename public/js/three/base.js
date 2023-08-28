import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { gridHelper, axesHelper } from "./helper/helper.js";
import { camera, orbitController } from "./camera/camera.js";
import { renderer } from "./camera/renderer.js";
import { dirLight, bulbLight, hemiLight } from "./light/light.js";
// import { scene, sceneBaked } from "./scene.js";
import { cube1, cube2, stageFlag } from "./models/cube.js";
import { stage, stageBaked } from "./models/stage.js";
import egg from "./models/egg.js";
import { lottery, objLottery } from "./models/lottery-machine.js";
// import fox from "./fox.js";
import { Fox } from "./models/fox.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1b1b1b);

// helper 세팅
scene.add(gridHelper, axesHelper);

// 카메라, 랜더러 추가
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

// 빛 추가!
scene.add(dirLight, bulbLight, hemiLight);

const radius = 5;
const angularSpeed = 1;
const eggSpeed = 2;

// 랜더링 함수
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

  // // 달걀 원운동 // cannot read the undefined of 'set' 에러 뜸
  // const eggX = radius * Math.cos(eggSpeed * time);
  // const eggZ = radius * Math.sin(eggSpeed * time);
  // fox.position.set(eggX, 1, eggZ);

  // 파이널 랜더링
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

animate();
