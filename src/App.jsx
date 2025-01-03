import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Connects from "./pages/Connects"
import ContactMe from "./pages/ContactMe"
import Educations from "./pages/Educations"
import Experiences from "./pages/Experiences"
import Hero from "./pages/Hero"
import Skills from "./pages/Skills"
import ScrollToTopButton from "./components/ScrollToTopButton"



function App() {

  return (
    <>
      <Navbar />
      <div>
        <Hero />
        <Experiences />
        <Educations />
        <Skills />
      </div>
      <ScrollToTopButton />
      <ContactMe />
      
      {/* <Connects /> */}
      <Footer />
    </>
  )
}

export default App
