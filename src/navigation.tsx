import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Error from './pages/Error';
import { AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  )
}
