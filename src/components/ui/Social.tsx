import React from "react"
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai"

const Social: React.FC<{}> = ({}) => {
  return (
    <section className="flex justify-end w-full mt-4 mx-auto px-6">
      <div className="flex justify-cnter items-center">
        <a
          aria-label="instagram"
          className="social-links has-tooltip hover:text-pink-600 focus:text-pink-600"
          href="https://www.instagram.com/shubham.mehra4/"
          rel="noreferrer"
          target="_blank"
        >
          <span
            className="tooltip text-sm text-white p-1 mt-10"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            Instagram
          </span>
          <AiOutlineInstagram />
        </a>
        <a
          aria-label="github"
          className="social-links has-tooltip hover:text-purple-400 focus:text-purple-400"
          href="https://github.com/shubhammehra4"
          rel="noreferrer"
          target="_blank"
        >
          <span
            className="tooltip text-sm text-white p-1 mt-10"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            Github
          </span>
          <AiFillGithub />
        </a>
        <a
          aria-label="linkedin"
          className="social-links has-tooltip hover:text-blue-400 focus:text-blue-400"
          href="https://www.linkedin.com/in/shubham-mehra-107a67192/"
          rel="noreferrer"
          target="_blank"
        >
          <span
            className="tooltip text-sm text-white p-1 mt-10"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            Linkedin
          </span>
          <AiFillLinkedin />
        </a>
        <a
          aria-label="mail"
          className="social-links has-tooltip hover:text-green-500 focus:text-green-500"
          href="mailto:shubhammehra19@cse.iiitp.ac.in"
        >
          <span
            className="tooltip text-sm text-white p-1 mt-10"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            Mail
          </span>
          <AiOutlineMail />
        </a>
      </div>
    </section>
  )
}

export default Social
