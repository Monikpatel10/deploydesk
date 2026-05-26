import { Server } from 'lucide-react'
import StatusBadge from './StatusBadge'

function ServiceCard({ service }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-slate-100 flex items-center justify-center">
            <Server size={22} className="text-slate-700" />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">{service.name}</h2>
            <p className="text-sm text-slate-500">{service.owner}</p>
          </div>
        </div>

        <StatusBadge status={service.status} />
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-500">Version</span>
          <span className="font-medium text-slate-800">{service.version}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Environment</span>
          <span className="font-medium text-slate-800">{service.environment}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Last deployed</span>
          <span className="font-medium text-slate-800">{service.lastDeployed}</span>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard