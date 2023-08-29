import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { hdrLoader } from "../camera/hdr.js";

const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();

// 유리 질감 샘플
const glass1 = new THREE.MeshPhongMaterial({
  color: 0xccddff,
  //   envMap: textureCube,
  refractionRatio: 0.98,
  //   reflectivity: 0.9,
});

const normalMap = textureLoader.load(
  "../../../static/texture/Studio_Lighting_05.jpeg"
);
normalMap.wrapS = THREE.RepeatWrapping;
normalMap.wrapT = THREE.RepeatWrapping;
normalMap.repeat.x = 10;
normalMap.repeat.y = 10;

const params = {
  color: 0xffffff,
  transmission: 1,
  opacity: 1,
  metalness: 0,
  roughness: 0,
  clearcoat: 1,
  clearcoatRoughness: 1,
  ior: 1.5,
  thickness: 0.01,
  specularIntensity: 1,
  specularColor: 0xffffff,
  envMapIntensity: 0.1,
  lightIntensity: 1,
  exposure: 1,
  refractionRatio: 0.98,
  reflectivity: 0.9,
};

// const texture = new THREE.CanvasTexture(generateTexture());
// texture.magFilter = THREE.NearestFilter;
// texture.wrapT = THREE.RepeatWrapping;
// texture.wrapS = THREE.RepeatWrapping;
// texture.repeat.set(1, 3.5);

const glasstransparent = new THREE.MeshPhysicalMaterial({
  color: params.color,
  metalness: params.metalness,
  roughness: params.roughness,
  clearcoat: params.clearcoat,
  clearcoatRoughness: params.clearcoatRoughness,
  ior: params.ior,
  // alphaMap: texture,
  envMap: hdrLoader,
  // normalMap: normalMap,
  // normalScale: new THREE.Vector2(0.15, 0.15),
  envMapIntensity: params.envMapIntensity,
  transmission: params.transmission, // use material.transmission for glass materials
  // specularIntensity: params.specularIntensity,
  // specularColor: params.specularColor,
  opacity: params.opacity,
  //   refractionRatio: params.refractionRatio,
  reflectivity: params.reflectivity,
  side: THREE.DoubleSide,
  transparent: true,
});

// function generateTexture() {
//   const canvas = document.createElement("canvas");
//   canvas.width = 2;
//   canvas.height = 2;

//   const context = canvas.getContext("2d");
//   context.fillStyle = "white";
//   context.fillRect(0, 1, 2, 1);

//   return canvas;
// }

export default class Lottery {
  constructor(path, scene) {
    this.path = path;
    this.scene = scene;
    // this.gltfloader =
    this.model = null;
    this.mixer = null;
  }
  async load() {
    const file = await loader.loadAsync(this.path);

    this.model = file.scene;
    console.log(file);
    console.log(this.model);
    console.log(this.model.children[4]);

    // 유리 씌우기
    const dom = this.model.children[4];
    dom.material = glasstransparent;

    this.model.position.set(0, -5, 0);
    this.model.scale.set(20, 20, 20);

    this.scene.add(this.model);
  }
  show() {
    console.log("show lotmachine");
  }
}
