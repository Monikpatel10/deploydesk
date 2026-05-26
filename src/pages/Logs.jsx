import { useState } from 'react'
import { logs } from '../data/mockData'
import LogEntry from '../components/LogEntry'

function Logs() {
  const [search, setSearch] = useState('')

  const filteredLogs = logs.filter((log) =>
    log.service.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Deployment Logs
        </h1>

        <p className="text-slate-500 mt-2">
          Monitor deployment events and system activity.
        </p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by service..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3"
        />
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        {filteredLogs.length === 0 ? (
          <div className="p-8 text-center text-slate-500">
            No logs found.
          </div>
        ) : (
          filteredLogs.map((log) => (
            <LogEntry key={log.id} log={log} />
          ))
        )}
      </div>
    </div>
  )
}

export default Logs