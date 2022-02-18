import '@/css/tailwind.css'
import '@/css/prism.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Script from 'next/script'

import { motion } from 'framer-motion'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init({
      delay: 400,
      duration: 1000,
    })
  })

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </motion.div>
    </ThemeProvider>
  )
}
