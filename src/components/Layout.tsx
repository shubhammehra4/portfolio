import { motion } from "framer-motion"
import React from "react"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <motion.main
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
      >
        {children}
      </motion.main>
      {/* <main>{children}</main̥> */}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
