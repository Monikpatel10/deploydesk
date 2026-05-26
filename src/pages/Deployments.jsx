import { useState } from 'react'
import { deployments as initialDeployments } from '../data/mockData'
import DeploymentTable from '../components/DeploymentTable'
import DeploymentForm from '../components/DeploymentForm'
import DeploymentDetailsModal from '../components/DeploymentDetailsModal'
import useLocalStorage from '../hooks/useLocalStorage'

function Deployments() {
  const [deployments, setDeployments] = useLocalStorage(
    'deployments',
    initialDeployments
  )

  const [environmentFilter, setEnvironmentFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')
  const [selectedDeployment, setSelectedDeployment] = useState(null)

  function handleCreateDeployment(newDeployment) {
    setDeployments((currentDeployments) => [
      newDeployment,
      ...currentDeployments,
    ])
  }

  const filteredDeployments = deployments.filter((deployment) => {
    const matchesEnvironment =
      environmentFilter === 'All' || deployment.environment === environmentFilter

    const matchesStatus =
      statusFilter === 'All' || deployment.status === statusFilter

    return matchesEnvironment && matchesStatus
  })

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Deployments</h1>
        <p className="text-slate-500 mt-2">
          Request and track software deployments across environments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DeploymentForm onCreateDeployment={handleCreateDeployment} />

        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900">
              Deployment Activity
            </h2>

            <div className="flex gap-3">
              <select
                value={environmentFilter}
                onChange={(event) => setEnvironmentFilter(event.target.value)}
                className="bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm"
              >
                <option>All</option>
                <option>Staging</option>
                <option>Production</option>
              </select>

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm"
              >
                <option>All</option>
                <option>Pending Approval</option>
                <option>Queued</option>
                <option>Succeeded</option>
                <option>Failed</option>
              </select>
            </div>
          </div>

          <DeploymentTable
            deployments={filteredDeployments}
            onViewDetails={setSelectedDeployment}
          />
        </div>
      </div>

      <DeploymentDetailsModal
        deployment={selectedDeployment}
        onClose={() => setSelectedDeployment(null)}
      />
    </div>
  )
}

export default Deployments