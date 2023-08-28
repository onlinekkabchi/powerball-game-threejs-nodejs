import { ImageLoader } from "three";

const loader = new ImageLoader();

function stageImg(scene) {
  loader.load(
    // resource URL
    "textures/skyboxsun25degtest.png",

    // onLoad callback
    function (image) {
      // use the image, e.g. draw part of it on a canvas
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.drawImage(image, 100, 100);
    },

    // onProgress callback currently not supported
    undefined,

    // onError callback
    function () {
      console.error("An error happened.");
    }
  );
}
