import * as THREE from "three";

// 빛 색
const light = {
  ambient: 0x404040,
  directional: 0xffffff, // 0xd5deff
  bulb: 0xec9006,
  heimBack: 0xff1bee7,
  heimPoint: 0xffab47bc,
};

const ambientLight = new THREE.AmbientLight(light.ambient);

// 전체 광
const dirLight = new THREE.DirectionalLight(light.directional);
dirLight.position.set(0, 200, 0);
dirLight.castShadow = true;

const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 3);

// 전구
const bulbGeometry = new THREE.SphereGeometry(0.02, 16, 8);
const bulbLight = new THREE.PointLight(light.bulb, 1, 100, 2);
const bulbMat = new THREE.MeshStandardMaterial({
  emissive: 0xffffee,
  emissiveIntensity: 1,
  color: 0x000000,
});
bulbLight.add(new THREE.Mesh(bulbGeometry, bulbMat));
bulbLight.position.set(0, 2, 0);
bulbLight.castShadow = true;

// 반사광
const hemiLight = new THREE.HemisphereLight(light.heimBack, light.heimPoint, 1);
const heimLightHelper = new THREE.HemisphereLightHelper(hemiLight, 5);

export {
  ambientLight,
  dirLight,
  bulbLight,
  hemiLight,
  dirLightHelper,
  heimLightHelper,
};
