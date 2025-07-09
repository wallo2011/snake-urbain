'use client'

import React from 'react'

interface DataComponent {
  id: string
  title: string
  description: string
  icon: string
  color: string
  status: 'excellent' | 'good' | 'needs-improvement' | 'critical'
  metrics?: {
    score: number
    coverage: number
    incidents: number
    trend: 'up' | 'down' | 'stable'
    lastUpdated: string
  }
  subComponents: Array<{
    id: string
    name: string
    description: string
    implementation: string
    tools: string[]
    bestPractices: string[]
  }>
}

interface ComponentModalProps {
  component: DataComponent
  isOpen: boolean
  onClose: () => void
}

export const ComponentModal: React.FC<ComponentModalProps> = ({ component, isOpen, onClose }) => {
  if (!isOpen) return null

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: string } = {
      'database': '🗄️',
      'shield': '🛡️',
      'users': '👥',
      'check-circle': '✅',
      'settings': '⚙️',
      'layers': '📚',
      'bar-chart': '📊',
      'search': '🔍',
      'hard-drive': '💾',
      'cpu': '🖥️'
    }
    return icons[iconName] || '📊'
  }

  const getStatusColor = (status: string) => {
    const colors = {
      'excellent': 'text-green-600 bg-green-100 border-green-200',
      'good': 'text-blue-600 bg-blue-100 border-blue-200',
      'needs-improvement': 'text-yellow-600 bg-yellow-100 border-yellow-200',
      'critical': 'text-red-600 bg-red-100 border-red-200'
    }
    return colors[status as keyof typeof colors] || colors.good
  }

  const getStatusText = (status: string) => {
    const texts = {
      'excellent': 'Excellent',
      'good': 'Bon',
      'needs-improvement': 'À améliorer',
      'critical': 'Critique'
    }
    return texts[status as keyof typeof texts] || 'Bon'
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 ${component.color} rounded-lg flex items-center justify-center text-white text-2xl`}>
                  {getIcon(component.icon)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {component.title}
                  </h2>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(component.status)}`}>
                    {getStatusText(component.status)}
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6 max-h-96 overflow-y-auto custom-scrollbar">
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600">{component.description}</p>
            </div>

            {/* Metrics */}
            {component.metrics && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Métriques de Performance</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">{component.metrics.score}%</div>
                    <div className="text-sm text-blue-700">Score de Qualité</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600">{component.metrics.coverage}%</div>
                    <div className="text-sm text-green-700">Couverture</div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <div className="text-2xl font-bold text-yellow-600">{component.metrics.incidents}</div>
                    <div className="text-sm text-yellow-700">Incidents</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600">
                      {component.metrics.trend === 'up' ? '↗️' : component.metrics.trend === 'down' ? '↘️' : '➡️'}
                    </div>
                    <div className="text-sm text-purple-700">Tendance</div>
                  </div>
                </div>
              </div>
            )}

            {/* Sub-components */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Sous-composants ({component.subComponents.length})
              </h3>
              <div className="space-y-4">
                {component.subComponents.map((subComponent) => (
                  <div key={subComponent.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="text-md font-semibold text-gray-900 mb-2">
                      {subComponent.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {subComponent.description}
                    </p>
                    
                    <div className="mb-3">
                      <div className="text-sm font-medium text-gray-700 mb-1">Implémentation</div>
                      <div className="text-sm text-gray-600 bg-white p-2 rounded border">
                        {subComponent.implementation}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Outils recommandés</div>
                        <div className="flex flex-wrap gap-1">
                          {subComponent.tools.map((tool, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Bonnes pratiques</div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {subComponent.bestPractices.map((practice, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              {practice}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Dernière mise à jour: {component.metrics?.lastUpdated || 'N/A'}
              </div>
              <button
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}