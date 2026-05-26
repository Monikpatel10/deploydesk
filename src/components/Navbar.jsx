import { NavLink } from 'react-router-dom'
import { Rocket, Moon, Sun } from 'lucide-react'

function Navbar({ darkMode, setDarkMode }) {
  const links = [
    { path: '/', label: 'Dashboard' },
    { path: '/services', label: 'Services' },
    { path: '/deployments', label: 'Deployments' },
    { path: '/logs', label: 'Logs' },
    { path: '/admin', label: 'Admin' },
  ]

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-xl text-slate-900">
              <Rocket size={24} />
              DeployDesk
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="md:hidden p-2 rounded-lg border border-slate-300 hover:bg-slate-100 transition"
            >
              {darkMode ? (
                <Sun size={18} className="text-slate-700" />
              ) : (
                <Moon size={18} className="text-slate-700" />
              )}
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hidden md:flex p-2 rounded-lg border border-slate-300 hover:bg-slate-100 transition"
            >
              {darkMode ? (
                <Sun size={18} className="text-slate-700" />
              ) : (
                <Moon size={18} className="text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar