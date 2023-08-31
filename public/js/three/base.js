import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// threejs 인스턴스
// import { gridHelper, axesHelper } from "./helper/helper.js";
import { camera, orbitController } from "./camera/camera.js";
import { renderer } from "./camera/renderer.js";
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

// 모델
import { cube1, cube2, stageFlag } from "./models/cube.js";
import { stage, stageBaked } from "./models/stage.js";
import egg from "./models/egg.js";
import Lottery from "./models/lottery-machine-class.js";
import { lottery } from "./models/lottery-machine.js";
// import { Lottery, objLottery } from "./models/lottery-machine.js";
// import fox from "./fox.js";
import { Fox } from "./models/fox.js";
import { sphere, sphere1 } from "./models/sphere.js";

// 텍스쳐
import { hdrLoader } from "./camera/hdr.js";

// 원운동
const radius = 100;
const angularSpeed = 2;

const clock = new THREE.Clock();
let currentCamera, currentScene, currentRenderer;
let mixer;
let balls;
const loader = new GLTFLoader();

function init() {
  // 씬 세팅
  currentScene = new THREE.Scene();
  currentScene.background = new THREE.Color(0x1a1a1a);
  // currentScene.background = hdrLoader; // 백그라운드 hdr 넣을지 안넣을지? post-processing때 처리할것.

  // helper 세팅
  // scene.add(gridHelper, axesHelper);

  // 카메라, 랜더러 추가
  currentCamera = camera;
  currentRenderer = renderer;
  orbitController(currentCamera, currentRenderer);

  // 캔버스 추가
  document.body.appendChild(renderer.domElement);

  // 큐브 추가
  currentScene.add(cube1, cube2);

  // 무대 원본, 베이킹본
  // stage(currentScene);
  stageBaked(currentScene);

  // 구
  currentScene.add(sphere, sphere1);

  // 로터리 머신 클래스
  // const lotteryPath = "./static/model/lottery-machine/lottery-machine2.glb";

  // lotmachine = new Lottery(lotteryPath, currentScene);
  // lotmachine.load();

  // 볼 시뮬레이션
  const ballCollisionPath =
    "./static/model/lottery-machine/ball-collision-2-1.glb";
  loader.load(ballCollisionPath, function (gltf) {
    balls = gltf.scene;

    console.log("balls");
    console.log(balls);

    balls.position.set(-40, 40, 0);
    balls.scale.set(10, 10, 10);
    currentScene.add(balls);

    balls.traverse(function (obj) {
      if (obj.isMesh) obj.castShadow = true;
    });
  });

  // 빛 추가
  currentScene.add(
    dirLight,
    hemiLight,
    ambientLight,
    dirLightHelper,
    hemiLightHelper
  );
  currentScene.add(bulbLight);
  // currentScene.add(pointLight, pointLightHelper);
  // currentScene.add(rectLight1, rectLight2, rectLight3);

  // 애니메이션
  // 폭죽 샘플
  const fireworkPath = "./static/model/firework/scene.gltf";
  loader.load(
    fireworkPath,
    function (gltf) {
      const firework = gltf.scene;

      console.log("firework");
      console.log(gltf);

      firework.position.set(-40, 120, 0);
      firework.scale.set(10, 10, 10);
      currentScene.add(firework);

      // console.log(gltf.animations[0]);
      // mixer = new THREE.AnimationMixer(firework);
      // mixer.clipAction(firework.animations[0]).play();

      animate();
    },
    undefined,
    function (e) {
      console.error(e);
    }
  );
}

// 랜더링 함수
function render() {
  cube1.rotation.x += 0.05;
  cube1.rotation.y += 0.05;
  cube2.rotation.x += 0.03;
  cube2.rotation.y += 0.03;
  // stageFlag.rotation.y += 0.05;

  // 전구 원운동
  const time = performance.now() * 0.001; // Convert to seconds
  const bulbX = radius * Math.cos(angularSpeed * time);
  const bulbZ = radius * Math.sin(angularSpeed * time);
  bulbLight.position.set(bulbX, 1, bulbZ);

  // 파이널 랜더링
  renderer.render(currentScene, currentCamera);
}

function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();
  // mixer.update(delta);

  render();
}

init();
