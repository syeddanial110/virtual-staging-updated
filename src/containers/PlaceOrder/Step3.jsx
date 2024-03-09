import UIFileButton from "@/components/UIButton/UIFileButton";
import UITypography from "@/components/UITypography/UITypography";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { addOrderData } from "@/store/orderPlaceSlice";

const Step3 = () => {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState([]);

  const disptach = useDispatch();
  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);

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

  useEffect(() => {
    if (orderPlaceReducer?.uploadImageDetails.length > 0) {
      let x = orderPlaceReducer.uploadImageDetails.map((item) => {
        return item.image;
      });
      setFileDataURL(x);
    }
  }, []);

  return (
    <>
      <Grid container gap={2} mt={5}>
        <Grid item xs={12}>
          <UITypography
            type="heading"
            title="Upload some photos of your property*"
          />
          <UITypography title="(allowed file types: .jpg, .jpeg, .png )" />
        </Grid>
        <Grid item xs={12}>
          <UIFileButton
            isWithoutBg
            isFileUpload={false}
            data={{ image: "" }}
            _handleChangeImage={_handleChangeImage}
          />
          <Grid container mt={3} gap={3}>
            {orderPlaceReducer.uploadImageDetails.length > 0 &&
              orderPlaceReducer.uploadImageDetails.map((item, i) => {
                return (
                  <Grid
                    item
                    xs={3.5}
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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Step3;
