import * as React from 'react'
import Head from 'next/head'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <LayoutRoot>
    <Head>
      <title>Francis Provost - Front End Developer</title>
    </Head>
    <Header />
    <LayoutMain>{children}</LayoutMain>
  </LayoutRoot>
)

export default IndexLayout
