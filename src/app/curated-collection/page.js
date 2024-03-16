'use client'

import { ImageBASEURL, apiGet } from '@/auth/ApiRequest'
import { ApiEndpoints } from '@/auth/apiEndpoints'
import FurnitureCard from '@/components/FurnitreCard/FurnitureCard'
import UILoader from '@/components/UILoader/UILoader'
import UITypography from '@/components/UITypography/UITypography'
import CuratedCollectionCard from '@/containers/CuratedCollection/CuratedCollectionCard'
import DefaultLayout from '@/layout/default-layout'
import { pathLocations } from '@/utlils/pathLocations'
import { Grid } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CuratedCollection = () => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const [curatedCollectionData, setCuratedCollectionData] = useState([])

  const getCuratedCollection = () => {
    apiGet(
      `${ApiEndpoints.curatedCollection}`,
      (res) => {
        setCuratedCollectionData(res)
        setIsLoading(false)
      },
      (err) => {
        console.log('err', err)
      },
    )
  }

  useEffect(() => {
    getCuratedCollection()
  }, [])

  return (
    <DefaultLayout>
      <Grid container>
        <Grid item xs={12}>
          <UITypography
            type="heading"
            title="Curated Collections"
            textAlign="center"
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" gap={3} my={6}>
        <Grid item xs={10}>
          <UITypography
            type="mainHeading"
            title="Welcome to our curated collection of pre-designed virtually staged rooms!"
          />
        </Grid>
        <Grid item xs={10}>
          <UITypography
            type="description"
            title="Transform your living space with our stunning selection of multi-functional and stylishly designed rooms, ready to inspire and captivate you.
            Browse through our web pages and explore a wide range of meticulously curated interiors, carefully crafted to suit various aesthetics and preferences. Whether you're looking to revamp your living room, bedroom, kitchen, or even a home office, we have the perfect virtual designs to bring your vision to life."
          />
        </Grid>
        <Grid item xs={10}>
          <UITypography
            type="description"
            title="Each room in our collection is meticulously staged, combining the best in interior design with the latest in virtual technology. Visualize your dream space, experiment with different layouts, and get inspired by our creative combinations of furniture, colors, and textures."
          />
        </Grid>
        <Grid item xs={10}>
          <UITypography
            type="description"
            title="With our pre-designed virtually staged rooms, you can explore different styles, experiment with various color schemes, and imagine the possibilities for your own home. Start your journey towards a transformed living space today and let our curated collection ignite your creativity and help you design the home of your dreams."
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={8} gap={5}>
        <Grid item xs={11}>
          {isLoading && (
            <Grid container display="flex" justifyContent="center">
              <Grid item xs={3}>
                <UILoader />
              </Grid>
            </Grid>
          )}

          <Grid container gap={3} justifyContent="center">
            {!isLoading && (
              <>
                {curatedCollectionData.length > 0 ? (
                  curatedCollectionData.map((item, i) => {
                    return (
                      <>
                        <Grid
                          item
                          // xs={11}
                          // sm={5}
                          // md={3.5}
                          // lg={3.5}
                          // xl={3.5}
                          // xxl={3.5}
                          // xxxl={1.5}
                          key={`${item.title}-${i}`}
                          display="flex"
                          // justifyContent="center"
                          flexWrap="wrap"
                        >
                          <CuratedCollectionCard
                            img={`${ImageBASEURL}${item.choices[0].image}`}
                            title={item.title}
                            onClick={() => {
                              router.push(
                                `${pathLocations.curatedCollection}/${item.id}`,
                              )
                            }}
                            imgObjectFit="cover"
                            imgAlt={item.title}
                          />
                        </Grid>
                      </>
                    )
                  })
                ) : (
                  <Grid item xs={12}>
                    <UITypography title="No record found" textAlign="center" />
                  </Grid>
                )}
              </>
            )}
          </Grid>
        </Grid>
        {/* <Grid item xs={8} md={4}>
          <UIButton variant="contained" label="View all Products" fullWidth />
        </Grid> */}
      </Grid>
    </DefaultLayout>
  )
}

export default CuratedCollection
