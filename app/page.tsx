import Image from 'next/image'
import Hero from './components/Hero'
import Camp from "@/app/components/Camp"
import Guide from "@/app/components/Guide"
import Footer from './components/Footer'

export default function Home() {
  return (
   <>
  <Hero/>
  <Camp/>
  <Guide/>
  
   </>
  )
}
