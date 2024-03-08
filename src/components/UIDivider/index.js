import { Divider } from '@mui/material'
import React from 'react'

const UIDivider = () => {
  return (
    <Divider
      sx={{
        background: (theme) => `${theme.palette.primary.greyShade1} !important`,
      }}
    />
  )
}

export default UIDivider
