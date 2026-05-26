import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Dashboard from './pages/Dashboard'
import Services from './pages/Services'
import Deployments from './pages/Deployments'
import Logs from './pages/Logs'
import Admin from './pages/Admin'
import Navbar from './components/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Toaster position="top-right" />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/deployments" element={<Deployments />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  )
}

export default App