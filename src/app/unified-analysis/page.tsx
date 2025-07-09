'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { EnhancedUnifiedAnalyzer } from '@/components/EnhancedUnifiedAnalyzer'

export default function UnifiedAnalysisPage() {
  const router = useRouter()

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
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    🎯 Analyse Unifiée - Data Management
                  </h1>
                  <p className="mt-2 text-lg text-gray-600">
                    Évaluation complète des 10 composants avec déclaration finale
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  📄 Exporter PDF
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                  📊 Générer Rapport
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <EnhancedUnifiedAnalyzer />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">
              Analyse Unifiée - Data Management Maturity
            </h3>
            <p className="text-gray-300 mb-4">
              Évaluation complète et recommandations stratégiques pour l'optimisation de vos données
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 Data Management Analytics</span>
              <span>•</span>
              <span>Version 1.0.0</span>
              <span>•</span>
              <span>Unified Analysis Engine</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}