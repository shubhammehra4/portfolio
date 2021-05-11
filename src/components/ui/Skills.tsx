import { m } from "framer-motion"
import React from "react"
import { skills } from "../data/skills"

interface SkillsProps {
  minimise: React.Dispatch<React.SetStateAction<boolean>>
}

const Skills: React.FC<SkillsProps> = ({ minimise }) => {
  return (
    <m.div
      animate={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
      className="absolute z-10 top-0 left-0 h-screen w-screen flex justify-center items-center"
      onClick={() => minimise(false)}
    >
      <m.div layoutId="skills" animate className="max-w-5xl w-11/12 mx-auto">
        <m.h1
          layoutId="skills-heading"
          animate
          exit={{ opacity: 0 }}
          className="text-4xl md:text-7xl text-center mt-2"
        >
          Skills
        </m.h1>
        <m.div
          className="flex flex-wrap my-4 md:my-8 justify-evenly"
          animate
          exit={{ opacity: 0 }}
        >
          {skills.map((s, i) => (
            <div
              key={i}
              className="w-4/5 md:w-2/5 mt-3 md:mt-4 py-4 px-2 border-white border-2 rounded-md"
            >
              <h2 className="text-xl md:text-3xl mb-3 flex items-center">
                <i className="pr-1 md:pr-4">{s.Icon({})}</i>
                {s.topic}
              </h2>
              <ul
                className="list-disc pl-6 text-sm md:text-lg list-inside"
                style={{ columnCount: 2 }}
              >
                {s.list.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </m.div>
      </m.div>
    </m.div>
  )
}

export default Skills
