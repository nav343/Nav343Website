import MouseMotion2 from "../../types/MouseMotion2"
import Avatar from '../../assets/avatar.png'

const AboutMain = ({ mouseEnter, mouseLeave }: MouseMotion2) => {
  return (
    <div className="h-fit w-full bg-gray-900">
      <div className="flex items-center justify-center mt-12 flex-col">
        <img loading='lazy' alt="About Me" src={Avatar} className="rounded-full w-36 h-36" />
        <h1 id="main_logo" className="text-white font-bold text-4xl my-5" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>About Me</h1>
        <p className="text-white text-center text-xl mx-5 sm:mx-24 mb-20" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Hi there, I am Nav343, an early programmer (currently 14), I mostly use Python and Javascript. The first language that I learnt was Python. I have made over 10 projects individually as well as in team (I mostly like making it on my own :D).</p>
      </div>
    </div>
  )
}

export default AboutMain
