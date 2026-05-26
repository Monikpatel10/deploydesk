import { useState } from 'react'
import { services } from '../data/mockData'

function DeploymentForm({ onCreateDeployment }) {
  const [formData, setFormData] = useState({
    service: '',
    environment: '',
    version: '',
    releaseNotes: '',
    rollbackPlan: '',
  })

  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!formData.service || !formData.environment || !formData.version || !formData.releaseNotes) {
      setError('Please fill out all required fields.')
      return
    }

    if (!/^v\d+\.\d+\.\d+$/.test(formData.version)) {
      setError('Version must follow format like v1.2.3')
      return
    }

    if (formData.environment === 'Production' && !formData.rollbackPlan) {
      setError('Production deployments require a rollback plan.')
      return
    }

    const newDeployment = {
      id: Date.now(),
      service: formData.service,
      environment: formData.environment,
      version: formData.version,
      status: formData.environment === 'Production' ? 'Pending Approval' : 'Queued',
      requestedBy: 'Monik Patel',
    }

    onCreateDeployment(newDeployment)

    setFormData({
      service: '',
      environment: '',
      version: '',
      releaseNotes: '',
      rollbackPlan: '',
    })

    setError('')
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Request Deployment</h2>

      {error && (
        <div className="mb-4 rounded-xl bg-red-50 text-red-700 px-4 py-3 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-xl px-4 py-2"
        >
          <option value="">Select service</option>
          {services.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>

        <select
          name="environment"
          value={formData.environment}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-xl px-4 py-2"
        >
          <option value="">Select environment</option>
          <option>Staging</option>
          <option>Production</option>
        </select>

        <input
          name="version"
          value={formData.version}
          onChange={handleChange}
          placeholder="Version, e.g. v1.2.3"
          className="w-full border border-slate-300 rounded-xl px-4 py-2"
        />

        <textarea
          name="releaseNotes"
          value={formData.releaseNotes}
          onChange={handleChange}
          placeholder="Release notes"
          className="w-full border border-slate-300 rounded-xl px-4 py-2 min-h-24"
        />

        <textarea
          name="rollbackPlan"
          value={formData.rollbackPlan}
          onChange={handleChange}
          placeholder="Rollback plan required for production"
          className="w-full border border-slate-300 rounded-xl px-4 py-2 min-h-24"
        />

        <button
          type="submit"
          className="w-full bg-slate-900 text-white rounded-xl px-4 py-3 font-semibold hover:bg-slate-800 transition"
        >
          Submit Deployment Request
        </button>
      </form>
    </div>
  )
}

export default DeploymentForm