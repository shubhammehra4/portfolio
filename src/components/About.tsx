import { AnimatePresence, m } from "framer-motion"
import React, { useState } from "react"
import Seo from "./Seo"
import AboutMe from "./ui/AboutMe"
import Personal from "./ui/Personal"
import Skills from "./ui/Skills"

const About: React.FC<{}> = ({}) => {
  const [skills, setSkills] = useState(false)
  const [personal, setPersonal] = useState(false)
  return (
    <>
      <Seo title="About" />

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col w-full h-full"
      >
        <div className="max-w-7xl px-5 lg:px-0 w-full mx-auto flex flex-col justify-around items-start h-full">
          <div className="text-center w-full mt-3 md:mb-6 text-xl md:text-3xl">
            Enthusiastic Web Developer eager to contribute to team success
            through hard work, attention to detail, and excellent organizational
            skills.
          </div>

          <AboutMe />
          <div className="flex items-center justify-around max-w-3xl w-full mx-auto">
            <m.div onClick={() => setSkills(true)}>
              <m.button layoutId="skills" className="btn-primary md:text-xl">
                <m.span layoutId="skills-heading">Skills</m.span>
              </m.button>
            </m.div>

            <m.div onClick={() => setPersonal(true)}>
              <m.button layoutId="personal" className="btn-primary md:text-xl">
                <m.span layoutId="personal-heading">Personal Info</m.span>
              </m.button>
            </m.div>
          </div>
          <AnimatePresence>
            {skills && <Skills minimise={setSkills} />}
            {personal && <Personal minimise={setPersonal} />}
          </AnimatePresence>
        </div>
      </m.div>
    </>
  )
}

export default About
