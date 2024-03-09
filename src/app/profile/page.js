"use client";

import UIProfileFile from "@/components/UIButton/UIProfileFile";
import UIDivider from "@/components/UIDivider";
import UITextField from "@/components/UITextField/UITextField";
import UITypography from "@/components/UITypography/UITypography";
import DefaultLayout from "@/layout/default-layout";
import { Box, Grid, InputAdornment } from "@mui/material";
import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import ProfileForm from "@/containers/Profile/ProfileForm";

const Profile = () => {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState("");
  const [isImageUploading, setIsImageUploading] = useState(false);

  const _handleChangeImage = (e) => {
    setIsImageUploading(true);
    const file = e.target.files[0];

    setFile(file);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
          setIsImageUploading(false);
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


  return (
    <DefaultLayout>
      <Grid container justifyContent="center" gap={3}>
        <Grid item xs={10} display="flex" alignItems="center">
          <UIProfileFile
            _handleChangeImage={_handleChangeImage}
            data={fileDataURL}
            isImageUploading={isImageUploading}
          />
          <Box ml={2}>
            <UITypography title="Peter parker" />
            <UITypography title="example@gmail.com" />
            <UITypography title="+1 334 555 666" />
          </Box>
        </Grid>
        <Grid item xs={10}>
          <UIDivider />
        </Grid>
        <Grid item xs={10}>
          <ProfileForm />
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Profile;
