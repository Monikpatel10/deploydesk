function LogEntry({ log }) {
  const levelStyles = {
    info: 'text-blue-600 bg-blue-50',
    error: 'text-red-600 bg-red-50',
    success: 'text-green-600 bg-green-50',
  }

  return (
    <div className="border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span
            className={`px-2 py-1 rounded-md text-xs font-semibold ${
              levelStyles[log.level]
            }`}
          >
            {log.level.toUpperCase()}
          </span>

          <span className="font-medium text-slate-900">
            {log.service}
          </span>
        </div>

        <span className="text-sm text-slate-500">
          {log.timestamp}
        </span>
      </div>

      <p className="text-slate-700 text-sm">{log.message}</p>
    </div>
  )
}

export default LogEntry