'use client'

import React, { useState } from 'react'
import { ComponentCard } from './ComponentCard'
import { ComponentModal } from './ComponentModal'

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

interface ComponentGridProps {
  components: DataComponent[]
}

export const ComponentGrid: React.FC<ComponentGridProps> = ({ components }) => {
  const [selectedComponent, setSelectedComponent] = useState<DataComponent | null>(null)

  const getStatusBadge = (status: string) => {
    const badges = {
      'excellent': 'bg-green-100 text-green-800 border-green-200',
      'good': 'bg-blue-100 text-blue-800 border-blue-200',
      'needs-improvement': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'critical': 'bg-red-100 text-red-800 border-red-200'
    }
    return badges[status as keyof typeof badges] || badges.good
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
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Composants de Gestion des Données
        </h2>
        <div className="flex space-x-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {components.filter(c => c.status === 'excellent').length} Excellent
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {components.filter(c => c.status === 'good').length} Bon
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            {components.filter(c => c.status === 'needs-improvement').length} À améliorer
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {components.map((component) => (
          <ComponentCard
            key={component.id}
            component={component}
            onClick={() => setSelectedComponent(component)}
          />
        ))}
      </div>

      {/* Modal Component */}
      {selectedComponent && (
        <ComponentModal
          component={selectedComponent}
          isOpen={!!selectedComponent}
          onClose={() => setSelectedComponent(null)}
        />
      )}
    </div>
  )
}