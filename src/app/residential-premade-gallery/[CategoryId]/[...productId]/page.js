'use client'

import DefaultLayout from '@/layout/default-layout'
import { Breadcrumbs, Grid } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import UITypography from '@/components/UITypography/UITypography'
import { pathLocations } from '@/utlils/pathLocations'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { accesoriesArr } from '@/utlils/data'
import { ImageBASEURL, apiGet } from '@/auth/ApiRequest'
import { ApiEndpoints } from '@/auth/apiEndpoints'

const FurnitureId = () => {
  const pathname = usePathname()
  const router = useRouter()

  const [productsData, setProductsData] = useState({
    productName: '',
    image: '',
  })

  const getProduct = () => {
    const x = pathname.split('/')

    if (x.length > 0)
      apiGet(
        `${ApiEndpoints.getSinglePremadeProduct}${x[3]}`,
        (res) => {
          setProductsData({
            productName: res.title,
            image: res.image,
          })
        },
        (err) => {
        },
      )
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <DefaultLayout>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        my={3}
        gap={4}
      >
        <Grid item xs={11} mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href={pathLocations?.premadeGallery}
              style={{ color: '#3C828E' }}
            >
              Premade Gallery
            </Link>
            <UITypography
              // onClick={() =>
              //   router.push(`${pathLocations?.furnitureGallery}/${title}`)
              // }
              title={productsData.productName}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            />
          </Breadcrumbs>
        </Grid>
        <Grid item xs={11} md={4}>
          <img
            src={`${ImageBASEURL}${productsData?.image}`}
            alt="furniture-img"
            height={500}
            width={500}
            style={{ width: '100%', objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={11} md={5}>
          <UITypography
            title={`ACCESSORIES - ${productsData?.productName}`}
            // textAlign="center"
            sx={{ color: (theme) => theme.palette.primary.main }}
          />
        </Grid>
      </Grid>
    </DefaultLayout>
  )
}

export default FurnitureId
