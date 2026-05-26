import StatusBadge from './StatusBadge'

function DeploymentTable({ deployments, onViewDetails }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="text-left px-6 py-4">Service</th>
              <th className="text-left px-6 py-4">Version</th>
              <th className="text-left px-6 py-4">Environment</th>
              <th className="text-left px-6 py-4">Requested By</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-left px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {deployments.map((deployment) => (
              <tr key={deployment.id} className="border-t border-slate-200">
                <td className="px-6 py-4 font-medium text-slate-900">
                  {deployment.service}
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {deployment.version}
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {deployment.environment}
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {deployment.requestedBy}
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={deployment.status} />
                </td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => onViewDetails(deployment)}
                    className="text-slate-900 font-semibold hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DeploymentTable