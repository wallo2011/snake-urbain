'use client'

import React, { useMemo } from 'react'
import { unifiedAnalyzer } from '@/lib/unified-analyzer'

export const UnifiedAnalyzer: React.FC = () => {
  const report = useMemo(() => {
    return unifiedAnalyzer.generateCompleteReport()
  }, [])

  function performComprehensiveAnalysis(): AnalysisResult {
    // Calcul du score global de maturité
    const totalScore = dataComponents.reduce((sum, component) => {
      return sum + (component.metrics?.score || 0)
    }, 0)
    const overallMaturity = Math.round(totalScore / dataComponents.length)

    // Identification des forces (scores > 85)
    const strengths = dataComponents
      .filter(c => (c.metrics?.score || 0) >= 85)
      .map(c => c.title)

    // Identification des faiblesses (scores < 75)
    const weaknesses = dataComponents
      .filter(c => (c.metrics?.score || 0) < 75)
      .map(c => c.title)

    // Issues critiques (incidents élevés + scores faibles)
    const criticalIssues = dataComponents
      .filter(c => (c.metrics?.incidents || 0) > 5 || (c.metrics?.score || 0) < 70)
      .map(c => `${c.title}: ${c.metrics?.incidents || 0} incidents, Score: ${c.metrics?.score || 0}%`)

    // Niveau de maturité basé sur le score global
    let maturityLevel: AnalysisResult['maturityLevel']
    if (overallMaturity >= 90) maturityLevel = 'Advanced'
    else if (overallMaturity >= 80) maturityLevel = 'Optimized'
    else if (overallMaturity >= 70) maturityLevel = 'Defined'
    else if (overallMaturity >= 60) maturityLevel = 'Managed'
    else maturityLevel = 'Initial'

    // Génération des recommandations
    const recommendations = generateRecommendations()

    // Plan d'action priorisé
    const actionPlan = generateActionPlan()

    // Résumé exécutif
    const executiveSummary = generateExecutiveSummary(overallMaturity, maturityLevel, strengths, weaknesses)

    return {
      overallMaturity,
      strengths,
      weaknesses,
      criticalIssues,
      recommendations,
      executiveSummary,
      actionPlan,
      maturityLevel
    }
  }

  function generateRecommendations(): string[] {
    const recommendations: string[] = []

    // Analyse basée sur les scores
    const qualityComponent = dataComponents.find(c => c.id === '4')
    if (qualityComponent && (qualityComponent.metrics?.score || 0) < 75) {
      recommendations.push('Implémenter un framework de qualité des données robuste avec monitoring temps réel')
    }

    const discoveryComponent = dataComponents.find(c => c.id === '8')
    if (discoveryComponent && (discoveryComponent.metrics?.score || 0) < 75) {
      recommendations.push('Déployer un catalogue de données centralisé pour améliorer la découverte')
    }

    const governanceComponent = dataComponents.find(c => c.id === '3')
    if (governanceComponent && (governanceComponent.metrics?.score || 0) < 80) {
      recommendations.push('Renforcer la gouvernance avec des politiques claires et des rôles définis')
    }

    // Recommandations générales
    recommendations.push('Etablir un centre d\'excellence Data Management')
    recommendations.push('Mettre en place une formation continue pour les équipes')
    recommendations.push('Implémenter un système de métriques et KPIs unifiés')

    return recommendations
  }

  function generateActionPlan(): AnalysisResult['actionPlan'] {
    return [
      {
        priority: 'high',
        action: 'Résoudre les incidents critiques de qualité des données',
        timeline: '30 jours',
        impact: 'Réduction de 80% des problèmes de qualité'
      },
      {
        priority: 'high',
        action: 'Implémenter un catalogue de données centralisé',
        timeline: '60 jours',
        impact: 'Amélioration de 40% de la découverte des données'
      },
      {
        priority: 'medium',
        action: 'Renforcer les politiques de gouvernance',
        timeline: '90 jours',
        impact: 'Conformité réglementaire à 95%'
      },
      {
        priority: 'medium',
        action: 'Optimiser l\'architecture des données',
        timeline: '120 jours',
        impact: 'Performance améliorée de 30%'
      },
      {
        priority: 'low',
        action: 'Formation avancée des équipes',
        timeline: '180 jours',
        impact: 'Augmentation de 25% de la productivité'
      }
    ]
  }

  function generateExecutiveSummary(score: number, level: string, strengths: string[], weaknesses: string[]): string {
    return `
Notre évaluation complète de la maturité en gestion des données révèle un score global de ${score}%, positionnant l'organisation au niveau "${level}".

POINTS FORTS: L'organisation excelle dans ${strengths.length} domaines clés : ${strengths.join(', ')}. Ces composants solides constituent une base robuste pour l'évolution.

AXES D'AMÉLIORATION: ${weaknesses.length} domaines nécessitent une attention prioritaire : ${weaknesses.join(', ')}. Ces lacunes représentent des risques opérationnels et des opportunités d'optimisation.

RECOMMANDATION STRATÉGIQUE: Avec une approche structurée et des investissements ciblés, l'organisation peut atteindre le niveau "Advanced" dans les 12-18 prochains mois, générant une valeur business significative et une avantage concurrentiel durable.
    `.trim()
  }

  const getMaturityColor = (level: string) => {
    const colors = {
      'Advanced': 'text-green-600 bg-green-100',
      'Optimized': 'text-blue-600 bg-blue-100',
      'Defined': 'text-yellow-600 bg-yellow-100',
      'Managed': 'text-orange-600 bg-orange-100',
      'Initial': 'text-red-600 bg-red-100'
    }
    return colors[level as keyof typeof colors] || colors.Managed
  }

  const getPriorityColor = (priority: string) => {
    const colors = {
      'high': 'text-red-600 bg-red-100 border-red-200',
      'medium': 'text-yellow-600 bg-yellow-100 border-yellow-200',
      'low': 'text-green-600 bg-green-100 border-green-200'
    }
    return colors[priority as keyof typeof colors] || colors.medium
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">🎯 Analyse Unifiée de Maturité</h1>
          <p className="text-xl opacity-90">Data Management Comprehensive Assessment</p>
        </div>
      </div>

      {/* Score Global */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke={analysis.overallMaturity >= 80 ? '#10b981' : analysis.overallMaturity >= 60 ? '#f59e0b' : '#ef4444'}
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${(analysis.overallMaturity / 100) * 251.2} 251.2`}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-900">{analysis.overallMaturity}%</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Score Global de Maturité</h2>
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-lg font-semibold ${getMaturityColor(analysis.maturityLevel)}`}>
            Niveau: {analysis.maturityLevel}
          </div>
        </div>
      </div>

      {/* Résumé Exécutif */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          📋 Résumé Exécutif
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {analysis.executiveSummary}
          </p>
        </div>
      </div>

      {/* Tableau de Bord des Composants */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 Analyse par Composant</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataComponents.map((component) => (
            <div
              key={component.id}
              className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border border-gray-200"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm text-gray-900 truncate">
                  {component.title}
                </h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  (component.metrics?.score || 0) >= 85 ? 'bg-green-100 text-green-700' :
                  (component.metrics?.score || 0) >= 75 ? 'bg-blue-100 text-blue-700' :
                  (component.metrics?.score || 0) >= 60 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {component.metrics?.score || 0}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    (component.metrics?.score || 0) >= 85 ? 'bg-green-500' :
                    (component.metrics?.score || 0) >= 75 ? 'bg-blue-500' :
                    (component.metrics?.score || 0) >= 60 ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${component.metrics?.score || 0}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>{component.metrics?.incidents || 0} incidents</span>
                <span>{component.metrics?.coverage || 0}% couverture</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Forces et Faiblesses */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
            💪 Forces Identifiées
          </h2>
          <div className="space-y-3">
            {analysis.strengths.map((strength, index) => (
              <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                <span className="text-green-500 mr-3 text-lg">✅</span>
                <span className="text-green-800 font-medium">{strength}</span>
              </div>
            ))}
            {analysis.strengths.length === 0 && (
              <p className="text-gray-500 italic">Aucune force majeure identifiée (score ≥ 85%)</p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
            ⚠️ Points d'Amélioration
          </h2>
          <div className="space-y-3">
            {analysis.weaknesses.map((weakness, index) => (
              <div key={index} className="flex items-center p-3 bg-red-50 rounded-lg border border-red-200">
                <span className="text-red-500 mr-3 text-lg">🔴</span>
                <span className="text-red-800 font-medium">{weakness}</span>
              </div>
            ))}
            {analysis.weaknesses.length === 0 && (
              <p className="text-gray-500 italic">Aucune faiblesse critique identifiée</p>
            )}
          </div>
        </div>
      </div>

      {/* Issues Critiques */}
      {analysis.criticalIssues.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
            🚨 Issues Critiques
          </h2>
          <div className="space-y-3">
            {analysis.criticalIssues.map((issue, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl mt-1">⚡</span>
                  <div>
                    <p className="text-red-800 font-medium">{issue}</p>
                    <p className="text-red-600 text-sm mt-1">Action immédiate requise</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommandations */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
          🎯 Recommandations Stratégiques
        </h2>
        <div className="space-y-4">
          {analysis.recommendations.map((recommendation, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg mt-1">💡</span>
                <p className="text-blue-800 font-medium">{recommendation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plan d'Action */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-6 flex items-center">
          📅 Plan d'Action Priorisé
        </h2>
        <div className="space-y-4">
          {analysis.actionPlan.map((action, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{action.action}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(action.priority)}`}>
                  {action.priority === 'high' ? 'Haute' : action.priority === 'medium' ? 'Moyenne' : 'Faible'}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Timeline: </span>
                  <span className="text-gray-600">{action.timeline}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Impact attendu: </span>
                  <span className="text-gray-600">{action.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Déclaration Finale */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">🏆 Déclaration Finale</h2>
        <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
          <p className="text-xl leading-relaxed text-center">
            Avec un score de maturité de <strong>{analysis.overallMaturity}%</strong> et un niveau <strong>"{analysis.maturityLevel}"</strong>, 
            votre organisation possède une base solide en gestion des données. 
            L'implémentation du plan d'action recommandé permettra d'atteindre l'excellence opérationnelle 
            et de générer une valeur business significative dans les prochains trimestres.
          </p>
          <div className="text-center mt-6">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full">
              <span className="text-2xl mr-2">🚀</span>
              <span className="font-bold text-lg">Prêt pour la Transformation Digitale</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}