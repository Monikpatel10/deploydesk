import { useState } from 'react'
import { services } from '../data/mockData'
import ServiceCard from '../components/ServiceCard'

function Services() {
  const [statusFilter, setStatusFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filteredServices = services.filter((service) => {
    const matchesStatus =
      statusFilter === 'All' || service.status === statusFilter

    const matchesSearch =
      service.name.toLowerCase().includes(search.toLowerCase()) ||
      service.owner.toLowerCase().includes(search.toLowerCase())

    return matchesStatus && matchesSearch
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Services</h1>
          <p className="text-slate-500 mt-2">
            View service health, ownership, and deployment metadata.
          </p>
        </div>

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          className="bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm"
        >
          <option>All</option>
          <option>Healthy</option>
          <option>Degraded</option>
          <option>Down</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="Search services or owners..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 mb-6"
      />

      {filteredServices.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-500">
          No services found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Services