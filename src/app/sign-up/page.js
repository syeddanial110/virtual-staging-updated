'use client'

import UITypography from '@/components/UITypography/UITypography'
import { FormWrapper, LoginWrapper } from '@/containers/Login/ui'
import { Grid, InputAdornment } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import UITextField from '@/components/UITextField/UITextField'
import UIButton from '@/components/UIButton/UIButton'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { pathLocations } from '@/utlils/pathLocations'
import PersonIcon from '@mui/icons-material/Person'
import { signupSchema } from '@/schema/schema'
import { ApiEndpoints } from '@/auth/apiEndpoints'
import { apiPost } from '@/auth/ApiRequest'
import { toast } from 'react-toastify'

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  })

  const router = useRouter()

  const handleLogin = async (data) => {
    const dataObj = {
      name: data.name,
      email: data.email,
      password: data.password,
    }
    apiPost(
      `${ApiEndpoints.register}`,
      dataObj,
      (res) => {
        toast.success(res.message)
        router.push(pathLocations.login)
      },
      (err) => {
        toast.error('Email already exist')
      },
    )
  }
  return (
    <LoginWrapper>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={5.5}>
          <form onSubmit={handleSubmit(handleLogin)}>
            <FormWrapper>
              <Grid container gap={4} justifyContent="center">
                <Grid item xs={12}>
                  <UITypography
                    type="heading"
                    title="Sign Up"
                    textAlign="center"
                    sx={{ color: 'white' }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <UITypography
                    title="Enter Name:"
                    sx={{ color: (theme) => theme.palette.primary.greyShade7 }}
                  />
                  <UITextField
                    variant="outlined"
                    placeholder="Type your name"
                    control={control}
                    name="name"
                    fullWidth
                    errorMessage={errors?.name?.message}
                    autoFocus={false}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <UITypography
                    title="Enter email:"
                    sx={{ color: (theme) => theme.palette.primary.greyShade7 }}
                  />
                  <UITextField
                    variant="outlined"
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
                <Grid item xs={6}>
                  <UITypography
                    title="Enter Password:"
                    sx={{ color: (theme) => theme.palette.primary.greyShade7 }}
                  />
                  <UITextField
                    variant="outlined"
                    type="password"
                    placeholder="******"
                    control={control}
                    name="password"
                    fullWidth
                    errorMessage={errors?.password?.message}
                  />
                </Grid>
                <Grid item xs={6}>
                  <UITypography
                    title="Confirm Password:"
                    sx={{ color: (theme) => theme.palette.primary.greyShade7 }}
                  />
                  <UITextField
                    variant="outlined"
                    type="password"
                    placeholder="******"
                    control={control}
                    name="confirmPassword"
                    fullWidth
                    errorMessage={errors?.confirmPassword?.message}
                  />
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="center">
                  <UIButton
                    btnType="simple"
                    variant="contained"
                    label="Sign up"
                    type="submit"
                  />
                </Grid>
              </Grid>
            </FormWrapper>
          </form>
        </Grid>
      </Grid>
    </LoginWrapper>
  )
}

export default Signup
