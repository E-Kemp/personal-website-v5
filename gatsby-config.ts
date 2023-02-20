import React from 'react'
import { ThemeProvider } from '@mui/material'
import type { GatsbyConfig } from 'gatsby'
import theme from './theme'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Personal Site',
    siteUrl: 'https://www.yourdomain.tld'
  },

  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/content/'
      }
    },

    'gatsby-transformer-remark'
  ]
}

export default config
