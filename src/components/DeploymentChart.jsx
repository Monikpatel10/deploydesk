import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function DeploymentChart({ deployments }) {
  const chartData = [
    {
      status: 'Succeeded',
      count: deployments.filter((item) => item.status === 'Succeeded').length,
    },
    {
      status: 'Pending',
      count: deployments.filter((item) => item.status === 'Pending Approval').length,
    },
    {
      status: 'Queued',
      count: deployments.filter((item) => item.status === 'Queued').length,
    },
    {
      status: 'Failed',
      count: deployments.filter((item) => item.status === 'Failed').length,
    },
  ]

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mt-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">
          Deployment Status Overview
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Breakdown of deployment activity by current status.
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="status" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DeploymentChart