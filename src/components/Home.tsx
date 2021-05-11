import { m } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

interface HomeProps {
  setActive: React.Dispatch<React.SetStateAction<number>>
}

const Home: React.FC<HomeProps> = ({ setActive }) => {
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col w-full"
      >
        <div className="max-w-7xl px-5 xl:px-0 w-full mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <m.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              layoutId="heading"
              className="text-4xl md:text-6xl my-2 md:my-4"
            >
              <span className="mb-1 md:mb-4">Hi, I'm</span>
              <br />
              <span className="name text-4xl md:text-7xl relative leading-8">
                SHUBHAM MEHRA
              </span>
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl mt-4 md:mt-8 italic text-gray-400"
            >
              Full Stack Developer / Competitive Programmer / Tech Enthusiast
            </m.p>
          </div>
          <m.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center"
            layoutId="mainphoto"
          >
            <StaticImage
              src="../images/SM-Main.png"
              width={500}
              alt="Photo"
              quality={100}
              formats={["auto", "webp", "avif"]}
              placeholder="blurred"
              className="rounded-full w-2/5 lg:w-full"
            />
          </m.div>
        </div>
        <m.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="max-w-7xl mx-auto mt-8 flex flex-col"
        >
          <q className="text-2xl md:text-4xl mt-6 md:mt-10 break-words text-center my-2">
            Let's Build An Experience Together
          </q>
          <button
            className="btn-primary mx-auto mt-4"
            onClick={() => setActive(3)}
          >
            Contact Me
          </button>
        </m.div>
      </m.div>
    </>
  )
}

export default Home
