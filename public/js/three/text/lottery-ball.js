import * as THREE from "three";

const ballMat = new THREE.MeshPhysicalMaterial({
  color: 0x6aa68b,
  metalness: 0.9,
  roughness: 0,
  clearcoat: 1,
  // emissive: 0xffffff,
  // emissiveIntensity: 1,
});

export { ballMat };
