import Logo from '../../assets/icon2.png'
import { FaCopyright, FaFacebook, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
import MouseMotion2 from '../../types/MouseMotion2'

{ /* Old Color Theme:
     * bg-gradient-to-r from-purple-500 to-pink-500 */ }

export default function Footer({ mouseEnter, mouseLeave }: MouseMotion2) {
  return (
    <div className="flex items-center justify-evenly bg-gray-900 py-2 flex-col sm:flex-row">
      <div className="flex items-center justify-center">
        <img src={Logo} className="w-12 h-12" alt="Nav343 Logo" />
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
  )
}
