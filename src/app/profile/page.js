"use client";

import UIProfileFile from "@/components/UIButton/UIProfileFile";
import UIDivider from "@/components/UIDivider";
import UITextField from "@/components/UITextField/UITextField";
import UITypography from "@/components/UITypography/UITypography";
import DefaultLayout from "@/layout/default-layout";
import { Box, Grid, InputAdornment } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import ProfileForm from "@/containers/Profile/ProfileForm";
import { getToken, getUserId } from "@/auth/Auth";
import { apiGet } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import { useDispatch, useSelector } from "react-redux";
import { addProfileData } from "@/store/profileDataSlice";
import UILoader from "@/components/UILoader/UILoader";
import { useRouter } from "next/navigation";
import { handleCheckToken } from "@/utlils/middlewear";

const Profile = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const profileDataReducer = useSelector((state) => state?.profileDataReducer);

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

  const userId = getUserId();

  const getUserProfile = () => {
    apiGet(
      `${ApiEndpoints.userById}${userId}`,
      (res) => {
        const dataObj = {
          name: res?.user?.name,
          email: res?.user?.email,
          phoneNumber: res?.user?.phone,
        };
        dispatch(addProfileData(dataObj));
      },
      (err) => {
        console.log("err", err);
      }
    );
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  useLayoutEffect(() => {
    handleCheckToken();
  }, []);

  return (
    <DefaultLayout>
      <Grid container justifyContent="center" gap={3}>
        <Grid item xs={10}>
          <UITypography
            type="heading"
            title="Edit Profile"
            textAlign="center"
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            border: `1px solid #b5b5b5`,
            borderRadius: "15px",
            padding: "10px",
            minHeight: "40vh",
          }}
        >
          {profileDataReducer.email != "" ? (
            <ProfileForm />
          ) : (
            <>
              <UILoader />
            </>
          )}
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Profile;
