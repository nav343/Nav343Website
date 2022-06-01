import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-screen w-full bg-slate-900 flex item-center justify-center">
      <h1>About</h1>
    </motion.div>
  )
}
