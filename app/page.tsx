import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Situations } from '@/components/situations'
import { HowItWorks } from '@/components/how-it-works'
import { Zones } from '@/components/zones'
import { Faq } from '@/components/faq'
import { FinalQuote } from '@/components/final-quote'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Situations />
        <HowItWorks />
        <Zones />
        <Faq />
        <FinalQuote />
      </main>
      <SiteFooter />
    </>
  )
}
