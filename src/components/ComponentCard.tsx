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

interface ComponentCardProps {
  component: DataComponent
  onClick: () => void
}

export const ComponentCard: React.FC<ComponentCardProps> = ({ component, onClick }) => {
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

  const getTrendIcon = (trend: string) => {
    const icons = {
      'up': '📈',
      'down': '📉',
      'stable': '➡️'
    }
    return icons[trend as keyof typeof icons] || '➡️'
  }

  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200 p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer card-hover"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 ${component.color} rounded-lg flex items-center justify-center text-white text-xl`}>
            {getIcon(component.icon)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
              {component.title}
            </h3>
            <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(component.status)}`}>
              {getStatusText(component.status)}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {component.description}
      </p>

      {/* Metrics */}
      {component.metrics && (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Score de qualité</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold text-gray-900">
                {component.metrics.score}%
              </span>
              <span className="text-xs">
                {getTrendIcon(component.metrics.trend)}
              </span>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-500 ${
                component.metrics.score >= 90 ? 'bg-green-500' :
                component.metrics.score >= 75 ? 'bg-blue-500' :
                component.metrics.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${component.metrics.score}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Couverture</span>
              <div className="font-semibold text-gray-900">{component.metrics.coverage}%</div>
            </div>
            <div>
              <span className="text-gray-600">Incidents</span>
              <div className={`font-semibold ${component.metrics.incidents === 0 ? 'text-green-600' : 
                component.metrics.incidents <= 2 ? 'text-yellow-600' : 'text-red-600'}`}>
                {component.metrics.incidents}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sub-components count */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">
            {component.subComponents.length} sous-composant{component.subComponents.length > 1 ? 's' : ''}
          </span>
          <span className="text-blue-600 font-medium hover:underline">
            Voir détails →
          </span>
        </div>
      </div>
    </div>
  )
}