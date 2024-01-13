import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Form from '@/Instagram-login-layout/instagram-login-page/components/Form/index.js'
import Footer from '@/Instagram-login-layout/instagram-login-page/components/Footer/index.js'


export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/insta.ico" />
      </Head>
      <header>

      </header>
      <main className={`${styles.main}`}>
        <div className={styles.photos}>
        <Image className={styles.phone} src="/Images/Phones.png" alt="phone" width={400} height={581.15}/>
        </div>
        <Form/>
      </main>
      <Footer/>
      
    </>
  )
}
