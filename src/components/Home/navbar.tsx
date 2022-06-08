import Logo from '../../assets/icon.png'
import { Link } from 'react-router-dom'
import MouseMotion from '../../types/MouseMotion'

const Navbar = ({ mouseEnter, mouseLeave }: MouseMotion) => {

  window.onscroll = function() { scrollFunc() }
  const navbar = document.getElementById('navbar')
  function scrollFunc() {
    window.pageYOffset >= 110 ? navbar?.classList.add('bg-white/30') : navbar?.classList.remove('bg-white/30')
  }

  return (
    <div id="navbar" className="backdrop-blur-sm w-screen flex justify-between items-center absolute sm:fixed top-0 z-50 px-10 py-2 flex-col sm:flex-row">
      <div className="flex items-center">
        <img loading='lazy' src={Logo} className="w-12 h-12" />
        <h1 className="text-white font-bold text-xl ml-2">Nav343</h1>
      </div>

      <div className="flex items-center justify-between">
        <Link to='/' className="cursor-none font-bold text-xl text-white hover:underline hover:underline-offset-8 px-2" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Home</Link>
        <Link to='/works' className="cursor-none font-bold text-xl text-white hover:underline underline-offset-8 px-2" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Works</Link>
        <Link to='/about' className="cursor-none font-bold text-xl text-white hover:underline hover:underline-offset-8 px-2" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>About</Link>
      </div>
    </div>
  )
}

export default Navbar 
