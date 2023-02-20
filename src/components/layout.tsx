import { Box, styled } from '@mui/material'
import React from 'react'
import Footer from './footer'
import './layout.css'

type Props = { children: React.ReactNode };

const Main = styled(Box)({ flexGrow: 1 })

const Layout = ({ children }: Props) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      minWidth: '100vw',
      backgroundColor: '#16A085',
    }}>
      <Main>{children}</Main>
      <Footer />
    </Box>

  )
}

export default Layout