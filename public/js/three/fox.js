import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

export default function fox(scene) {
  loader.load(
    "./static/model/fox.glb",
    function (gltf) {
      console.log(gltf);
      const model = gltf.scene;
      model.position.set(5, 0, 0);
      model.scale.set(0.03, 0.03, 0.03);
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
