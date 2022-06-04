import { MouseEventHandler } from 'react'

type MouseMotion = {
  mouseEnter: MouseEventHandler<HTMLAnchorElement>,
  mouseLeave: MouseEventHandler<HTMLAnchorElement>,
}

export default MouseMotion
