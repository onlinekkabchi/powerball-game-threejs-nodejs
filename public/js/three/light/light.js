import * as THREE from "three";

// 빛 색
const light = {
  ambient: 0x404040,
  directional: 0xffffff, // 0xd5deff
  bulb: 0xec9006,
  veryLightYellow: 0xffffcc,
  lightYellow: 0xffff56,
  yellow1: 0xffe736,
  yellow2: 0xfecb00,
  green: 0x3cb043,
  lime: 0xaef359,
  mulberry: 0xc64b8c, // 0xc64b8c Mulberry, 0xde73ff helio
  helio: 0xc9f6ff,
};

// 빛 강도
// const hemiLuminousIrradiances = {
//   moonless: 0.0001, // 단위는 lx
//   "night airglow": 0.002,
//   fullmoon: 0.5,
//   twilight: 3.4,
//   "living room": 50,
//   "very overcast": 100,
//   "office room": 350,
//   snset: 400,
//   overcast: 1000,
//   daylight: 18000,
//   "direct sun": 50000,
// };

const ambientLight = new THREE.AmbientLight(light.lime);
ambientLight.position.set(0, 800, 0);
ambientLight.intensity = 5;

// 전체 광
const dirLight = new THREE.DirectionalLight(light.yellow1);
dirLight.position.set(0, 800, 0);
dirLight.intensity = 5;

const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 1000);

// 반사광
const hemiLight = new THREE.HemisphereLight(light.mulberry, light.helio, 1);
hemiLight.position.set(0, 50, 0);
hemiLight.scale.set(10, 50, 10);
// hemiLight.intensity = hemiLuminousIrradiances["living room"];
hemiLight.intensity = 10;

const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 1000);

export { ambientLight, dirLight, hemiLight, dirLightHelper, hemiLightHelper };
