import { useEffect, useState } from "react";

export function useIsInViewport(ref: any) {
  const [inViewport, setInViewport] = useState(false)
  useEffect(() => {
    function ScrollHandler() {
      const { bottom } = ref.current.getBoundingClientRect()
      return setInViewport(window.innerHeight - bottom > 20)
    }
    window.addEventListener("scroll", ScrollHandler)
    return () => window.removeEventListener("scroll", ScrollHandler)
  }, [ref, inViewport])
  return inViewport
}
