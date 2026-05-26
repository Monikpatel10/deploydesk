import { services, deployments as initialDeployments } from '../data/mockData'
import { Server, Rocket, AlertTriangle, CheckCircle } from 'lucide-react'
import DeploymentChart from '../components/DeploymentChart'
import useLocalStorage from '../hooks/useLocalStorage'

function Dashboard() {
  const [deployments] = useLocalStorage('deployments', initialDeployments)

  const healthyServices = services.filter(
    (service) => service.status === 'Healthy'
  ).length

  const pendingDeployments = deployments.filter(
    (deployment) => deployment.status === 'Pending Approval'
  ).length

  const failedDeployments = deployments.filter(
    (deployment) => deployment.status === 'Failed'
  ).length

  const metrics = [
    {
      title: 'Total Services',
      value: services.length,
      icon: Server,
    },
    {
      title: 'Healthy Services',
      value: healthyServices,
      icon: CheckCircle,
    },
    {
      title: 'Pending Approvals',
      value: pendingDeployments,
      icon: Rocket,
    },
    {
      title: 'Failed Deployments',
      value: failedDeployments,
      icon: AlertTriangle,
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-2">
          Monitor services, deployment health, and approval activity.
        </p>
      </div>

      <div className="grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon

          return (
            <div
              key={metric.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">{metric.title}</p>
                  <h2 className="text-3xl font-bold text-slate-900 mt-2">
                    {metric.value}
                  </h2>
                </div>

                <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center">
                  <Icon size={24} className="text-slate-700" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <DeploymentChart deployments={deployments} />
    </div>
  )
}

export default Dashboard