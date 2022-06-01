export default interface MouseType {
  setMousePosition: React.Dispatch<React.SetStateAction<{
    x: number,
    y: number
  }>>,
  mousePosition: {
    x: number,
    y: number
  },
  cursorVariant: string
}


