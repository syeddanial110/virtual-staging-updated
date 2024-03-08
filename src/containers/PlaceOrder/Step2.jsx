import UIDivider from "@/components/UIDivider";
import UITypography from "@/components/UITypography/UITypography";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import StyleCard from "./StyleCard";
import img1 from "../../assets/images/services/staging/virtual staging 1 after.jpg";
import img2 from "../../assets/images/services/staging/virtual staging 2 after.jpg";
import img3 from "../../assets/images/services/staging/virtual staging 3 after.jpg";
import img4 from "../../assets/images/services/staging/virtual staging 4 after.jpg";
import img5 from "../../assets/images/services/staging/virtual staging 5 after.jpg";
import { useDispatch } from "react-redux";
import { addOrderData } from "@/store/orderPlaceSlice";

const Step2 = () => {
  const disptach = useDispatch();
  const arr = [
    {
      id: 1,
      image: img1,
      title: "Contemporary",
    },
    {
      id: 2,
      image: img2,
      title: "Contemporary",
    },
    {
      id: 3,
      image: img3,
      title: "Contemporary",
    },
    {
      id: 4,
      image: img4,
      title: "Contemporary",
    },
    {
      id: 5,
      image: img5,
      title: "Contemporary",
    },
  ];
  const [isSelected, setIsSelected] = useState("");
  return (
    <>
      <Grid container gap={4}>
        <Grid item xs={12}>
          <UITypography
            type="heading"
            title="Pick a furnishing style for your property*"
          />
        </Grid>
        {arr.map((item) => {
          return (
            <Grid item xs={3}>
              <StyleCard
                id={item.id}
                title={item.title}
                img={item.image}
                onClick={() => {
                  setIsSelected(item.id);
                  disptach(
                    addOrderData({
                      styleId: item.id,
                      styleName: item.title,
                      styleImage: item.image,
                    })
                  );
                }}
                isSelected={isSelected}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Step2;
