import React, { useRef } from "react";
import {
  FileAvatar,
  Input,
  UIBoxInput,
  UIFileImg,
  UIFileMainBox,
  UILoadingBox,
  UIStyledInputButton,
} from "./ui";
import { Box, CircularProgress, Stack } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import UITypography from "../UITypography/UITypography";
import PersonIcon from "@mui/icons-material/Person";

const UIProfileFile = ({ data, _handleChangeImage, isImageUploading }) => {
  const fileInputRef = useRef(null);

  const _handleInputClick = (e) => {
    fileInputRef.current.click();
  };
  return (
    <>
      <UIStyledInputButton data={data} disableRipple>
        <Stack direction="column" alignItems="center" spacing={0}>
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
            <UIFileMainBox>
              {data ? (
                <UIFileImg src={data} alt="img" width={200} height={200} />
              ) : (
                <FileAvatar>
                  <PersonIcon fontSize="large" />
                </FileAvatar>
              )}
              <UIBoxInput onClick={_handleInputClick}>
                <CameraAltIcon
                  sx={{
                    backgroundColor: "#e7e7e7",
                    borderRadius: "16px",
                    padding: "4px",
                  }}
                />
              </UIBoxInput>
            </UIFileMainBox>
          )}
        </Stack>
      </UIStyledInputButton>
    </>
  );
};

export default UIProfileFile;
