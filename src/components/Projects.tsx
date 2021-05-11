import { m } from "framer-motion"
import React from "react"
import { projects } from "./data/projects"
import { useProjectImages } from "./hooks/useProjectImages"
import Seo from "./Seo"
import ProjectSlide from "./ui/ProjectSlide"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const data = useProjectImages()
  const indicatorStyles: React.CSSProperties = {
    background: "#828282",
    width: 35,
    height: 4,
    display: "inline-block",
    margin: "0 8px",
  }
  return (
    <>
      <Seo title="Projects" />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col w-full h-full"
      >
        <div className="max-w-7xl w-full px-5 xl:px-0 mx-auto flex flex-col md:flex-row justify-center items-center h-full">
          <Carousel
            className="w-full h-full flex justify-center items-center"
            showThumbs={false}
            showStatus={false}
            stopOnHover={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={8000}
            transitionTime={800}
            swipeScrollTolerance={50}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                return (
                  <button
                    style={{ ...indicatorStyles, background: "#fff" }}
                    aria-label={`Slide - ${label} ${index + 1}`}
                    title={`${label} ${index + 1}`}
                  />
                )
              }
              return (
                <button
                  className="focus:outline-none"
                  style={indicatorStyles}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`Slide - ${label} ${index + 1}`}
                />
              )
            }}
          >
            {projects.map((p, i) => (
              <ProjectSlide
                key={i}
                project={p}
                index={data[`${p.indexPage}`]}
                landing={data[`${p.landingPage}`]}
                logo={data[`${p.logo}`]}
              />
            ))}
          </Carousel>
        </div>
      </m.div>
    </>
  )
}

export default Projects
