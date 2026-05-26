import { X } from 'lucide-react'
import StatusBadge from './StatusBadge'

function DeploymentDetailsModal({ deployment, onClose }) {
  if (!deployment) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {deployment.service}
            </h2>
            <p className="text-slate-500 mt-1">
              Deployment details and release metadata
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Version</span>
            <span className="font-medium text-slate-900">
              {deployment.version}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Environment</span>
            <span className="font-medium text-slate-900">
              {deployment.environment}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Requested By</span>
            <span className="font-medium text-slate-900">
              {deployment.requestedBy}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-500">Status</span>
            <StatusBadge status={deployment.status} />
          </div>
        </div>

        <div className="mt-6 bg-slate-50 rounded-xl p-4">
          <h3 className="font-semibold text-slate-900 mb-2">Release Summary</h3>
          <p className="text-sm text-slate-600">
            This deployment request simulates a release workflow across staging
            and production environments with approval tracking.
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-slate-900 text-white rounded-xl px-4 py-3 font-semibold hover:bg-slate-800 transition"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default DeploymentDetailsModal