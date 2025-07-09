'use client'

import React from 'react'

interface Activity {
  id: string
  type: string
  description: string
  timestamp: string
  component: string
  severity: 'low' | 'medium' | 'high'
}

interface RecentActivityProps {
  activities: Activity[]
}

export const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  const getSeverityColor = (severity: string) => {
    const colors = {
      'high': 'text-red-600 bg-red-100 border-red-200',
      'medium': 'text-yellow-600 bg-yellow-100 border-yellow-200',
      'low': 'text-green-600 bg-green-100 border-green-200'
    }
    return colors[severity as keyof typeof colors] || colors.low
  }

  const getTypeIcon = (type: string) => {
    const icons = {
      'incident': '⚠️',
      'deployment': '🚀',
      'update': '🔄',
      'alert': '🔔',
      'maintenance': '🔧'
    }
    return icons[type as keyof typeof icons] || '📋'
  }

  const formatRelativeTime = (timestamp: string) => {
    const now = new Date()
    const target = new Date(timestamp)
    const diffInMinutes = Math.floor((now.getTime() - target.getTime()) / (1000 * 60))

    if (diffInMinutes < 60) {
      return `Il y a ${diffInMinutes} min`
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60)
      return `Il y a ${hours}h`
    } else {
      const days = Math.floor(diffInMinutes / 1440)
      return `Il y a ${days}j`
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Activité Récente</h2>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">En temps réel</span>
        </div>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-lg">
                {getTypeIcon(activity.type)}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-semibold text-gray-900 truncate">
                  {activity.component}
                </h4>
                <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getSeverityColor(activity.severity)}`}>
                  {activity.severity === 'high' ? 'Haute' : 
                   activity.severity === 'medium' ? 'Moyenne' : 'Faible'}
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">
                {activity.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {formatRelativeTime(activity.timestamp)}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${
                  activity.type === 'incident' ? 'bg-red-100 text-red-700' :
                  activity.type === 'deployment' ? 'bg-green-100 text-green-700' :
                  activity.type === 'update' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {activity.type === 'incident' ? 'Incident' :
                   activity.type === 'deployment' ? 'Déploiement' :
                   activity.type === 'update' ? 'Mise à jour' : activity.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">
            {activities.length} événement{activities.length > 1 ? 's' : ''} récent{activities.length > 1 ? 's' : ''}
          </span>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            Voir tout →
          </button>
        </div>
      </div>
    </div>
  )
}