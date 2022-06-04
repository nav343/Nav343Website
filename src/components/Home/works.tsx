import CmdBot from '../../assets/CmdBot.png'
import SpaceApp from '../../assets/SpaceApp.png'
import MouseMotion2 from '../../types/MouseMotion2'

export default function Works({ mouseEnter, mouseLeave }: MouseMotion2) {
  return (
    <div className="h-full w-screen from-cyan-500 to-blue-500 flex flex-col items-center justify-between" style={{ background: "#3488f2" }}>
      <h1 className="font-bold text-white text-4xl" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>My Works</h1>

      <div className="mt-10 px-10 sm:px-20">
        <div className="flex items-center justify-center flex-col sm:flex-row rounded-lg" data-aos='fade-right'>
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
  )
}

