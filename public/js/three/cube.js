import * as THREE from "three";

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const material2 = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const material3 = new THREE.MeshBasicMaterial({ color: 0xffff00 });

const cube1 = new THREE.Mesh(geometry, material1);
const cube2 = new THREE.Mesh(geometry, material2);
const stageFlag = new THREE.Mesh(geometry, material3);

cube1.position.set(0, 3, 0);
cube2.position.set(0, 6, 0);
stageFlag.position.set(0, 12, 0);

export { cube1, cube2, stageFlag };
