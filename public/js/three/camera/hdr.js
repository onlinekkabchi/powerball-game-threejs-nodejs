import * as THREE from "three";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";

const hdrLoader = new RGBELoader();

// 씬 배경
function hdrEquirect(scene) {
  //   hdrLoader.setDataType(THREE.UnsignedByteType);
  hdrLoader.load(
    "../../../static/texture/MR_INT-005_WhiteNeons_NAD.hdr",
    function (texture) {
      console.log("hdrtexture!!");

      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.background = texture;
    }
  );
}

export { hdrEquirect };
