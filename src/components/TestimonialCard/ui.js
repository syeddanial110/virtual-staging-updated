'use client'

import { Box } from '@mui/material'
import { styled } from '@mui/system'

export const TestimonialWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.greyShade4,
  minHeight: '300px',
  padding: '15px 20px',
  borderRadius: '20px',
}))
