import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Hosting from './components/Hostiog/Hosting'
import Footer from './components/Footer/Footer'
import Service from './components/Service/Service'
function App() {
  const data1 = [
    {   id: 1, 
        title1:"Branding",
        content1:"Talk to your customers and tell them you and your company's story through us the way you want.",
        content2:"Let us plan the content that will bring your audience closer to you. ",
        title2:"In focal X agency, we provide:",
        content3:"Visual identity design. Define Brand Identity.Define Brand personality.Building Your brand strategy.Market research and competitors study",
        title3:"We walk with you from A to Z",
        img2:'./src/assets/image/brandingOrange.png',
        img1:'./src/assets/image/brandingpattren.png',
        class:'card border1 border',
        borderbottom: "border-title"

    },
    {   id: 2, 
        title1:"Marketing",
        content1:"Talk to your customers and tell them you and your company's story through us the way you want.",
        content2:"Let us plan the content that will bring your audience closer to you. ",
        title2:"In focal X agency, we provide:",
        content3:"E-mail marketing. Affiliate marketing. Influencer marketing. Market research and Analysis. App store optimization ( ASO ). Search engine Marketing ( SEM ). Search engine optimization ( SEO ).Social media marketing & campaigns.",
        title3:"We walk with you from A to Z",
        img2:'./src/assets/image/markiting.png',
        img1:'./src/assets/image/markrtingpattren.png',
        class:'card border2 border',
        borderbottom: "border-title1"
    }
]
  return (
    <>
    <Navbar/>
    <Hero/>
    <Service data1={data1} />
    <Hosting/>
    <Footer/>
    </>
  )
}

export default App
