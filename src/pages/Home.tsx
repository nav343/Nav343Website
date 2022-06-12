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
import { motion } from 'framer-motion'
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
  const mouseClick = () => { setCursorVariant("text"); setTimeout(mouseLeave, 100) };
  const mouseLeave = () => setCursorVariant("default");

  return (
    <motion.div onClick={mouseClick} onDoubleClick={mouseLeave} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Navbar mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
      <MainBody setMousePosition={setMousePosition} mouseEnter={mouseEnter} mouseLeave={mouseLeave} mousePosition={mousePosition} cursorVariant={cursorVariant} />
      <Works mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
      <About mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
      <ToolsAndLangs mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
      <Contact />
      <Footer mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
    </motion.div>
  )
}

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" fill="#3B82F6"></path>
      </svg>
      <div className="h-fit py-10 flex items-center justify-center flex-col">
        <h1 className="text-white text-3xl font-bold mb-2">Contact</h1>
        <p className="text-gray-300 font-medium text-lg text-center mx-0 sm:px-4">Feel free to contact me if you have any kind of help or want to change anything in this website :)</p>

        <div className="mt-5">
          <div className="flex flex-col sm:flex-row">
            <div>
              <h1 className="text-gray-400 font-medium text-base">Name</h1>
              <input placeholder="Nav343" type={"text"} className="bg-slate-900 border-gray-400 border-2 py-2 pl-3 text-white rounded-md focus:border-white focus:border-2" onChange={(text) => setName(text.target.value)} />
            </div>
            <div className="mx-0 sm:ml-5">
              <h1 className="text-gray-400 font-medium text-base">Email</h1>
              <input placeholder="nav343@coolnav343.nav" type={"email"} className="bg-slate-900 border-gray-400 border-2 py-2 pl-3 text-white rounded-md focus:border-white focus:border-2" onChange={(text) => setEmail(text.target.value)} />
            </div>
          </div>

          <h1 className="text-gray-400 font-medium text-base mt-5">Message</h1>
          <textarea placeholder="The website is nice. Make this contact form working !!!" className="bg-slate-900 border-gray-400 border-2 py-2 pl-3 text-white rounded-md focus:border-white focus:border-2 w-full h-36" onChange={(msg) => setMessage(msg.target.value)} />
          {/*<p>THE name IS: {name}</p>
          <p>THE email IS: {email}</p>
          <p>THE message IS: {message}</p>*/}
        </div>
        <h1 className="text-white text-sm font-extralight italic my-1">Note: The above placeholders are just for example and are fake.</h1>
        <div className="mt-4 p-2 bg-blue-500 rounded-md hover:scale-125 hover:rounded-full ease-in-out duration-300 text-center">
          <button className="text-white text-xl w-60" onClick={() => alert("Contact Form is not yet complete.")}>Submit</button>
        </div>
      </div>
    </>
  )
}
