// import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

function stage(scene) {
  // 무대 원본
  loader.load(
    "./static/model/stage.glb",
    function (gltf) {
      const model = gltf.scene;

      // console.log("stage-origin");
      // console.log(gltf);
      // console.log(model);

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

// // 탱크
// loader.load(
//   "./static/model/Tiger_2.glb",
//   function (gltf) {
//     const model = gltf.scene;
//     model.position.set(0, 0, 0);
//     model.scale.set(1, 1, 1);
//     scene.add(model);

//     // const animations = gltf.animations;
//     // let mixer = new THREE.AnimationMixer(model);
//     // mixer.clipAction(animations[0]).play();
//   },
//   undefined,
//   function (err) {
//     console.error(err);
//   }
// );

export { stage, stageBaked };
