import * as THREE from "three";

const geometry = new THREE.BoxGeometry(1, 1, 1);

// const material1 = new THREE.MeshBasicMaterial({ color: 0xffffff });
const material1 = new THREE.MeshStandardMaterial({
  emissive: 0xffffee,
  emissiveIntensity: 1,
  color: 0x000000,
});
const material2 = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const material3 = new THREE.MeshBasicMaterial({ color: 0xffff00 });

const cube1 = new THREE.Mesh(geometry, material1);
const cube2 = new THREE.Mesh(geometry, material2);
const stageFlag = new THREE.Mesh(geometry, material3);

cube1.position.set(0, 3, 0);
cube1.scale.set(0.8, 0.8, 0.8);
cube2.position.set(0, 7, 0);
cube2.scale.set(0.5, 0.5, 0.5);
stageFlag.position.set(0, 10, 0);
stageFlag.scale.set(0.5, 0.5, 0.5);

export { cube1, cube2, stageFlag };
