/* Importing the required modules and files
* Modules:
  * useState from react
  * motion from framer-motion
  * AOS removed !!!
* Files/Components 
  * Navbar
  * MainBody
  * Works
  * About
  * Tools and Languages
  * Footer*/
import { useState } from "react";
import '../main.css'
import { motion, Reorder } from 'framer-motion'
import Navbar from "../components/Home/navbar";
import MainBody from "../components/Home/main-body";
import Works from "../components/Home/works";
import About from "../components/Home/about";
import Footer from "../components/Home/footer";
import ToolsAndLangs from "../components/Home/tools-and-lang";

/* Exporting the default Home function. 
  * Setting the title of the page
  * creating an object state (for the cursor) using useState containing x and y positions (default to 0)
  * Defining the variants for framer-motion cursor*/
export default function Home() {
  document.title = 'Nav343 - Home'

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState("default");
  const mouseEnter = () => setCursorVariant("text");
  const mouseClick = () => setCursorVariant("text");
  const mouseLeave = () => setCursorVariant("default");

  return (
    <motion.div onClick={mouseClick} onDoubleClick={mouseLeave} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Navbar mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
      <MainBody setMousePosition={setMousePosition} mouseEnter={mouseEnter} mouseLeave={mouseLeave} mousePosition={mousePosition} cursorVariant={cursorVariant} />
      <Works mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
      <About mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
      <ToolsAndLangs mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
      <Footer mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
    </motion.div>
  )
}
