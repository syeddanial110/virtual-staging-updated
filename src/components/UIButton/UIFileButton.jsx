import React, { useRef } from "react";
import { Input, UIBoxInput, UILoadingBox, UIStyledInputButton } from "./ui";
import { Box, CircularProgress, Stack } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import UITypography from "../UITypography/UITypography";

const UIFileButton = ({
  data,
  _handleChangeImage,
  isImageUploading,
  isFileUpload,
}) => {
  const fileInputRef = useRef(null);

  const _handleInputClick = (e) => {
    fileInputRef.current.click();
  };
  return (
    <>
      <UIStyledInputButton data={data} disableRipple>
        <Stack direction="column" spacing={0}>
          <Input
            accept="image/*"
            ref={fileInputRef}
            type="file"
            onChange={_handleChangeImage}
          />
          {isImageUploading ? (
            <UILoadingBox>
              <CircularProgress sx={{ height: 100, width: 100 }} />
            </UILoadingBox>
          ) : (
            <Box onClick={_handleInputClick}>
              {!data?.imagePath && !isFileUpload && (
                <Box
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    padding: "10px 20px",
                    borderRadius: "16px",
                    transition: "all 0.5s ease",
                    "&:hover": {
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                    },
                  }}
                >
                  <CameraAltIcon sx={{ color: "white" }} />
                  <UITypography title="Upload Image" isWhite={true} />
                </Box>
              )}
            </Box>
          )}
        </Stack>
      </UIStyledInputButton>
    </>
  );
};

export default UIFileButton;
