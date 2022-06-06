import { MouseEventHandler } from "react";

export default interface AMixType {
  setMousePosition: React.Dispatch<React.SetStateAction<{ x: number, y: number }>>,
  cursorVariant: string,
  mousePosition: { x: number, y: number },
  mouseEnter: MouseEventHandler<HTMLHeadingElement>,
  mouseLeave: MouseEventHandler<HTMLHeadingElement>,
}
