import * as THREE from "three";

const params = {
  exposure: 1.05,
  bloomStrength: 1.5,
  bloomThreshold: 0.5,
  bloomRadius: 0,
};

const ballMat = new THREE.MeshPhysicalMaterial({
  color: 0x6aa68b,
  metalness: 0.9,
  roughness: 0.1,
  clearcoat: 1,
  emissive: 0xffffff,
  emissiveIntensity: 0.1,
});

const darkMat = new THREE.MeshBasicMaterial({ color: "black" });

const glowBallMat = null;

export { ballMat, glowBallMat };
