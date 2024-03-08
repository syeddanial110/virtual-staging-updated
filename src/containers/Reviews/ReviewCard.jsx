import { Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import reviewImg from "../../assets/images/reviews/Ann Holtz.png";
import Image from "next/image";
import UITypography from "@/components/UITypography/UITypography";
import UIRating from "@/components/UIRating/UIRating";

const ReviewCard = ({ img, name, rating, date, description }) => {
  const [shortDescription, setShortDescription] = useState(description);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (description.length > 215) {
      setShortDescription(`${description.slice(0, 215)}....`);
    } else {
      setShortDescription(description);
    }
  }, []);

  return (
    <Paper
      elevation={3}
      sx={{ padding: "20px", borderRadius: "16px", minHeight: "250px" }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Image alt="reviewImg" src={img} />
        </Grid>
        <Grid item xs={6}>
          <UITypography type="subheading" title={name} />
          <UIRating value={rating} readOnly />
          <UITypography title={date} />
        </Grid>
        <Grid item xs={12}>
          <UITypography title={shortDescription} sx={{ display: "inline" }} />
          {description.length > 215 && toggle == false && (
            <UITypography
              title={" see more"}
              sx={{
                display: "inline",
                color: "blue",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                setToggle(true);
                setShortDescription(description);
              }}
            />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReviewCard;
