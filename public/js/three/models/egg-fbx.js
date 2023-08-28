import FBXLoader from "three/addons/loaders/FBXLoader.js";

const loader = new FBXLoader();

export function eggFBX(scene) {
  loader.load(
    "./static/model/egg-1.fbx",
    function (model) {
      scene.add(model);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (err) {
      console.log(err);
    }
  );
}
