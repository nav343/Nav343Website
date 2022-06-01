import React from "react"

export default interface AnimatedSectionType {
  getStyles: (isFadeInViewport: any) => ({
    transition: string,
    opacity: string,
    transform: string
  }),
  children?: React.ReactNode,
  className?: string
}
