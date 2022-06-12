import Avatar from '../../assets/avatar.png'
import MouseMotion2 from '../../types/MouseMotion2'

{ /* Old Color Theme:
     * bg-gradient-to-r from-purple-500 to-pink-500 */ }

export default function About({ mouseEnter, mouseLeave }: MouseMotion2) {
  return (
    <div className='bg-blue-500'>
      <div className="h-fit w-full bg-gray-900">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill" fill="#3488F2"></path>
        </svg>

        <div className="flex items-center justify-center mt-12 flex-col">
          <img alt="About Me" src={Avatar} className="rounded-full w-36 h-36" />
          <h1 className="text-white font-bold text-4xl my-5" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>About Me</h1>
          <p className="text-white text-center text-xl mx-5 sm:mx-24 mb-20" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Hi there, I am Nav343, an early programmer (currently 14), I mostly use Python and Javascript. The first language that I learnt was Python. I have made over 10 projects individually as well as in team (I mostly like making it on my own :D).</p>
        </div>
      </div>

      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" fill='#111827'></path>
      </svg>
    </div>
  )
}
