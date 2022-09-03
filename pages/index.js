import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import Hero from '../comps/Hero'
import LeftBar from '../comps/LeftBar'
import Content from '../comps/Content'
import RightBar from '../comps/RightBar'


export default function Home() {
  return (
    <div className=''>
      <NavBar />
      <Hero />

      <div className='container mx-auto mt-8 flex justify-between'>
        <LeftBar />
        <Content />
        <RightBar />
      </div>
    </div>
  )
}
