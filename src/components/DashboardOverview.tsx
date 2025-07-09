'use client'

import React from 'react'

interface OverviewData {
  totalComponents: number
  healthScore: number
  activeProjects: number
  dataVolume: string
}

interface DashboardOverviewProps {
  data: OverviewData
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({ data }) => {
  const metrics = [
    {
      title: 'Composants Actifs',
      value: data.totalComponents,
      suffix: '/10',
      color: 'bg-blue-500',
      icon: '🔧'
    },
    {
      title: 'Score de Santé Global',
      value: data.healthScore,
      suffix: '%',
      color: 'bg-green-500',
      icon: '💚'
    },
    {
      title: 'Projets Actifs',
      value: data.activeProjects,
      suffix: '',
      color: 'bg-purple-500',
      icon: '📊'
    },
    {
      title: 'Volume de Données',
      value: data.dataVolume,
      suffix: '',
      color: 'bg-orange-500',
      icon: '💾'
    }
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Vue d'ensemble</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {metric.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {typeof metric.value === 'number' ? metric.value : metric.value}
                  <span className="text-lg text-gray-500 ml-1">
                    {metric.suffix}
                  </span>
                </p>
              </div>
              <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                {metric.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Health Score Visualization */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Répartition du Score de Santé
        </h3>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Score Global</span>
              <span>{data.healthScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${data.healthScore}%` }}
              ></div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-green-600">
              {data.healthScore >= 80 ? 'Excellent' : 
               data.healthScore >= 70 ? 'Bon' : 
               data.healthScore >= 60 ? 'Moyen' : 'Critique'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}