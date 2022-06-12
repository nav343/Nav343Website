import { useState } from 'react'
import { motion } from "framer-motion"
import Navbar from "../components/Home/navbar"
import Cursor from '../components/All/cursor'
import MouseMotion2 from '../types/MouseMotion2'
import CmdBot from '../assets/CmdBot.png'
import SpaceApp from '../assets/SpaceApp.png'
import Footer from '../components/Home/footer'

export default function WorksPage() {
  document.title = 'Nav343 - Works'
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
      <motion.div initial={{ width: 0 }} animate={{ width: '100vw' }} exit={{ width: 0 }} className="h-fit w-full bg-gray-900 flex item-center justify-center" onClick={mouseClick} onDoubleClick={mouseLeave}>
        <Navbar mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
        <Works mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
        <Cursor setMousePosition={setMousePosition} cursorVariant={cursorVariant} mousePosition={mousePosition} />
      </motion.div>
      <Footer mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
    </>
  )
}

const Works = ({ mouseEnter, mouseLeave }: MouseMotion2) => {
  return (
    <div className="my-24 bg-gray-900 flex flex-col items-center justify-between">
      <h1 id="main_logo" className="font-bold text-white text-4xl" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>My Works</h1>

      <div className="mt-10 px-10 sm:px-20">
        <div className="flex items-center justify-center flex-col sm:flex-row rounded-lg">
          <div>
            <h1 className="text-white font-bold text-3xl text-center sm:text-left" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Cmd</h1>
            <p className="text-white text-xl mr-5 text-center sm:text-left mb-10 sm:mb-0" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Cmd is an open source multiuse Discord Bot mainly used for learning Linux commands while staying in discord. It has a ton of features including Mod commands, Fun commands, Linux commands and much much more.</p>
          </div>
          <img alt="Cmd Bot Demo" src={CmdBot} className="w-fit h-96 rounded-xl" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} draggable={false} />
        </div>

        <div className="flex items-center justify-center flex-col sm:flex-row mt-10" >
          <img alt="Space App Demo" src={SpaceApp} className="w-fit h-96 rounded-xl" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} draggable={false} />
          <div className="mt-10 sm:mt-0">
            <h1 className="text-white font-bold ml-5 text-3xl text-center sm:text-right" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Space App</h1>
            <p className="text-white text-xl ml-7 text-center sm:text-right" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>A mobile app made for kids to learn about our Solar System and the Planets. It is made using React Native and works on both IOS and Android with Expo Cli. Also it was my first React Native app and my first mobile app too :)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
