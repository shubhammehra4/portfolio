import { m } from "framer-motion"
import React from "react"

interface PersonalProps {
  minimise: React.Dispatch<React.SetStateAction<boolean>>
}

const Personal: React.FC<PersonalProps> = ({ minimise }) => {
  return (
    <m.div
      animate={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
      className="absolute z-10 top-0 left-0 h-screen w-screen flex justify-center items-center"
      onClick={() => minimise(false)}
    >
      <m.div layoutId="personal" animate className="max-w-5xl w-11/12 mx-auto">
        <m.h1
          layoutId="personal-heading"
          exit={{ opacity: 0 }}
          animate
          className="text-3xl md:text-7xl text-center"
        >
          Personal Info
        </m.h1>
        <m.div
          className="flex flex-wrap my-3 md:my-8 justify-center"
          animate
          exit={{ opacity: 0 }}
        >
          <div className="w-5/6 mt-3 py-2 md:py-4 px-2 border-white border-2 rounded-md">
            <h2 className="text-center text-3xl md:text-5xl mb-2 md:mb-4">
              Journey
            </h2>
            <p className="px-2 md:px-4 my-2 text-sm md:text-lg">
              I started my journey into the world of programming with C and then
              learning C++ with Object-Oriented Programming. Transitioning from
              a low-level language like C++, Javascript with its dynamic nature
              and a huge and supportive community amazed me. It's a language
              that can do wondrous things, from Gorgeous UI's to Complex
              Backends. Currently, I'm learning new emerging technologies like
              GraphQL & Functional Programming with Elixir.
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-evenly">
            <div className="w-5/6 md:w-2/5 py-2 md:py-4 px-2 border-white border-2 rounded-md mt-3 md:mt-4">
              <h3 className="text-center text-2xl md:text-3xl">Tools</h3>
              <ul
                className="list-disc pl-6 text-xs md:text-lg list-inside mt-3"
                style={{ columnCount: 2 }}
              >
                <li>VSCode</li>
                <li>Sublime Text</li>
                <li>Git</li>
                <li>CodeSandbox</li>
                <li>Docker</li>
              </ul>
            </div>

            <div className="w-5/6 md:w-2/5 py-2 md:py-4 px-2 border-white border-2 rounded-md mt-3 md:mt-4">
              <h3 className="text-center text-2xl md:text-3xl">Hobbies</h3>
              <ul
                className="list-disc pl-6 text-xs md:text-lg list-inside mt-3"
                style={{ columnCount: 2 }}
              >
                <li>Linux</li>
                <li>Athletics</li>
                <li>Music</li>
                <li>Anime</li>
              </ul>
            </div>
          </div>
        </m.div>
      </m.div>
    </m.div>
  )
}

export default Personal
