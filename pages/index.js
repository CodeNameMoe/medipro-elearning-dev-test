import Head from 'next/head'
import Image from 'next/image'
import CourseWindow from '../components/coursewindow/CourseWindow'
import SideBar from '../components/sidebar/SideBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MediPro e-Learning App</title>
        <meta name="description" content="Interactive e-Learning App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SideBar/>
        <CourseWindow/>
      </main>
      

      
    </div>
  )
}
