import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import Cursor from '../All/cursor'
import Logo from '../../assets/icon.png'
import AMixType from '../../types/AMixType'

export default function MainBody({ setMousePosition, cursorVariant, mousePosition, mouseEnter, mouseLeave }: AMixType) {
  return (
    <div className="dark:bg-gray-900 h-screen flex items-center justify-center relative">
      <div className="flex items-center flex-col">
        <Tilt className="Tilt" options={{ max: 15, scale: 1.5 }} >
          <img src={Logo} alt='Logo' className="w-32 h-32 -mt-10" />
        </Tilt>
        <motion.h1 className="font-bold text-3xl sm:text-5xl text-white text-center" style={{ opacity: 0 }} animate={{ opacity: 1, width: '100%' }} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Nav343 Welcomes You !!!</motion.h1>
      </div>
      <Cursor setMousePosition={setMousePosition} cursorVariant={cursorVariant} mousePosition={mousePosition} />
      <div className="wavething w-auto">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>


  )
}
