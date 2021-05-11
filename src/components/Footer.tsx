import React from "react"
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai"

const Footer: React.FC<{}> = ({}) => {
  return (
    <footer className="flex justify-between w-full mb-4 md:mb-6 max-w-7xl mx-auto">
      <div className="flex justify-cnter items-center">
        <a
          aria-label="instagram"
          className="social-links hover:text-pink-600 focus:text-pink-600"
          href="https://www.instagram.com/shubham.mehra4/"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineInstagram />
        </a>
        <a
          aria-label="github"
          className="social-links hover:text-purple-400 focus:text-purple-400"
          href="https://github.com/shubhammehra4"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillGithub />
        </a>
        <a
          aria-label="linkedin"
          className="social-links hover:text-blue-400 focus:text-blue-400"
          href="https://www.linkedin.com/in/shubham-mehra-107a67192/"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a
          aria-label="mail"
          className="social-links hover:text-green-500 focus:text-green-500"
          href="mailto:shubhammehra19@cse.iiitp.ac.in"
        >
          <AiOutlineMail />
        </a>
      </div>

      <div className="text-center text-xl">
        &copy; 2021 | Shubham Mehra -{" "}
        <a
          href="https://github.com/shubhammehra4/portfolio"
          rel="noreferrer"
          target="_blank"
          className="hover:underline focus:underline focus:outline-none"
        >
          @shubhammehra
        </a>
      </div>
    </footer>
  )
}

export default Footer
