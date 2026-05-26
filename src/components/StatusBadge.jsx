function StatusBadge({ status }) {
  const styles = {
    Healthy: 'bg-green-100 text-green-700',
    Degraded: 'bg-yellow-100 text-yellow-700',
    Down: 'bg-red-100 text-red-700',
    Succeeded: 'bg-green-100 text-green-700',
    Failed: 'bg-red-100 text-red-700',
    Queued: 'bg-purple-100 text-purple-700',
    'Pending Approval': 'bg-blue-100 text-blue-700',
  }

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        styles[status] || 'bg-slate-100 text-slate-700'
      }`}
    >
      {status}
    </span>
  )
}

export default StatusBadge