import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

const glossyMat = new THREE.MeshStandardMaterial({
  color: 0x171717,
  metalness: 0.9,
  roughness: 0.2,
  name: "gray1",
});

function stage(scene) {
  // 무대 원본
  loader.load(
    "./static/model/stage.glb",
    function (gltf) {
      const model = gltf.scene;

      // console.log("stage-origin");
      // console.log(gltf);
      // console.log(model);

      model.children.forEach((el) => {
        el.material = glossyMat;
      });

      model.position.set(1, 0, 0);
      model.scale.set(1, 1, 1);
      scene.add(model);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (err) {
      console.error(err);
    }
  );
}

function stageBaked(scene) {
  // 무대 베이킹본
  loader.load(
    "./static/model/stage-baked-3.glb",
    function (gltf) {
      const model = gltf.scene;
      model.position.set(1, 0, 0);
      model.scale.set(1, 1, 1);
      scene.add(model);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (err) {
      console.error(err);
    }
  );
}

export { stage, stageBaked };
