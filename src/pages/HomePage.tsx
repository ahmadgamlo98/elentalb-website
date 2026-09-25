import Header from '../components/Header'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Culture from '../components/Culture'
import Industries from '../components/Industries'
import WhyChooseUs from '../components/WhyChooseUs'
import News from '../components/News'
import Careers from '../components/Careers'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../App.css'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Culture />
        <Industries />
        <WhyChooseUs />
        <News />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
