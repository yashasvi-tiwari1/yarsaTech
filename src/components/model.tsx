import React from "react";
import { BASEURL } from "@tech/globalConnect/apiContent";

function Model(props: { img: string }) {
  return (
    <model-viewer
      class="md:h-[600px] md:w-[600px] w-[400px] h-[400px] md:mx-auto"
      src={`${BASEURL}/assets/${props.img}`}
      camera-controls
      disable-zoom
      shadow-intensity="1"
      auto-rotate
      camera-orbit
      disable-pan
    />
  );
}

export default Model;
