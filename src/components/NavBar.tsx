import { m } from "framer-motion"
import React from "react"
// @ts-ignore
import Logo from "../images/Logo.svg"

interface NavBarProps {
  active: number
  setActive: React.Dispatch<React.SetStateAction<number>>
}

const NavBar: React.FC<NavBarProps> = ({ active, setActive }) => {
  const handleClick = (num: number) => {
    if (active !== num) {
      setActive(num)
    }
  }
  const list = [
    { title: "Home", color: "#ee6055" },
    { title: "About", color: "#60d394" },
    { title: "Projects", color: "#ffd97d" },
    { title: "Contact", color: "#ff9b85" },
  ]
  return (
    <m.nav className="w-full">
      <m.div className="max-w-7xl flex items-center py-4 md:py-3 md:px-6 mx-auto justify-between">
        <m.img
          layoutId="logo"
          className="filter invert h-16 absolute top-2 left-2 md:static"
          src={Logo}
          alt="SM"
        />
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center md:justify-end w-full"
        >
          {list.map((li, i) => (
            <m.button
              key={i}
              animate
              className="mx-3 focus:outline-none relative text-xl font-bold"
              onClick={() => handleClick(i)}
              style={{ color: active === i ? li.color : "white" }}
            >
              {i === active && (
                <m.div
                  layoutId="underline"
                  className="underline"
                  style={{ background: li.color }}
                />
              )}
              {li.title}
            </m.button>
          ))}
        </m.div>
      </m.div>
    </m.nav>
  )
}

export default NavBar
