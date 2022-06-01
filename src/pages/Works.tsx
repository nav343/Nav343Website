import { motion } from "framer-motion"

export default function Works() {
  document.title = 'Nav343 - Works'
  return (
    <motion.div initial={{ width: 0 }} animate={{ width: '100vw' }} exit={{ width: 0 }} className="h-screen w-full bg-slate-900 flex item-center justify-center">
      <h1>Works</h1>
    </motion.div>
  )
}
