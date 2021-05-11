import { m } from "framer-motion"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

interface ProjectSlideProps {
  project: {
    title: string
    snip: string
    description: string
    stack: string
    repo: string
    link: string
    indexPage: string
    landingPage: string
  }
  index: any
  landing: any
  logo: any
}

const ProjectSlide: React.FC<ProjectSlideProps> = ({
  project,
  index,
  landing,
  logo,
}) => {
  return (
    <div className="flex flex-col justify-center items-center px-5 my-auto mb-6 md:mb-52">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full md:w-4/6 relative"
        >
          <GatsbyImage image={getImage(index)} alt={project.indexPage} />
          <m.div
            className="absolute right-6 top-6 md:top-10 w-2/6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <GatsbyImage image={getImage(landing)} alt={project.landingPage} />
          </m.div>
        </m.div>
        <div className="text-center p-4 py-6 w-full lg:w-2/6 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl my-1 md:my-3 font-bold flex justify-center items-center">
            <GatsbyImage
              className="mr-2 md:mr-6"
              image={getImage(logo)}
              alt="logo"
            />
            {project.title}
          </h1>
          <h2 className="text-xl md:text-2xl mb-3 font-semibold">
            {project.snip}
          </h2>
          <p className="my-1 md:text-lg">{project.description}</p>
          <div className="mt-4 flex justify-center items-center">
            <a
              className="btn-primary mr-4"
              href={project.link}
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
            <a
              className="btn-primary"
              href={project.repo}
              rel="noreferrer"
              target="_blank"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSlide
