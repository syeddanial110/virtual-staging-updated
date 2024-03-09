import { apiGet } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
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
  const [basicItemVal, setBasicItemVal] = useState([]);
  const [additionalServicesVal, setAdditionalServicesVal] = useState([
    // { title: "", price: "" },
  ]);
  const [otherBasicItemsValue, setOtherBasicItemsValue] = useState("");
  const [basicItems, setBasicItems] = useState([]);
  const [uploadImageDetails, setUploadImageDetails] = useState([]);

  const [curatedCollection, setCuratedCollection] = useState([]);
  const [isCuratedCollection, setIsCuratedCollection] = useState(true);
  const [curatedCollectionVal, setCuratedCollectionVal] = useState("");

  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);

  let additionalItems = [
    {
      title: "Object Removal ",
      price: "8",
    },
    {
      title: "Occupied to Vacant",
      price: "15",
    },
  ];
  // "Clutter removal - $8.00 extra",

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

  const disptach = useDispatch();

  // additional services function
  const handleAdditionalServices = (e, i, ind, price) => {
    const isChecked = e.target.checked;
    const title = e.target.value;

    if (isChecked) {
      setAdditionalServicesVal((prevServices) => [
        ...prevServices,
        { title: e.target.value, price: price },
      ]);
      setUploadImageDetails((prevDetails) => {
        const newState = [...prevDetails];
        newState[i] = {
          ...newState[i],
          additionalServices: [
            ...(newState[i].additionalServices || []),
            { title: e.target.value, price: price },
          ],
        };
        return newState;
      });
    } else {
      setAdditionalServicesVal((prevServices) => [
        ...prevServices,
        { title: e.target.value, price: price },
      ]);
      const x = orderPlaceReducer?.uploadImageDetails[i]?.additionalServices;
      let newX = x?.filter((item, index) => item.title !== e.target.value);
      setUploadImageDetails((prevDetails) => {
        const newState = [...prevDetails];
        newState[i] = {
          ...newState[i],
          additionalServices: newX,
        };
        return newState;
      });
    }

    // setAdditionalServicesVal((prevServices) => [
    //   ...prevServices,
    //   { title: e.target.value, price: "$40" },
    // ]);
    // setUploadImageDetails((prevDetails) => {
    //   const newState = [...prevDetails];
    //   newState[i] = {
    //     ...newState[i],
    //     additionalServices: [
    //       ...(newState[i].additionalServices || []),
    //       { title: e.target.value, price: "$40" },
    //     ],
    //   };
    //   return newState;
    // });
  };
  // additional services function end

  // curated collection api get
  const getCuratedCollection = () => {
    apiGet(
      `${ApiEndpoints.curatedCollection}`,
      (res) => {
        console.log("res", res);
        setCuratedCollection(res);
      },
      (err) => {
        console.log("err", err);
      }
    );
  };

  useEffect(() => {
    getCuratedCollection();
  }, []);

  // curated collection api get end

  // this set the value from reducer in useState
  useEffect(() => {
    setUploadImageDetails(orderPlaceReducer.uploadImageDetails);
  }, [orderPlaceReducer.uploadImageDetails.length]);
  useEffect(() => {
    setUploadImageDetails(orderPlaceReducer.uploadImageDetails);
  }, []);

  //#region handle basic items

  const handleChange = (e, i, elm) => {
    setBasicItemVal([...basicItemVal, e.target.value]);

    // const filteredId =

    // setUploadImageDetails((prevState) => {
    //   const newState = [...prevState];
    //   newState[i] = {
    //     ...newState[i],
    //     basicItems: [...newState[i].basicItems, elm.id],
    //   };
    //   return newState;
    // });

    const isChecked = e.target.checked;
    const value = e.target.value;

    if (isChecked) {
      setUploadImageDetails((prevDetails) => {
        const newState = [...prevDetails];
        newState[i] = {
          ...newState[i],
          basicItems: [...newState[i].basicItems, elm.id],
        };
        return newState;
      });
    } else {
      const x = orderPlaceReducer?.uploadImageDetails[i]?.basicItems;
      let newX = x?.filter((item, index) => item !== elm.id);
      setUploadImageDetails((prevDetails) => {
        const newState = [...prevDetails];
        newState[i] = {
          ...newState[i],
          basicItems: newX,
        };
        return newState;
      });
    }
  };

  useEffect(() => {
    if (
      basicItemVal.length > 0 ||
      otherBasicItemsValue.length > 0 ||
      additionalServicesVal.length > 0 ||
      curatedCollectionVal.length > 0
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
    curatedCollectionVal.length,
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
    let filteredRoomArea = curatedCollection.filter(
      (elm) => elm.title == e.target.value
    );

    setCuratedCollectionVal(e.target.value);

    setUploadImageDetails((prevState) => {
      const newState = [...prevState];
      newState[i] = {
        ...newState[i],
        roomArea: e.target.value,
        curatedId: filteredRoomArea[0].id,
      };
      return newState;
    });

    setBasicItems(filteredRoomArea[0].choices);
  };

  useEffect(() => {
    if (curatedCollection.length > 0)
      setBasicItems(curatedCollection[0].choices);
  }, [curatedCollection.length]);

  useEffect(() => {
    if (
      orderPlaceReducer?.serviceName == "Virtual Twilights" ||
      orderPlaceReducer?.serviceName == "Commercial Virtual Staging" ||
      orderPlaceReducer?.serviceName == "Commercial Virtual Renovation"
    ) {
      setIsCuratedCollection(false);
    } else {
      setIsCuratedCollection(true);
    }
  }, [orderPlaceReducer?.serviceName]);

  // end room area select

  console.log("uploadImageDetails", uploadImageDetails);

  return (
    <Grid container gap={3} mt={5}>
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
                  py: 2,
                }}
              >
                {isCuratedCollection ? (
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
                      {curatedCollection.map((elm) => {
                        return (
                          <MenuItem value={elm.title}>{elm.title}</MenuItem>
                        );
                      })}
                    </UISelect>
                    <UITypography title="Would you like any of these items in your room?" />
                    <UITypography
                      title="(Basic items will be added)"
                      sx={{
                        color: (theme) => theme.palette.primary.greyShade5,
                      }}
                    />
                    <Grid container>
                      {basicItems.map((elm) => {
                        return (
                          <Grid item xs={6}>
                            <UICheckbox
                              onChange={(e) => handleChange(e, i, elm)}
                              value={elm.title}
                              label={elm.title}
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Stack>
                ) : (
                  <></>
                )}
                <UITypography
                  title="Not mentioned? Type them in here"
                  sx={{ pt: 2 }}
                />
                <UISimpleTextField
                  placeholder="Stydy, Chair, desswer etc"
                  multiline
                  rows={4}
                  fullWidth
                  // value={item.uploadImageDetails[i].otherBasicItems}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Grid>
              {orderPlaceReducer?.serviceName !== "Virtual Twilights" ? (
                <Grid item xs={3.5}>
                  <Stack gap={1} py={2}>
                    <UITypography
                      title="Additional services"
                      sx={{ fontSize: "18px !important" }}
                    />
                    {additionalItems.map((elm, ind) => {
                      return (
                        <UICheckbox
                          value={elm.title}
                          // checked={}
                          label={`${elm.title} - $${elm.price} extra`}
                          onChange={(e) =>
                            handleAdditionalServices(e, i, ind, elm.price)
                          }
                        />
                      );
                    })}
                  </Stack>
                </Grid>
              ) : (
                <Box pt={4}>
                  <UITypography title="No Additional Services" />
                </Box>
              )}
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Step4;
