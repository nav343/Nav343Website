import { Reorder } from "framer-motion"
import MouseMotion2 from "../../types/MouseMotion2"

export default function ToolsAndLangs({ mouseEnter, mouseLeave }: MouseMotion2) {
  const tools_data1 = [
    { lang: "Javascript", imgurl: 'https://img.icons8.com/ios-filled/344/javascript.png' },
    { lang: "Typescript", imgurl: 'https://img.icons8.com/ios-filled/344/typescript.png' },
    { lang: "Rust", imgurl: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/344/external-rust-is-a-multi-paradigm-system-programming-language-logo-bold-tal-revivo.png' },
    { lang: "Css", imgurl: 'https://img.icons8.com/ios-filled/344/css3.png' },
    { lang: "NodeJs", imgurl: 'https://img.icons8.com/windows/344/nodejs.png' },
  ]
  const tools_data2 = [
    { lang: "React", imgurl: 'https://img.icons8.com/ios-filled/344/react-native.png' },
    { lang: "Python", imgurl: 'https://img.icons8.com/ios-filled/344/python.png' },
    { lang: "Git", imgurl: 'https://img.icons8.com/ios-filled/344/git.png' },
    { lang: "Vim", imgurl: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/344/external-vim-a-highly-configurable-text-editor-for-efficiently-creating-and-changing-any-kind-of-text-logo-bold-tal-revivo.png' },
    { lang: "VS Code", imgurl: 'https://img.icons8.com/ios-filled/344/visual-studio.png' },
  ]
  return (
    <div className='h-fit w-screen bg-blue-500 flex items-center flex-col justify-center py-20'>
      <h1 className="text-white font-bold text-3xl">Languages and Tools</h1>
      <div className="flex flex-col sm:flex-row my-10" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        {tools_data1.map((thing, index) => (
          <div className="bg-white w-40 h-40 rounded-full flex justify-center flex-col items-center my-2 sm:my-0 sm:mx-2 animate-pulse" key={index}>
            <img src={thing.imgurl} className="w-16 h-16" alt="Tools and Languages" />
            <h1 className="font-bold text-xl">{thing.lang}</h1>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        {tools_data2.map((thing, index) => (
          <div className="bg-white w-40 h-40 rounded-full flex justify-center flex-col items-center my-2 sm:my-0 sm:mx-2 animate-pulse" key={index}>
            <img src={thing.imgurl} className="w-16 h-16" alt="Tools and Languages" />
            <h1 className="font-bold text-xl">{thing.lang}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}
