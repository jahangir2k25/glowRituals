import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import CountdownStrip from '../components/CountdownStrip';
import ProductGallery from '../components/ProductGallery';
import Benefits from '../components/Benefits';
import HowToUse from '../components/HowToUse';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import OrderForm from '../components/OrderForm';
import VideoPlay from '../components/VideoPlay';

export default function Home() {
  return (
    <>
      <VideoPlay />
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
