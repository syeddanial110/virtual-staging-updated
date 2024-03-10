'use client'

import { apiGet } from '@/auth/ApiRequest'
import { getUserId } from '@/auth/Auth'
import { ApiEndpoints } from '@/auth/apiEndpoints'
import UITabs from '@/components/UITabs/UITabs'
import UITypography from '@/components/UITypography/UITypography'
import CurrentOrders from '@/containers/Order/CurrentOrders'
import OrderHistory from '@/containers/Order/OrderHistory'
import DefaultLayout from '@/layout/default-layout'
import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Order = () => {
  const tabArr = [
    {
      label: 'Current orders',
      a11yPropsIndex: 0,
    },
    {
      label: 'Order History',
      a11yPropsIndex: 1,
    },
  ]

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    )
  }

  const [value, setValue] = useState(0)
  const [ordersData, setOrdersData] = useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const getOrdersByUserId = () => {
    const id = getUserId()
    apiGet(
      `${ApiEndpoints.userById}${id}`,
      (res) => {
        console.log('res', res)
        setOrdersData(res.user.orders)
      },
      (err) => {
        console.log('err', err)
      },
    )
  }

  useEffect(() => {
    getOrdersByUserId()
  }, [])

  return (
    <DefaultLayout>
      <Grid container justifyContent="center" gap={3}>
        <Grid item xs={12}>
          <UITypography
            type="heading"
            title={'Order History'}
            textAlign="center"
          />
        </Grid>
        <Grid item xs={11}>
          <CurrentOrders ordersData={ordersData} />
          {/* <UITabs handleChange={handleChange} value={value} tabArr={tabArr}>
            <CustomTabPanel value={value} index={0}>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <OrderHistory />
            </CustomTabPanel>
          </UITabs> */}
        </Grid>
      </Grid>
    </DefaultLayout>
  )
}

export default Order
