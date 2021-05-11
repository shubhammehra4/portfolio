import {
  AnimatePresence,
  AnimateSharedLayout,
  domMax,
  LazyMotion,
} from "framer-motion"
import React, { useEffect, useState } from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Home from "../components/Home"
import Loader from "../components/Loader"
import NavBar from "../components/NavBar"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Social from "../components/ui/Social"

const IndexPage: React.FC<{}> = ({}) => {
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState(0)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  const renderCurrent = () => {
    switch (active) {
      case 0:
        return <Home setActive={setActive} />
      case 1:
        return <About />
      case 2:
        return <Projects />
      case 3:
        return <Contact />
      default:
        return <Home setActive={setActive} />
    }
  }

  return (
    <>
      <Seo title="Home" />
      <LazyMotion features={domMax} strict={true}>
        <div className="bg-gray-900 h-screen w-screen text-white">
          <AnimateSharedLayout>
            {loading ? (
              <Loader />
            ) : (
              <section className="h-screen w-screen flex flex-col overflow-hidden">
                <Social />
                <main className="flex flex-col justify-center items-center flex-grow">
                  <AnimatePresence exitBeforeEnter>
                    {renderCurrent()}
                  </AnimatePresence>
                </main>
                <NavBar active={active} setActive={setActive} />
              </section>
            )}
          </AnimateSharedLayout>
        </div>
      </LazyMotion>
    </>
  )
}

export default IndexPage
