import * as THREE from "three";

// 그리드 세팅
const gridSize = 80;
const gridDivisions = 80;
const gridColor = "0xffff80";
const gridHelper = new THREE.GridHelper(
  gridSize,
  gridDivisions,
  gridColor,
  gridColor
);
// scene.add(gridHelper);

// 축 세팅
const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

export { gridHelper, axesHelper };
