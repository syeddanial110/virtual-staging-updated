import UIFileButton from "@/components/UIButton/UIFileButton";
import UICheckbox from "@/components/UICheckbox/UICheckbox";
import UISelect from "@/components/UISelect/UISelect";
import UISimpleTextField from "@/components/UITextField/UISimpleTextField";
import UITypography from "@/components/UITypography/UITypography";
import { addOrderData } from "@/store/orderPlaceSlice";
import { Box, Grid, MenuItem, Stack } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Step4 = () => {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState([]);
  const [basicItemVal, setBasicItemVal] = useState([]);
  const [additionalServicesVal, setAdditionalServicesVal] = useState([]);
  const [otherBasicItemsValue, setOtherBasicItemsValue] = useState("");
  const [basicItems, setBasicItems] = useState([]);
  const [uploadImageDetails, setUploadImageDetails] = useState([]);

  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);

  let additionalItems = [
    "Basic image editing - $1.50 extra",
    "Clutter removal - $8.00 extra",
    "Occupied to vacant - $15.00 extra",
    "Image modification - $15.00 extra",
  ];

  let roomArea = [
    {
      name: "Living Room",
      basicItems: [
        "Closet",
        "Gym",
        "Hobby/Craft room",
        "Laundry room",
        "Play Area",
      ],
    },
    {
      name: "Family Room",
      basicItems: [
        "Blinds",
        "Curtains",
        "Storage",
        "Study Table",
        "TV (with picture)",
      ],
    },
  ];

  // let basicItems = [
  //   "Closet",
  //   "Gym",
  //   "Hobby/Craft room",
  //   "Laundry room",
  //   "Play Area",
  // ];

  const disptach = useDispatch();

  const handleAdditionalServices = (e, i) => {
    setAdditionalServicesVal([...additionalServicesVal, e.target.value]);

    setUploadImageDetails((prevState) => {
      const newState = [...prevState];
      newState[i] = {
        ...newState[i],
        additionalServices: [...newState[i].additionalServices, e.target.value],
      };
      return newState;
    });
  };

  const _handleChangeImage = (e) => {
    const file = e.target.files[0];

    setFile(file);
  };

  const handleRemoveImage = (ind) => {
    let x = [...fileDataURL];
    x.splice(ind, 1);
    setFileDataURL(x);
    if (x.length == 0) {
      const dataObj = {
        uploadImageDetails: [],
      };
      disptach(addOrderData(dataObj));
    }
  };

  // image file use Effect

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL([...fileDataURL, result]);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  useEffect(() => {
    let y;
    if (fileDataURL.length > 0) {
      y = fileDataURL.map((item, i) => {
        return {
          image: item,
          roomArea: orderPlaceReducer.uploadImageDetails[i]?.roomArea
            ? orderPlaceReducer.uploadImageDetails[i]?.roomArea
            : "",
          basicItems: orderPlaceReducer.uploadImageDetails[i]?.basicItems
            ? orderPlaceReducer.uploadImageDetails[i]?.basicItems
            : [],
          otherBasicItems: orderPlaceReducer.uploadImageDetails[i]
            ?.otherBasicItems
            ? orderPlaceReducer.uploadImageDetails[i]?.otherBasicItems
            : "",
          additionalServices: [],
        };
      });
      const dataObj = {
        uploadImageDetails: y,
      };

      disptach(addOrderData(dataObj));
    }
  }, [fileDataURL.length]);

  // image upload useEffect end

  // this set the value from reducer in useState
  useEffect(() => {
    setUploadImageDetails(orderPlaceReducer.uploadImageDetails);
  }, [orderPlaceReducer.uploadImageDetails.length]);

  //#region handle basic items

  const handleChange = (e, i) => {
    setBasicItemVal([...basicItemVal, e.target.value]);

    setUploadImageDetails((prevState) => {
      const newState = [...prevState];
      newState[i] = {
        ...newState[i],
        basicItems: [...newState[i].basicItems, e.target.value],
      };
      return newState;
    });
  };

  useEffect(() => {
    if (
      basicItemVal.length > 0 ||
      otherBasicItemsValue.length > 0 ||
      additionalServicesVal.length > 0
    ) {
      const dataObj = {
        uploadImageDetails: uploadImageDetails,
      };
      disptach(addOrderData(dataObj));
    }
  }, [
    basicItemVal.length,
    otherBasicItemsValue.length,
    additionalServicesVal.length,
  ]);

  //#endregion handle basic items end

  // start handle other basic items
  const handleInputChange = (e, i) => {
    const { value } = e.target;
 
    setOtherBasicItemsValue(value);

    setUploadImageDetails((prevState) => {
      const newState = [...prevState];
      newState[i] = {
        ...newState[i],
        otherBasicItems: value,
      };
      return newState;
    });
  };

  // end

  // start => room area select
  const handleRoomAreaSelect = (e, i) => {
    let filteredRoomArea = roomArea.filter((elm) => elm.name == e.target.value);

    setUploadImageDetails((prevState) => {
      const newState = [...prevState];
      newState[i] = {
        ...newState[i],
        roomArea: e.target.value,
      };
      return newState;
    });

    setBasicItems(filteredRoomArea[0].basicItems);
  };

  useEffect(() => {
    setBasicItems(roomArea[0].basicItems);
  }, []);

  // end room area select

 

  return (
    <Grid container gap={3}>
      <Grid item xs={12}>
        <UITypography type="heading" title="Add details about your photos*" />
      </Grid>
      <Grid item xs={12}>
        {/* <UIFileButton
          isWithoutBg
          isFileUpload={false}
          data={{ image: "" }}
          _handleChangeImage={_handleChangeImage}
        /> */}
      </Grid>
      <Grid item xs={12}>
        {orderPlaceReducer.uploadImageDetails.map((item, i) => {
          return (
            <Grid
              container
              sx={{
                boxShadow: "0 4px 16px 4px #d1d1d1",
              }}
              gap={3}
              mt={5}
            >
              <Grid
                item
                xs={3.5}
                sx={{
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  minHeight: "400px",
                  backgroundColor: (theme) => theme.palette.primary.greyShade7,
                }}
              ></Grid>
              <Grid
                item
                xs={4}
                sx={{
                  borderRightWidth: "1px",
                  borderRightColor: (theme) => theme.palette.primary.greyShade3,
                  borderRightStyle: "solid",
                  paddingRight: "12px",
                }}
              >
                <Stack gap={2} py={2}>
                  <UITypography
                    title="Room/Area*"
                    sx={{ fontSize: "18px !important" }}
                  />
                  <UISelect
                    onChange={(e) => handleRoomAreaSelect(e, i)}
                    // defaultValue={roomArea[0].name}
                    placeholder="Select One"
                    fullWidth
                  >
                    {roomArea.map((item) => {
                      return <MenuItem value={item.name}>{item.name}</MenuItem>;
                    })}
                  </UISelect>
                  <UITypography title="Would you like any of these items in your room?" />
                  <UITypography
                    title="(Basic items will be added)"
                    sx={{ color: (theme) => theme.palette.primary.greyShade5 }}
                  />
                  <Grid container>
                    {basicItems.map((item) => {
                      return (
                        <Grid item xs={6}>
                          <UICheckbox
                            onChange={(e) => handleChange(e, i)}
                            value={item}
                            label={item}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                  <UITypography title="Not mentioned? Type them in here" />
                  <UISimpleTextField
                    placeholder="Stydy, Chair, desswer etc"
                    multiline
                    rows={4}
                    fullWidth
                    // value={item.uploadImageDetails[i].otherBasicItems}
                    handleChange={(e) => handleInputChange(e, i)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={3.5}>
                <Stack gap={1} py={2}>
                  <UITypography
                    title="Additional services"
                    sx={{ fontSize: "18px !important" }}
                  />
                  {additionalItems.map((item) => {
                    return (
                      <UICheckbox
                        value={item}
                        label={item}
                        onChange={(e) => handleAdditionalServices(e, i)}
                      />
                    );
                  })}
                </Stack>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Step4;
