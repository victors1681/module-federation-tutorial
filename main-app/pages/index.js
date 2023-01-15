import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Button, Typography } from '@mui/material'

const CatalogComponent = dynamic(()=> import("shop/catalog"))


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
         <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Nav>This is my nav from main app 1</Nav>
      <main className={styles.main}>
        <Typography variant='h1'>
          Welcome to the main app port: 3000
        </Typography> 
        <Link href="/catalogOnMain">Go to catalog</Link>
        <Button variant='contained' color='primary'>Test</Button>

    Component from shop
    <CatalogComponent/>

      </main>

      <Footer/>
    </div>
  )
}
