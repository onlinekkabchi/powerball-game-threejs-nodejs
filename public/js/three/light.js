import * as THREE from "three";

// 빛 색
const light = {
  directional: 0xffffff, // 0xd5deff
  bulb: 0xec9006,
  heimBack: 0xffffee,
  heimPoint: 0x0f0e0d,
};

// 전체 광
const dirLight = new THREE.DirectionalLight(light.directional);
dirLight.position.set(400, 250, 500);

// 전구
const bulbGeometry = new THREE.SphereGeometry(0.02, 16, 8);
const bulbLight = new THREE.PointLight(light.bulb, 1, 100, 2);
const bulbMat = new THREE.MeshStandardMaterial({
  emissive: 0xffffee,
  emissiveIntensity: 0.8,
  color: 0x000000,
});
bulbLight.add(new THREE.Mesh(bulbGeometry, bulbMat));
bulbLight.position.set(0, 2, 0);
bulbLight.castShadow = true;

// 반사광
const hemiLight = new THREE.HemisphereLight(
  light.heimBack,
  light.heimPoint,
  0.02
);

export { dirLight, bulbLight, hemiLight };
