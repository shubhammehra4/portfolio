import { m } from "framer-motion"
import React from "react"
// @ts-ignore
import Logo from "../images/Logo.svg"

const Loader: React.FC<{}> = ({}) => {
  return (
    <m.div
      animate
      className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900"
    >
      <m.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layoutId="logo"
        className="filter invert w-1/2 md:w-1/3"
        src={Logo}
        alt="SM"
      />
      {/* <m.h1
        animate
        layoutId="heading"
        className="text-8xl font-black text-white"
      >
        SM
      </m.h1> */}
    </m.div>
  )
}

export default Loader
{
  /* <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layoutId="logo"
        className="h-1/2"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="477.000000pt"
        height="524.000000pt"
        viewBox="0 0 477.000000 524.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,524.000000) scale(0.100000,-0.100000)"
          fill="#fff"
          stroke="none"
        >
          <path
            className="line"
            d="M2295 4933 c-44 -25 -96 -55 -116 -67 -20 -11 -91 -52 -158 -90 -67
-39 -120 -74 -118 -79 2 -8 229 -143 412 -245 68 -38 71 -38 95 -23 14 10 123
73 243 141 119 68 217 127 217 130 0 3 -38 26 -83 51 -45 25 -127 72 -182 104
-55 32 -116 66 -135 77 -19 11 -44 27 -55 34 -27 20 -31 19 -120 -33z"
          />
          <path
            className="line"
            d="M1355 4391 c-6 -5 -111 -67 -235 -138 -124 -71 -279 -161 -345 -200
-66 -38 -182 -105 -257 -147 l-138 -77 0 -1154 0 -1154 93 -54 c50 -30 142
-82 202 -117 61 -35 153 -88 205 -118 52 -30 135 -78 183 -106 48 -28 96 -55
105 -61 196 -115 223 -127 237 -106 3 6 34 25 68 43 34 19 150 85 257 147 107
62 256 148 330 190 74 43 207 120 295 171 88 51 207 120 265 153 58 33 119 68
135 78 17 10 68 39 115 65 47 26 144 82 215 124 72 42 150 88 175 102 25 14
62 35 82 48 l38 22 0 277 c0 252 -2 279 -17 294 -16 13 -66 43 -263 155 -25
14 -78 45 -118 69 -41 24 -85 43 -99 43 -13 0 -68 -26 -121 -57 -133 -77 -248
-144 -306 -177 -40 -24 -46 -30 -35 -41 15 -14 382 -228 437 -254 17 -8 32
-20 32 -26 0 -5 -24 -23 -53 -39 -47 -25 -308 -174 -575 -328 -144 -82 -163
-93 -287 -164 -60 -34 -164 -94 -230 -133 -66 -39 -142 -83 -170 -97 -27 -15
-83 -47 -123 -71 l-73 -45 -82 48 c-45 26 -142 81 -215 123 -73 42 -150 86
-172 99 l-40 23 0 874 0 873 88 50 c48 27 132 75 187 107 55 32 161 93 235
135 74 43 186 107 249 144 62 36 115 66 117 66 9 0 104 64 104 71 0 6 -55 40
-190 116 -98 56 -237 137 -255 149 -23 16 -37 18 -50 5z"
          />
          <path
            className="line"
            d="M3365 4391 c-5 -5 -53 -34 -105 -63 -52 -30 -171 -99 -265 -153 -93
-54 -260 -150 -370 -213 -110 -63 -258 -149 -330 -190 -232 -134 -249 -144
-295 -170 -25 -13 -64 -38 -88 -53 -24 -16 -45 -29 -47 -29 -5 0 -251 -140
-382 -217 l-93 -54 0 -287 0 -287 33 -19 c17 -10 48 -28 67 -39 19 -11 98 -56
175 -100 77 -44 156 -89 177 -101 40 -23 40 -23 149 42 26 15 78 44 115 66 38
21 111 63 162 93 l94 55 -36 24 c-19 13 -37 24 -39 24 -2 0 -57 31 -123 69
-65 39 -156 91 -202 116 -46 26 -81 52 -79 58 3 10 126 89 176 113 7 4 52 30
100 57 47 28 145 84 216 125 72 41 173 99 225 129 52 31 181 104 285 163 105
60 257 147 339 194 82 47 156 86 165 86 9 -1 49 -20 88 -43 40 -23 146 -84
235 -135 90 -52 166 -97 171 -101 7 -7 9 -574 7 -1466 l-1 -290 -220 -125
c-120 -69 -261 -149 -312 -178 -50 -30 -110 -64 -132 -76 -22 -13 -85 -49
-140 -81 -55 -32 -117 -68 -137 -79 -21 -12 -38 -24 -38 -28 0 -4 17 -17 38
-28 20 -11 96 -55 167 -97 229 -133 264 -153 275 -153 6 0 27 11 48 24 20 13
127 74 237 137 110 62 202 117 205 121 3 4 30 20 60 36 30 15 126 69 214 120
87 51 161 92 164 92 3 0 20 11 39 26 l33 25 0 1143 c0 895 -3 1146 -13 1154
-12 10 -219 130 -357 207 -41 23 -89 51 -107 61 -18 11 -85 50 -150 88 -65 38
-171 100 -236 139 -129 75 -147 83 -162 68z"
          />
          <path
            className="line"
            d="M2315 893 c-80 -48 -264 -154 -347 -200 -37 -21 -68 -40 -68 -43 0
-3 51 -34 113 -69 61 -36 169 -98 239 -139 145 -85 114 -86 273 8 50 29 106
61 125 72 123 70 210 123 210 128 0 3 -24 18 -53 35 -214 123 -291 167 -354
203 -40 23 -74 42 -75 41 -2 0 -30 -17 -63 -36z"
          />
        </g>
      </motion.svg> */
}
