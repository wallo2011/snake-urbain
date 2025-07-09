'use client'

import React from 'react'
import { DashboardOverview } from '@/components/DashboardOverview'
import { ComponentGrid } from '@/components/ComponentGrid'
import { RecentActivity } from '@/components/RecentActivity'
import { dashboardData } from '@/lib/data'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Analyse des Données - Gestion Moderne
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Les 10 composants essentiels de la gestion des données
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Dashboard Overview */}
          <DashboardOverview data={dashboardData.overview} />

          {/* Unified Analysis Button */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">🎯 Analyse Unifiée Complète</h2>
                <p className="text-lg opacity-90">
                  Évaluation globale des 10 composants avec déclaration finale et plan d'action
                </p>
              </div>
              <a
                href="/unified-analysis"
                className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-colors inline-flex items-center"
              >
                <span className="mr-2">🚀</span>
                Lancer l'Analyse
              </a>
            </div>
          </div>

          {/* Components Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ComponentGrid components={dashboardData.components} />
            </div>
            <div className="lg:col-span-1">
              <RecentActivity activities={dashboardData.recentActivity} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">
              Application d'Analyse des Données
            </h3>
            <p className="text-gray-300 mb-4">
              Une plateforme complète pour analyser et optimiser vos composants de gestion des données
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 Data Management Analytics</span>
              <span>•</span>
              <span>Version 1.0.0</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}