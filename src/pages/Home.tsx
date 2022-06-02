import { useState } from "react";
import Cursor from "../components/All/cursor";
import '../main.css'
import Logo from '../assets/icon.png'
import Avatar from '../assets/avatar.png'
import CmdBot from '../assets/CmdBot.png'
import SpaceApp from '../assets/SpaceApp.png'
import Tilt from 'react-tilt'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaCopyright, FaFacebook, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Home() {
  document.title = 'Nav343 - Home'
  AOS.init()
  window.onscroll = function() { scrollFunc() }
  const navbar = document.getElementById('navbar')
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState("default");
  const mouseEnter = () => setCursorVariant("text");
  const mouseClick = () => setCursorVariant("text");
  const mouseLeave = () => setCursorVariant("default");

  function scrollFunc() {
    window.pageYOffset >= 110 ? navbar?.classList.add('bg-white/30') : navbar?.classList.remove('bg-white/30')
  }

  return (
    <motion.div onClick={mouseClick} onDoubleClick={mouseLeave} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/*<div className="sticky bg-gray-500 w-1 h-2 rounded-full right-20 z-50" style={{ top: window.scrollY }}></div>*/}

      <div id="navbar" className="backdrop-blur-sm w-screen flex justify-between items-center absolute sm:fixed top-0 z-50 px-10 py-2 flex-col sm:flex-row">
        <div className="flex items-center">
          <img src={Logo} className="w-12 h-12" />
          <h1 className="text-white font-bold text-xl ml-2">Nav343</h1>
        </div>

        <div className="flex items-center justify-between">
          <Link to='/' className="cursor-none font-bold text-xl text-white hover:underline hover:underline-offset-8 px-2" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Home</Link>
          <Link to='/works' className="cursor-none font-bold text-xl text-white hover:underline underline-offset-8 px-2" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Works</Link>
          <Link to='/about' className="cursor-none font-bold text-xl text-white hover:underline hover:underline-offset-8 px-2" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>About</Link>
        </div>
      </div>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen flex items-center justify-center relative">
        <div className="flex items-center flex-col">
          <Tilt className="Tilt" options={{ max: 15, scale: 1.5 }} >
            <img src={Logo} alt='Logo' className="w-32 h-32 -mt-10" />
          </Tilt>
          <motion.h1 className="font-bold text-3xl sm:text-5xl text-white text-center" style={{ opacity: 0 }} animate={{ opacity: 1 }} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Nav343 Welcomes You !!!</motion.h1>
        </div>
        <Cursor setMousePosition={setMousePosition} cursorVariant={cursorVariant} mousePosition={mousePosition} />
        <div className="wavething w-auto">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      <div className="h-full w-screen from-cyan-500 to-blue-500 flex flex-col items-center justify-between" style={{ background: "#3488f2" }}>
        <h1 className="font-bold text-white text-4xl" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>My Works</h1>

        <div className="mt-10 px-10 sm:px-20">
          <div className="flex items-center justify-center flex-col sm:flex-row" data-aos='fade-right'>
            <div>
              <h1 className="text-white font-bold text-3xl text-center sm:text-left" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Cmd</h1>
              <p className="text-white text-xl mr-5 text-center sm:text-left mb-10 sm:mb-0" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Cmd is an open source multiuse Discord Bot mainly used for learning Linux commands while staying in discord. It has a ton of features including Mod commands, Fun commands, Linux commands and much much more.</p>
            </div>
            <img src={CmdBot} className="w-fit h-96 rounded-xl" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} draggable={false} />
          </div>

          <div className="flex items-center justify-center flex-col sm:flex-row mt-10" data-aos='fade-left'>
            <img src={SpaceApp} className="w-fit h-96 rounded-xl" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} draggable={false} />
            <div className="mt-10 sm:mt-0">
              <h1 className="text-white font-bold ml-5 text-3xl text-center sm:text-right" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Space App</h1>
              <p className="text-white text-xl ml-7 text-center sm:text-right" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>A mobile app made for kids to learn about our Solar System and the Planets. It is made using React Native and works on both IOS and Android with Expo Cli. Also it was my first React Native app and my first mobile app too :)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-full bg-gradient-to-r from-purple-500 to-pink-500">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill" fill="#3488F2"></path>
        </svg>

        <div className="flex items-center justify-center mt-10 flex-col">
          <img src={Avatar} className="rounded-full w-36 h-36" />

          <h1 className="text-white font-bold text-4xl my-5" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>About Me</h1>
          <p className="text-white text-center text-xl mx-5 sm:mx-24" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Hi there, I am Navaneeth K, an early programmer (currently 14), I mostly use Python and Javascript. The first language that I learnt was Python. I have made over 10 projects individually as well as in team (I mostly like making it on my own :D).</p>
        </div>

      </div>

      <div className="flex items-center justify-evenly bg-gradient-to-r from-sky-500 to-indigo-500 py-2 flex-col sm:flex-row">
        <div className="flex items-center justify-center">
          <img src={Logo} className="w-12 h-12" />
          <h1 className="text-white font-bold text-xl ml-2">Nav343</h1>
        </div>

        <div className="flex items-center justify-center text-white font-bold text-xl" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <h1>Copyright</h1>
          <FaCopyright className="mx-2" />
          <h1>Nav343</h1>
        </div>

        <div className="flex items-center justify-between w-32 cursor-none mt-2 sm:mt-0" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <a href="https://github.com/nav343" target={"_blank"}><FaGithub fill="white" size={27} /></a>
          <h1 className="cursor-not-allowed"><FaFacebook fill="white" size={27} /></h1>
          <h1 className="cursor-not-allowed"><FaTwitter fill="white" size={27} /></h1>
          <h1 className="cursor-not-allowed"><FaYoutube fill="white" size={27} /></h1>
        </div>
      </div>
    </motion.div>
  )
}
