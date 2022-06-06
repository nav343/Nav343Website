import { useState } from 'react'
import { motion } from "framer-motion"
import Navbar from "../components/Home/navbar"
import Cursor from '../components/All/cursor';
import MouseMotion2 from '../types/MouseMotion2';
import Avatar from '../assets/avatar.png'

export default function About() {
  document.title = 'Nav343 - About'
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });


  const [cursorVariant, setCursorVariant] = useState("default");
  const mouseEnter = () => setCursorVariant("text");
  const mouseClick = () => setCursorVariant("text");
  const mouseLeave = () => setCursorVariant("default");


  return (
    <motion.div initial={{ height: 0 }} animate={{ height: '100vh' }} exit={{ height: 0 }} className="h-screen w-full bg-gray-900 flex item-center justify-center" onClick={mouseClick} onDoubleClick={mouseLeave}>
      <Navbar mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
      <div className='flex items-center justify-center'>
        <AboutMain mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
      </div>
      <Cursor setMousePosition={setMousePosition} cursorVariant={cursorVariant} mousePosition={mousePosition} />
    </motion.div>
  )
}

const AboutMain = ({ mouseEnter, mouseLeave }: MouseMotion2) => {
  return (
    <div className="h-fit w-full bg-gray-900">
      <div className="flex items-center justify-center mt-12 flex-col">
        <img src={Avatar} className="rounded-full w-36 h-36" />
        <h1 className="text-white font-bold text-4xl my-5" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>About Me</h1>
        <p className="text-white text-center text-xl mx-5 sm:mx-24 mb-20" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Hi there, I am Nav343, an early programmer (currently 14), I mostly use Python and Javascript. The first language that I learnt was Python. I have made over 10 projects individually as well as in team (I mostly like making it on my own :D).</p>
      </div>
    </div>
  )
}
