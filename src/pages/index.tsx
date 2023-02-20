import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Box, Typography } from '@mui/material'
import Layout from '../components/layout'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <Typography variant="h1" component="h1">Welcome!</Typography>
      </Box>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
