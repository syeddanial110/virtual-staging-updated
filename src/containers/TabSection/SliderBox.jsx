import { BeforeAfter } from "@/components/BeforeAndAfter/BeforeAfter";
import UIButton from "@/components/UIButton/UIButton";
import UITypography from "@/components/UITypography/UITypography";
import { Grid } from "@mui/material";
import React from "react";
import BeforeAfterImg from "../BeforeAfterImg/BeforeAfterImg";

const SliderBox = ({ beforeImg, afterImg, title, price, height }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={7} display="flex" justifyContent="center">
        {/* <BeforeAfter
          width={"100%"}
          height={height ? height : 300}
          beforeImage={beforeImg}
          afterImage={afterImg}
          mainDivWidth={"97%"}
          // mainDivBoxShaow='rgb(77 77 77 / 22%) 0px 9px 35px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
        /> */}
        <BeforeAfterImg afterImg={afterImg} beforeImg={beforeImg} />
      </Grid>
    </Grid>
  );
};

export default SliderBox;
