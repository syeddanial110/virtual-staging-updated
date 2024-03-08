import UITabs from "@/components/UITabs/UITabs";
import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useState } from "react";
import TabSlider from "./TabSlider";
import UITypography from "@/components/UITypography/UITypography";
import UIButton from "@/components/UIButton/UIButton";
import virtualStagingImgAfter1 from "../../assets/images/services/staging/virtual staging 1 after.jpg";
import virtualStagingImgBefore1 from "../../assets/images/services/staging/virtual staging 1 before.jpg";
import virtualStagingImgAfter2 from "../../assets/images/services/staging/virtual staging 2 after.jpg";
import virtualStagingImgBefore2 from "../../assets/images/services/staging/virtual staging 2 before.jpg";
import virtualStagingImgAfter3 from "../../assets/images/services/staging/virtual staging 3 after.jpg";
import virtualStagingImgBefore3 from "../../assets/images/services/staging/virtual staging 3 before.jpg";
import virtualStagingImgAfter4 from "../../assets/images/services/staging/virtual staging 4 after.jpg";
import virtualStagingImgBefore4 from "../../assets/images/services/staging/virtual staging 4 before.jpg";
import virtualStagingImgAfter5 from "../../assets/images/services/staging/virtual staging 5 after.jpg";
import virtualStagingImgBefore5 from "../../assets/images/services/staging/virtual staging 5 before.jpg";
import virtualStagingImgAfter6 from "../../assets/images/services/staging/virtual staging 6 after.jpg";
import virtualStagingImgBefore6 from "../../assets/images/services/staging/virtual staging 6 before.jpg";
import virtualStagingImgAfter7 from "../../assets/images/services/staging/virtual staging 7 after.jpg";
import virtualStagingImgBefore7 from "../../assets/images/services/staging/virtual staging 7 before.jpg";
import virtualStagingImgAfter8 from "../../assets/images/services/staging/virtual staging 8 after.jpg";
import virtualStagingImgBefore8 from "../../assets/images/services/staging/virtual staging 8 before.jpg";
import virtualStagingImgAfter9 from "../../assets/images/services/staging/virtual staging 9 after.jpg";
import virtualStagingImgBefore9 from "../../assets/images/services/staging/virtual staging 9 before.jpg";
import virtualStagingImgAfter10 from "../../assets/images/services/staging/virtual staging 10 after.jpg";
import virtualStagingImgBefore10 from "../../assets/images/services/staging/virtual staging 10 before.jpg";
import virtualStagingImgAfter11 from "../../assets/images/services/staging/virtual staging 11 after.jpg";
import virtualStagingImgBefore11 from "../../assets/images/services/staging/virtual staging 11 before.jpg";
import virtualStagingImgAfter12 from "../../assets/images/services/staging/virtual staging 12 after.jpg";
import virtualStagingImgBefore12 from "../../assets/images/services/staging/virtual staging 12 before.jpg";
import virtualStagingImgAfter13 from "../../assets/images/services/staging/virtual staging 13 after.jpg";
import virtualStagingImgBefore13 from "../../assets/images/services/staging/virtual staging 13 before.jpg";
import virtualStagingImgAfter14 from "../../assets/images/services/staging/virtual staging 14 after.jpg";
import virtualStagingImgBefore14 from "../../assets/images/services/staging/virtual staging 14 before.jpg";
import virtualStagingImgAfter15 from "../../assets/images/services/staging/virtual staging 15 after.jpg";
import virtualStagingImgBefore15 from "../../assets/images/services/staging/virtual staging 15 before.jpg";
import virtualStagingImgAfter16 from "../../assets/images/services/staging/virtual staging 16 after.jpg";
import virtualStagingImgBefore16 from "../../assets/images/services/staging/virtual staging 16 before.jpg";
import virtualStagingImgAfter17 from "../../assets/images/services/staging/virtual staging 17 after.jpg";
import virtualStagingImgBefore17 from "../../assets/images/services/staging/virtual staging 17 before.jpg";
import virtualStagingImgAfter18 from "../../assets/images/services/staging/virtual staging 18 after.jpg";
import virtualStagingImgBefore18 from "../../assets/images/services/staging/virtual staging 18 before.jpg";

import virtalRenovtionAfter1 from "../../assets/images/services/reno/virtual reno 1 after.jpg";
import virtalRenovtionBefore1 from "../../assets/images/services/reno/virtual reno 1 before.jpg";
import virtalRenovtionAfter2 from "../../assets/images/services/reno/virtual reno 2 after.jpg";
import virtalRenovtionBefore2 from "../../assets/images/services/reno/virtual reno 2 before.jpg";
import virtalRenovtionAfter3 from "../../assets/images/services/reno/virtual reno 3 after.jpg";
import virtalRenovtionBefore3 from "../../assets/images/services/reno/virtual reno 3 before.jpg";
import virtalRenovtionAfter4 from "../../assets/images/services/reno/virtual reno 4 after.jpg";
import virtalRenovtionBefore4 from "../../assets/images/services/reno/virtual reno 4 before.jpg";
import virtalRenovtionAfter5 from "../../assets/images/services/reno/virtual reno 5 after.jpg";
import virtalRenovtionBefore5 from "../../assets/images/services/reno/virtual reno 5 before.jpg";
import virtalRenovtionAfter6 from "../../assets/images/services/reno/virtual reno 6 after.jpg";
import virtalRenovtionBefore6 from "../../assets/images/services/reno/virtual reno 6 before.jpg";
import virtalRenovtionAfter7 from "../../assets/images/services/reno/virtual reno 7 after.jpg";
import virtalRenovtionBefore7 from "../../assets/images/services/reno/virtual reno 7 before.jpg";
import virtalRenovtionAfter8 from "../../assets/images/services/reno/virtual reno 8 after.jpg";
import virtalRenovtionBefore8 from "../../assets/images/services/reno/virtual reno 8 before.jpg";
import virtalRenovtionAfter9 from "../../assets/images/services/reno/virtual reno 9 after.jpg";
import virtalRenovtionBefore9 from "../../assets/images/services/reno/virtual reno 9 before.jpg";
import virtalRenovtionAfter10 from "../../assets/images/services/reno/virtual reno 10 after.jpg";
import virtalRenovtionBefore10 from "../../assets/images/services/reno/virtual reno 10 before.jpg";
import virtalRenovtionAfter11 from "../../assets/images/services/reno/virtual reno 11 after.jpg";
import virtalRenovtionBefore11 from "../../assets/images/services/reno/virtual reno 11 before.jpg";
import virtalRenovtionAfter12 from "../../assets/images/services/reno/virtual reno 12 after.jpg";
import virtalRenovtionBefore12 from "../../assets/images/services/reno/virtual reno 12 before.jpg";

import virtualTwilightsAfter1 from "../../assets/images/services/virtualTwilight/vt 1 after.jpg";
import virtualTwilightsBefore1 from "../../assets/images/services/virtualTwilight/vt 1 before.jpg";
import virtualTwilightsAfter2 from "../../assets/images/services/virtualTwilight/vt 2 after.jpg";
import virtualTwilightsBefore2 from "../../assets/images/services/virtualTwilight/vt 2 before.jpg";
import virtualTwilightsAfter3 from "../../assets/images/services/virtualTwilight/vt 3 after.jpg";
import virtualTwilightsBefore3 from "../../assets/images/services/virtualTwilight/vt 3 before.jpg";
import virtualTwilightsAfter4 from "../../assets/images/services/virtualTwilight/vt 4 after.jpg";
import virtualTwilightsBefore4 from "../../assets/images/services/virtualTwilight/vt 4 before.jpg";
import virtualTwilightsAfter5 from "../../assets/images/services/virtualTwilight/vt 5 after.jpg";
import virtualTwilightsBefore5 from "../../assets/images/services/virtualTwilight/vt 5 before.jpg";
import virtualTwilightsAfter6 from "../../assets/images/services/virtualTwilight/vt 6 after.jpg";
import virtualTwilightsBefore6 from "../../assets/images/services/virtualTwilight/vt 6 before.jpg";
import virtualTwilightsAfter7 from "../../assets/images/services/virtualTwilight/vt 7 after.jpg";
import virtualTwilightsBefore7 from "../../assets/images/services/virtualTwilight/vt 7 before.jpg";
import virtualTwilightsAfter8 from "../../assets/images/services/virtualTwilight/vt 8 after.jpg";
import virtualTwilightsBefore8 from "../../assets/images/services/virtualTwilight/vt 8 before.jpg";
import virtualTwilightsAfter9 from "../../assets/images/services/virtualTwilight/vt 9 after.jpg";
import virtualTwilightsBefore9 from "../../assets/images/services/virtualTwilight/vt 9 before.jpg";
import virtualTwilightsAfter10 from "../../assets/images/services/virtualTwilight/vt 10 after.jpg";
import virtualTwilightsBefore10 from "../../assets/images/services/virtualTwilight/vt 10 before.jpg";

import commercialVirtualStagingAfter1 from "../../assets/images/services/commercialStaging/commercial staging 1 after.jpg";
import commercialVirtualStagingBefore1 from "../../assets/images/services/commercialStaging/commercial staging 1 before.jpg";
import commercialVirtualStagingAfter2 from "../../assets/images/services/commercialStaging/commercial staging 2 after.jpg";
import commercialVirtualStagingBefore2 from "../../assets/images/services/commercialStaging/commercial staging 2 before.jpg";
import commercialVirtualStagingAfter3 from "../../assets/images/services/commercialStaging/commercial staging 3 after.jpg";
import commercialVirtualStagingBefore3 from "../../assets/images/services/commercialStaging/commercial staging 3 before.jpg";
import commercialVirtualStagingAfter4 from "../../assets/images/services/commercialStaging/commercial staging 4 after.jpg";
import commercialVirtualStagingBefore4 from "../../assets/images/services/commercialStaging/commercial staging 4 before.jpg";
import commercialVirtualStagingAfter5 from "../../assets/images/services/commercialStaging/commercial staging 5 after.jpg";
import commercialVirtualStagingBefore5 from "../../assets/images/services/commercialStaging/commercial staging 5 before.jpg";
import commercialVirtualStagingAfter6 from "../../assets/images/services/commercialStaging/commercial staging 6 after.jpg";
import commercialVirtualStagingBefore6 from "../../assets/images/services/commercialStaging/commercial staging 6 before.jpg";
import commercialVirtualStagingAfter7 from "../../assets/images/services/commercialStaging/commercial staging 7 after.jpg";
import commercialVirtualStagingBefore7 from "../../assets/images/services/commercialStaging/commercial staging 7 before.jpg";

import commercialRenovationAfter1 from "../../assets/images/services/commercialReno/Commercial Reno 1 after.jpg";
import commercialRenovationBefore1 from "../../assets/images/services/commercialReno/Commercial Reno 1 Before.jpg";
import commercialRenovationAfter2 from "../../assets/images/services/commercialReno/Commercial Reno 2 after.jpg";
import commercialRenovationBefore2 from "../../assets/images/services/commercialReno/Commercial Reno 2 before.jpg";
import commercialRenovationAfter3 from "../../assets/images/services/commercialReno/Commercial Reno 3 After.jpg";
import commercialRenovationBefore3 from "../../assets/images/services/commercialReno/Commercial Reno 3 Before.jpg";
import commercialRenovationAfter4 from "../../assets/images/services/commercialReno/Commercial Reno 4 After.jpg";
import commercialRenovationBefore4 from "../../assets/images/services/commercialReno/Commercial Reno 4 Before.jpg";
import commercialRenovationAfter5 from "../../assets/images/services/commercialReno/commercial reno 5 after.jpg";
import commercialRenovationBefore5 from "../../assets/images/services/commercialReno/Commercial reno 5 before.jpg";

const TabSection = () => {
  const tabArr = [
    {
      label: "Virtual Staging",
      a11yPropsIndex: 0,
      price: "$24",
      imagesArr: [
        {
          afterImg: virtualStagingImgAfter1,
          beforeImg: virtualStagingImgBefore1,
        },
        {
          afterImg: virtualStagingImgAfter2,
          beforeImg: virtualStagingImgBefore2,
        },
        {
          afterImg: virtualStagingImgAfter3,
          beforeImg: virtualStagingImgBefore3,
        },
        {
          afterImg: virtualStagingImgAfter4,
          beforeImg: virtualStagingImgBefore4,
        },
        {
          afterImg: virtualStagingImgAfter5,
          beforeImg: virtualStagingImgBefore5,
        },
        {
          afterImg: virtualStagingImgAfter6,
          beforeImg: virtualStagingImgBefore6,
        },
        {
          afterImg: virtualStagingImgAfter7,
          beforeImg: virtualStagingImgBefore7,
        },
        {
          afterImg: virtualStagingImgAfter8,
          beforeImg: virtualStagingImgBefore8,
        },
        {
          afterImg: virtualStagingImgAfter9,
          beforeImg: virtualStagingImgBefore9,
        },
        {
          afterImg: virtualStagingImgAfter10,
          beforeImg: virtualStagingImgBefore10,
        },
        {
          afterImg: virtualStagingImgAfter11,
          beforeImg: virtualStagingImgBefore11,
        },
        {
          afterImg: virtualStagingImgAfter12,
          beforeImg: virtualStagingImgBefore12,
        },
        {
          afterImg: virtualStagingImgAfter13,
          beforeImg: virtualStagingImgBefore13,
        },
        {
          afterImg: virtualStagingImgAfter14,
          beforeImg: virtualStagingImgBefore14,
        },
        {
          afterImg: virtualStagingImgAfter15,
          beforeImg: virtualStagingImgBefore15,
        },
        {
          afterImg: virtualStagingImgAfter16,
          beforeImg: virtualStagingImgBefore16,
        },
        {
          afterImg: virtualStagingImgAfter17,
          beforeImg: virtualStagingImgBefore17,
        },
        {
          afterImg: virtualStagingImgAfter18,
          beforeImg: virtualStagingImgBefore18,
        },
      ],
    },
    {
      label: "Virtual Renovation",
      a11yPropsIndex: 1,
      price: "$69",
      imagesArr: [
        {
          afterImg: virtalRenovtionAfter1,
          beforeImg: virtalRenovtionBefore1,
        },
        {
          afterImg: virtalRenovtionAfter2,
          beforeImg: virtalRenovtionBefore2,
        },
        {
          afterImg: virtalRenovtionAfter3,
          beforeImg: virtalRenovtionBefore3,
        },
        {
          afterImg: virtalRenovtionAfter4,
          beforeImg: virtalRenovtionBefore4,
        },
        {
          afterImg: virtalRenovtionAfter5,
          beforeImg: virtalRenovtionBefore5,
        },
        {
          afterImg: virtalRenovtionAfter6,
          beforeImg: virtalRenovtionBefore6,
        },
        {
          afterImg: virtalRenovtionAfter7,
          beforeImg: virtalRenovtionBefore7,
        },
        {
          afterImg: virtalRenovtionAfter8,
          beforeImg: virtalRenovtionBefore8,
        },
        {
          afterImg: virtalRenovtionAfter9,
          beforeImg: virtalRenovtionBefore9,
        },
        {
          afterImg: virtalRenovtionAfter10,
          beforeImg: virtalRenovtionBefore10,
        },
        {
          afterImg: virtalRenovtionAfter11,
          beforeImg: virtalRenovtionBefore11,
        },
        {
          afterImg: virtalRenovtionAfter12,
          beforeImg: virtalRenovtionBefore12,
        },
      ],
    },
    {
      label: "Virtual Twilights",
      a11yPropsIndex: 2,
      price: "$15",
      imagesArr: [
        {
          afterImg: virtualTwilightsAfter1,
          beforeImg: virtualTwilightsBefore1,
        },
        {
          afterImg: virtualTwilightsAfter2,
          beforeImg: virtualTwilightsBefore2,
        },
        {
          afterImg: virtualTwilightsAfter3,
          beforeImg: virtualTwilightsBefore3,
        },
        {
          afterImg: virtualTwilightsAfter4,
          beforeImg: virtualTwilightsBefore4,
        },
        {
          afterImg: virtualTwilightsAfter5,
          beforeImg: virtualTwilightsBefore5,
        },
        {
          afterImg: virtualTwilightsAfter6,
          beforeImg: virtualTwilightsBefore6,
        },
        {
          afterImg: virtualTwilightsAfter7,
          beforeImg: virtualTwilightsBefore7,
        },
        {
          afterImg: virtualTwilightsAfter8,
          beforeImg: virtualTwilightsBefore8,
        },
        {
          afterImg: virtualTwilightsAfter9,
          beforeImg: virtualTwilightsBefore9,
        },
        {
          afterImg: virtualTwilightsAfter10,
          beforeImg: virtualTwilightsBefore10,
        },
      ],
    },
    {
      label: "Commercial Virtual Staging",
      a11yPropsIndex: 3,
      price: "$75",
      imagesArr: [
        {
          afterImg: commercialVirtualStagingAfter1,
          beforeImg: commercialVirtualStagingBefore1,
        },
        {
          afterImg: commercialVirtualStagingAfter2,
          beforeImg: commercialVirtualStagingBefore2,
        },
        {
          afterImg: commercialVirtualStagingAfter3,
          beforeImg: commercialVirtualStagingBefore3,
        },
        {
          afterImg: commercialVirtualStagingAfter4,
          beforeImg: commercialVirtualStagingBefore4,
        },
        {
          afterImg: commercialVirtualStagingAfter5,
          beforeImg: commercialVirtualStagingBefore5,
        },
        {
          afterImg: commercialVirtualStagingAfter6,
          beforeImg: commercialVirtualStagingBefore6,
        },
        {
          afterImg: commercialVirtualStagingAfter7,
          beforeImg: commercialVirtualStagingBefore7,
        },
      ],
    },
    {
      label: "Commercial Virtual Renovation",
      a11yPropsIndex: 4,
      price: "$99",
      imagesArr: [
        {
          beforeImg: commercialRenovationBefore1,
          afterImg: commercialRenovationAfter1,
        },
        {
          beforeImg: commercialRenovationBefore2,
          afterImg: commercialRenovationAfter2,
        },
        {
          beforeImg: commercialRenovationBefore3,
          afterImg: commercialRenovationAfter3,
        },
        {
          beforeImg: commercialRenovationBefore4,
          afterImg: commercialRenovationAfter4,
        },
        {
          beforeImg: commercialRenovationBefore5,
          afterImg: commercialRenovationAfter5,
        },
      ],
    },
  ];

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setIsLoading(true);
    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <Grid
        container
        justifyContent="center"
        mt={{ xs: 0, lg: 8 }}
        gap={{ xs: 2, md: 9 }}
      >
        <Grid item xs={9}>
          <UITypography
            type="mainHeading"
            title={`Elevate your spaces with the industry's finest `}
            textAlign="center"
            sx={{
              // color: (theme) => `${theme.palette.primary.white} !important`,
              display: "inline",
            }}
          />
          <UITypography
            type="mainHeading"
            title={`virtual staging `}
            textAlign="center"
            className="virtualStaging"
            sx={{
              // color: (theme) => `${theme.palette.primary.white} !important`,
              display: "inline",
            }}
          />
          <UITypography
            type="mainHeading"
            title={`— let's make your vision a stunning reality.`}
            textAlign="center"
            sx={{
              // color: (theme) => `${theme.palette.primary.white} !important`,
              display: "inline",
              fontWeight: "regular",
            }}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={5}>
        <Grid item xs={11} md={12}>
          <UITabs handleChange={handleChange} value={value} tabArr={tabArr}>
            {tabArr.map((item, i) => {
              return (
                <CustomTabPanel
                  key={i}
                  value={value}
                  index={item.a11yPropsIndex}
                >
                  {isLoading ? (
                    <Box
                      sx={{
                        height: "600px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress />
                    </Box>
                  ) : (
                    <TabSlider item={item} />
                  )}
                  <Grid container justifyContent="center" mt={5}>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={5}
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Box sx={{ width: "50%" }}>
                        <UITypography type="heading" title={`${item.label}`} />
                      </Box>
                      <Box
                        sx={{
                          width: "50%",
                          display: "flex",
                          justifyContent: "flex-end",
                          // alignItems: "flex-end",
                        }}
                      >
                        <Box>
                          <UITypography
                            type="heading"
                            title={`${item.price}/`}
                            sx={{
                              display: "inline",
                              color: (theme) => theme.palette.primary.main,
                            }}
                          />
                          <UITypography
                            title={"Per Image"}
                            sx={{
                              fontSize: "16px",
                              display: "inline",
                              color: (theme) =>
                                `${theme.palette.primary.greyShade1} !important`,
                            }}
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="center">
                    <Grid item xs={12} sm={6} lg={5} mt={2}>
                      <UIButton isDark={false} label="Place order" />
                    </Grid>
                  </Grid>
                </CustomTabPanel>
              );
            })}
          </UITabs>
        </Grid>
      </Grid>
    </>
  );
};

export default TabSection;
