import UITextField from "@/components/UITextField/UITextField";
import UITypography from "@/components/UITypography/UITypography";
import { Grid, InputAdornment } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { profileSchema } from "@/schema/schema";
import UIPhoneTextField from "@/components/UIPhoneTextField/UIPhoneTextField";
import UIButton from "@/components/UIButton/UIButton";

const ProfileForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
    },
  });

  return (
    <Grid container>
      <Grid item xs={5}>
        <form>
          <Grid container gap={2}>
            <Grid item xs={10}>
              <UITypography
                title="Enter email:"
                sx={{
                  color: (theme) => theme.palette.primary.greyShade4,
                  my: 1,
                }}
              />
              <UITextField
                variant="contained"
                placeholder="Type your email"
                control={control}
                name="email"
                fullWidth
                errorMessage={errors?.email?.message}
                autoFocus={false}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={10}>
              <UITypography
                title="Enter Phone number:"
                sx={{
                  color: (theme) => theme.palette.primary.greyShade4,
                  my: 1,
                }}
              />
              <UIPhoneTextField
                variant="outlined"
                placeholder="Type your Number"
                // control={control}
                name="email"
                fullWidth
                // errorMessage={errors?.email?.message}
                // autoFocus={false}
                // InputProps={{
                //   endAdornment: (
                //     <InputAdornment position="end">
                //       <EmailIcon />
                //     </InputAdornment>
                //   ),
                // }}
              />
            </Grid>
            <Grid item xs={10}>
              <UIButton variant="contained" label="Save" />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default ProfileForm;
