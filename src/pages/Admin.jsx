import toast from 'react-hot-toast'
import { deployments as initialDeployments } from '../data/mockData'
import StatusBadge from '../components/StatusBadge'
import useLocalStorage from '../hooks/useLocalStorage'

function Admin() {
  const [deployments, setDeployments] = useLocalStorage(
    'deployments',
    initialDeployments
  )

  function updateDeploymentStatus(id, newStatus) {
    setDeployments((currentDeployments) =>
      currentDeployments.map((deployment) =>
        deployment.id === id
          ? { ...deployment, status: newStatus }
          : deployment
      )
    )

    if (newStatus === 'Succeeded') {
      toast.success('Deployment approved')
    }

    if (newStatus === 'Failed') {
      toast.error('Deployment rejected')
    }
  }

  const pendingDeployments = deployments.filter(
    (deployment) => deployment.status === 'Pending Approval'
  )

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Admin Approval Center
        </h1>

        <p className="text-slate-500 mt-2">
          Review and manage production deployment requests.
        </p>
      </div>

      {pendingDeployments.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-500">
          No pending deployment approvals.
        </div>
      ) : (
        <div className="space-y-6">
          {pendingDeployments.map((deployment) => (
            <div
              key={deployment.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {deployment.service}
                  </h2>

                  <p className="text-slate-500 mt-1">
                    Requested by {deployment.requestedBy}
                  </p>

                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <span className="text-slate-500">Version:</span>{' '}
                      <span className="font-medium">{deployment.version}</span>
                    </p>

                    <p>
                      <span className="text-slate-500">Environment:</span>{' '}
                      <span className="font-medium">
                        {deployment.environment}
                      </span>
                    </p>
                  </div>
                </div>

                <StatusBadge status={deployment.status} />
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() =>
                    updateDeploymentStatus(deployment.id, 'Succeeded')
                  }
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-medium transition"
                >
                  Approve
                </button>

                <button
                  onClick={() =>
                    updateDeploymentStatus(deployment.id, 'Failed')
                  }
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl font-medium transition"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Admin