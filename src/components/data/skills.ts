import { FaDatabase, FaServer } from "react-icons/fa"
import { MdWeb } from "react-icons/md"
import { AiFillCode } from "react-icons/ai"

export const skills = [
  {
    topic: "Backend",
    Icon: FaServer,
    list: ["Express", "Apollo Server", "REST", "GraphQL", "Passport.js"],
  },
  {
    topic: "Frontend",
    Icon: MdWeb,
    list: [
      "React",
      "Next.js",
      "Gatsby",
      "TailwindCSS",
      "Redux",
      "Apollo Client",
    ],
  },
  {
    topic: "Database",
    Icon: FaDatabase,
    list: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    topic: "Languages",
    Icon: AiFillCode,
    list: ["Typescript", "Javascript", "C/C++", "Python"],
  },
]
