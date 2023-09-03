import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroBanner from '@/components/HeroBanner'
import Brands from '@/components/brands'
import HowItWorks from '@/components/HowItWorks'
import SecondaryCTA from '@/components/SecondaryCTA'
import FAQ from '@/components/FAQ'
import Newsletter from '@/components/Newsletter'
import Testimonals from '@/components/Testimonals'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <HeroBanner/>
      <Brands/>
      <HowItWorks/>
      <SecondaryCTA/>
      <FAQ/>
      <Testimonals/>
      <Newsletter/>
    </main>
  )
}
