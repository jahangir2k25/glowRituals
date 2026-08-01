import Hero from '../components/Hero'
import TrustBadges from '../components/TrustBadges'
import CountdownStrip from '../components/CountdownStrip'
import ProductGallery from '../components/ProductGallery'
import Benefits from '../components/Benefits'
import HowToUse from '../components/HowToUse'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import OrderForm from '../components/OrderForm'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <CountdownStrip />
      <ProductGallery />
      <Benefits />
      <HowToUse />
      <Testimonials />
      <FAQ />
      <OrderForm />
    </>
  )
}
