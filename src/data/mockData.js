export const services = [
  {
    id: 1,
    name: 'Auth Service',
    owner: 'Platform Team',
    status: 'Healthy',
    version: 'v1.4.2',
    environment: 'Production',
    lastDeployed: '2 hours ago',
  },
  {
    id: 2,
    name: 'Payment API',
    owner: 'Backend Team',
    status: 'Degraded',
    version: 'v2.1.0',
    environment: 'Production',
    lastDeployed: '1 day ago',
  },
  {
    id: 3,
    name: 'User Portal',
    owner: 'Frontend Team',
    status: 'Healthy',
    version: 'v3.0.1',
    environment: 'Staging',
    lastDeployed: '4 hours ago',
  },
]

export const deployments = [
  {
    id: 101,
    service: 'Auth Service',
    version: 'v1.4.3',
    environment: 'Staging',
    status: 'Succeeded',
    requestedBy: 'Monik Patel',
  },
  {
    id: 102,
    service: 'Payment API',
    version: 'v2.2.0',
    environment: 'Production',
    status: 'Pending Approval',
    requestedBy: 'Monik Patel',
  },
  {
    id: 103,
    service: 'User Portal',
    version: 'v3.1.0',
    environment: 'Production',
    status: 'Failed',
    requestedBy: 'Alex Morgan',
  },
]
export const logs = [
  {
    id: 1,
    service: 'Auth Service',
    timestamp: '10:31:02',
    message: 'Pulling Docker image...',
    level: 'info',
  },
  {
    id: 2,
    service: 'Auth Service',
    timestamp: '10:31:08',
    message: 'Running database migrations...',
    level: 'info',
  },
  {
    id: 3,
    service: 'Payment API',
    timestamp: '10:31:15',
    message: 'Health check failed on port 8080.',
    level: 'error',
  },
  {
    id: 4,
    service: 'User Portal',
    timestamp: '10:31:20',
    message: 'Deployment completed successfully.',
    level: 'success',
  },
]