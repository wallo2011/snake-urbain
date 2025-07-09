'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { dataComponents } from '@/lib/data'

interface ComponentDetailPageProps {
  params: {
    id: string
  }
}

export default function ComponentDetailPage({ params }: ComponentDetailPageProps) {
  const router = useRouter()
  const component = dataComponents.find(c => c.id === params.id)

  if (!component) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Composant non trouvé</h1>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => router.push('/')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className={`w-16 h-16 ${component.color} rounded-lg flex items-center justify-center text-white text-2xl`}>
                  {getIcon(component.icon)}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {component.title}
                  </h1>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(component.status)}`}>
                    {getStatusText(component.status)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vue d'ensemble</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {component.description}
              </p>
            </div>

            {/* Sub-components */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Sous-composants ({component.subComponents.length})
              </h2>
              <div className="space-y-6">
                {component.subComponents.map((subComponent) => (
                  <div key={subComponent.id} className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-6 border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {subComponent.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {subComponent.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Implémentation</h4>
                      <div className="text-sm text-gray-600 bg-white p-3 rounded border">
                        {subComponent.implementation}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Outils recommandés</h4>
                        <div className="flex flex-wrap gap-2">
                          {subComponent.tools.map((tool, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Bonnes pratiques</h4>
                        <ul className="space-y-2">
                          {subComponent.bestPractices.map((practice, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <span className="text-green-500 mr-2 mt-0.5">✓</span>
                              <span>{practice}</span>
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

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Metrics */}
            {component.metrics && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Métriques</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-gray-700">Score de Qualité</span>
                    <span className="text-xl font-bold text-blue-600">{component.metrics.score}%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-700">Couverture</span>
                    <span className="text-xl font-bold text-green-600">{component.metrics.coverage}%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium text-gray-700">Incidents</span>
                    <span className="text-xl font-bold text-yellow-600">{component.metrics.incidents}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium text-gray-700">Tendance</span>
                    <span className="text-xl">
                      {component.metrics.trend === 'up' ? '📈' : 
                       component.metrics.trend === 'down' ? '📉' : '➡️'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Actions Rapides</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Générer Rapport
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Exporter Données
                </button>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Planifier Audit
                </button>
              </div>
            </div>

            {/* Last Updated */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informations</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Dernière mise à jour</span>
                  <span className="font-medium">{component.metrics?.lastUpdated || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-composants</span>
                  <span className="font-medium">{component.subComponents.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Statut</span>
                  <span className="font-medium">{getStatusText(component.status)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}