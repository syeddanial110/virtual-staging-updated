import UIFileButton from "@/components/UIButton/UIFileButton";
import UITypography from "@/components/UITypography/UITypography";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { addOrderData } from "@/store/orderPlaceSlice";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import { fileUpload } from "@/auth/ApiRequest";
import { toast } from "react-toastify";
import { addStepperValue, backStepperValue } from "@/store/stepperValueSlice";
import UILoader from "@/components/UILoader/UILoader";

const Step3 = () => {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState([]);
  const [isImageUploading, setIsImageUploading] = useState(false);

  const disptach = useDispatch();
  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);

  // const _handleChangeImage = (e) => {
  //   const file = e.target.files[0];

  //   setFile(file);
  // };

  const _handleChangeImage = (e) => {
    setIsImageUploading(true);
    if (e.target.files[0]) {
      fileUpload(`${ApiEndpoints.uploadImage}`, e.target.files[0])
        .then((res) => {
          setIsImageUploading(false);
          setFileDataURL([...fileDataURL, res.url]);
          toast.success(res.message);
          // disptach(addStepperValue(1));
        })
        .catch((err) => {});
    }
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
      // disptach(backStepperValue(1));
    }
  };

  // useEffect(() => {
  //   let fileReader,
  //     isCancel = false;
  //   if (file) {
  //     fileReader = new FileReader();
  //     fileReader.onload = (e) => {
  //       const { result } = e.target;
  //       if (result && !isCancel) {
  //         setFileDataURL([...fileDataURL, result]);
  //       }
  //     };
  //     fileReader.readAsDataURL(file);
  //   }
  //   return () => {
  //     isCancel = true;
  //     if (fileReader && fileReader.readyState === 1) {
  //       fileReader.abort();
  //     }
  //   };
  // }, [file]);

  useEffect(() => {
    if (orderPlaceReducer.uploadImageDetails.length > 0) {
      const x = orderPlaceReducer.uploadImageDetails.map((item) => {
        return item.image;
      });
      setFileDataURL(x);
    }
  }, [orderPlaceReducer.uploadImageDetails]);

  useEffect(() => {
    let y;
    if (fileDataURL.length > 0) {
      y = fileDataURL.map((item, i) => {
        return {
          image: item,
          roomArea: orderPlaceReducer.uploadImageDetails[i]?.roomArea
            ? orderPlaceReducer.uploadImageDetails[i]?.roomArea
            : "",
          curatedId: orderPlaceReducer.uploadImageDetails[i]?.curatedId
            ? orderPlaceReducer.uploadImageDetails[i]?.curatedId
            : "",
          basicItems: orderPlaceReducer.uploadImageDetails[i]?.basicItems
            ? orderPlaceReducer.uploadImageDetails[i]?.basicItems
            : [],
          otherBasicItems: orderPlaceReducer.uploadImageDetails[i]
            ?.otherBasicItems
            ? orderPlaceReducer.uploadImageDetails[i]?.otherBasicItems
            : "",
          additionalServices: orderPlaceReducer.uploadImageDetails[i]
            ?.additionalServices
            ? orderPlaceReducer.uploadImageDetails[i]?.additionalServices
            : [],
        };
      });
      const dataObj = {
        uploadImageDetails: y,
      };

      disptach(addOrderData(dataObj));
    }
  }, [fileDataURL.length]);

  return (
    <>
      <Grid container gap={2} mt={5}>
        <Grid item xs={12}>
          <UITypography
            type="heading"
            title="Upload some photos of your property*"
            textAlign={{ xs: "center", md: "start" }}
          />
          <UITypography
            title="(allowed file types: .jpg, .jpeg, .png ) and max size 10 mb"
            textAlign={{ xs: "center", md: "start" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <UIFileButton
            isWithoutBg
            isFileUpload={false}
            data={{ image: "" }}
            _handleChangeImage={_handleChangeImage}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container mt={3} gap={3} justifyContent={{ xs: "center", md: "flex-start" }}>
            {orderPlaceReducer.uploadImageDetails.length > 0 &&
              orderPlaceReducer.uploadImageDetails.map((item, i) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={5.5}
                    md={3.5}
                    sx={{
                      position: "relative",
                      backgroundImage: `url('${item.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "350px",
                      borderRadius: "20px",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                      filter: "brightness(0.9)",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 5,
                        right: 20,
                        " &:hover": {
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => handleRemoveImage(i)}
                    >
                      <CloseIcon
                        sx={{
                          color: (theme) => theme.palette.primary.white,
                          backgroundColor: (theme) =>
                            theme.palette.secondary.error,
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                  </Grid>
                );
              })}
            {isImageUploading && (
              <Grid item xs={3.5}>
                <UILoader />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Step3;
