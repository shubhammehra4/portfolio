import React from "react"
import { AiOutlineRight } from "react-icons/ai"

const AboutMe: React.FC<{}> = ({}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-around text-sm md:text-base lg:text-lg ">
      <ul>
        <li>
          <AiOutlineRight className="inline-block" />
          <strong className="text-purple-600">DOB:</strong> 4<sup>th</sup>{" "}
          October, 2000
        </li>
        <li>
          <AiOutlineRight className="inline-block" />
          <strong className="text-purple-600">Contact:</strong> +91-8847237688
        </li>
        <li>
          <AiOutlineRight className="inline-block" />
          <strong className="text-purple-600">Location:</strong> Ludhiana,
          Punjab, India
        </li>
      </ul>
      <ul>
        <li>
          <AiOutlineRight className="inline-block" />
          <strong className="text-purple-600">Degree:</strong> B.Tech, CSE
        </li>
        <li>
          <AiOutlineRight className="inline-block" />
          <strong className="text-purple-600">College:</strong> IIIT, Pune
        </li>
        <li>
          <AiOutlineRight className="inline-block" />
          <strong className="text-purple-600">Email:</strong>{" "}
          shubhammehra4@gmail.com
        </li>
      </ul>
    </div>
  )
}

export default AboutMe
