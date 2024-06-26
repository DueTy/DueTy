import React, { PropsWithChildren } from 'react'
import { AppBar } from '@mui/material'

const PcLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppBar position="static"></AppBar>
      {children}
    </>
  )
}

export default PcLayout
