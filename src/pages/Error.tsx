import { useState } from 'react'
import { Link } from 'react-router-dom';
import NotFound from '../assets/notfound.svg'
import Cursor from '../components/All/cursor';
import { motion } from 'framer-motion'

export default function Error() {
  document.title = '404 - Not Found'

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState("default");
  const mouseEnter = () => setCursorVariant("text");
  const mouseClick = () => { setCursorVariant("text"); setTimeout(mouseLeave, 100) };
  const mouseLeave = () => setCursorVariant("default");

  return (
    <>
      <motion.div className='w-screen h-screen bg-gray-900 flex items-center justify-center flex-col' onClick={mouseClick} onDoubleClick={mouseLeave} initial={{ rotate: 0 }} animate={{ rotate: 360 }} exit={{ rotate: 0 }}>
        <img src={NotFound} className="w-48 h-48" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
        <Cursor setMousePosition={setMousePosition} cursorVariant={cursorVariant} mousePosition={mousePosition} />
        <h1 className="text-white text-5xl font-bold" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>404 Not Found</h1>
        <Link to="/" className='text-white text-2xl hover:bg-white hover:text-gray-900 font-bold mt-5 p-5 hover:rounded-3xl rounded-lg ease-in-out duration-300'>Back to Home</Link>
      </motion.div>
    </>
  )
}


