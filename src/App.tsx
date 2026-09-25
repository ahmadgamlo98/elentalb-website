import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import PharmacovigilancePage from './pages/PharmacovigilancePage'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pharmacovigilance" element={<PharmacovigilancePage />} />
      </Routes>
    </>
  )
}

export default App
