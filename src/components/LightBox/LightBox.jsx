import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const LightBox = ({open, setOpen, imgArr}) => {
  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={imgArr}
    />
  );
};

export default LightBox;
