import UIButton from "@/components/UIButton/UIButton";
import UITypography from "@/components/UITypography/UITypography";
import { BannerWrapper } from "@/containers/AboutUs/ui";
import DefaultLayout from "@/layout/default-layout";
import { Grid } from "@mui/material";
import React from "react";
import commercialStagingImg from "../../../assets/images/commercialRenovationBanner.jpg";

const CommercialVirtualRenovation = () => {
  return (
    <DefaultLayout>
      <Grid container justifyContent="center" gap={3} my={3}>
        <Grid item xs={11}>
          <BannerWrapper bgImg={commercialStagingImg} isGradient={true}>
            <UITypography
              type="mainHeading"
              title="Commercial Virtual Renovation"
              sx={{
                color: "white",
                fontSize: { xs: "40px", md: "60px !important" },
                fontWeight: "regular",
                mb: "13px",
                ml: { xs: "30px", md: "60px" },
              }}
            />
          </BannerWrapper>
        </Grid>
        <Grid item xs={11}>
          <UITypography
            type="description"
            title={`Transform your commercial space into a digital masterpiece with our unparalleled virtual renovation services. At just $99 per image, give your property a complete facelift in the virtual world. Our expert team of digital artists will utilize cutting-edge technology to seamlessly enhance and redefine your space, ensuring a stunning visual representation that rivals reality.`}
          />
        </Grid>
        <Grid item xs={11}>
          <UITypography
            type="description"
            title={`With our inclusive package, you not only get a commercial virtual renovation but also receive virtual staging, adding an extra layer of sophistication to your property. Showcasing your space with furnished and decorated virtual elements allows potential buyers or clients to envision the full potential of the space. Whether you're looking to market a vacant office, retail store, or any commercial property, our virtual renovation services are tailored to meet your specific needs.`}
          />
        </Grid>
        <Grid item xs={11}>
          <UITypography
            type="description"
            title={`Elevate your commercial space with our affordable and high-quality virtual renovation at just $99 per image. Embrace the power of innovative technology and captivate your audience with a visual experience that will leave a lasting impression. Don't miss out on this opportunity to transform your property digitally – contact us today for a consultation!`}
          />
        </Grid>
        <Grid item xs={11}>
          <UIButton variant="contained" label="Order now" />
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default CommercialVirtualRenovation;
