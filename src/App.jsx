import { Routes, Route } from 'react-router-dom'
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Home from './pages/Home'
import ThankYou from './pages/ThankYou'

export default function App() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
