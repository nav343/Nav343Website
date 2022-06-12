import { useState } from 'react'
import { motion } from "framer-motion"
import Navbar from "../components/Home/navbar"
import Cursor from '../components/All/cursor';
import AboutMain from '../components/About/AboutMain';

export default function About() {
  document.title = 'Nav343 - About'
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });


  const [cursorVariant, setCursorVariant] = useState("default");
  const mouseEnter = () => setCursorVariant("text");
  const mouseClick = () => { setCursorVariant("text"); setTimeout(mouseLeave, 100) };
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

