'use client'

import React from 'react'

// Utilisation de données statiques pour éviter les problèmes d'import
const mockAnalysisReport = {
  globalMaturity: {
    score: 81,
    level: 'Optimized' as const,
    category: 'Good' as const
  },
  executiveSummary: `
ÉVALUATION STRATÉGIQUE DE MATURITÉ DATA MANAGEMENT

Score Global: 81% - Niveau "Optimized"

DIAGNOSTIC:
• 3 composants excellents constituent les fondations solides de l'organisation
• 2 composants critiques nécessitent une intervention immédiate
• Maturité globale positionnée au niveau "Optimized" avec un potentiel d'évolution significatif

IMPACT BUSINESS:
L'organisation présente une base solide pour exploiter ses données comme actif stratégique. 
Les investissements ciblés généreront un ROI mesurable dans les 12-18 prochains mois.

POSITIONNEMENT CONCURRENTIEL:
Niveau "Optimized" place l'organisation parmi les leaders de son secteur en matière de maturité data.
  `.trim(),
  componentAnalyses: [
    {
      name: 'Ingénierie des données',
      score: 85,
      maturity: { level: 'Optimized', category: 'Good' },
      priority: 'Medium'
    },
    {
      name: 'Sécurité des données',
      score: 92,
      maturity: { level: 'Advanced', category: 'Excellent' },
      priority: 'Low'
    },
    {
      name: 'Gouvernance des données',
      score: 78,
      maturity: { level: 'Defined', category: 'Good' },
      priority: 'Medium'
    },
    {
      name: 'Qualité des données',
      score: 72,
      maturity: { level: 'Defined', category: 'Needs Improvement' },
      priority: 'High'
    },
    {
      name: 'DataOps',
      score: 88,
      maturity: { level: 'Optimized', category: 'Good' },
      priority: 'Low'
    },
    {
      name: 'Architecture des données',
      score: 90,
      maturity: { level: 'Advanced', category: 'Excellent' },
      priority: 'Low'
    },
    {
      name: 'Business Intelligence',
      score: 82,
      maturity: { level: 'Optimized', category: 'Good' },
      priority: 'Medium'
    },
    {
      name: 'Découverte des données',
      score: 68,
      maturity: { level: 'Managed', category: 'Needs Improvement' },
      priority: 'High'
    },
    {
      name: 'Stockage des données',
      score: 84,
      maturity: { level: 'Optimized', category: 'Good' },
      priority: 'Medium'
    },
    {
      name: 'Ingénierie des fonctionnalités',
      score: 76,
      maturity: { level: 'Defined', category: 'Good' },
      priority: 'Medium'
    }
  ],
  strategicRecommendations: [
    'URGENCE: Résoudre immédiatement les 2 composants critiques: Qualité des données, Découverte des données',
    'Implémenter un framework de Data Quality Management avec monitoring temps réel et alertes proactives',
    'Déployer un catalogue de données centralisé pour améliorer la découverte',
    'Créer un Centre d\'Excellence Data avec équipes transversales',
    'Déployer une plateforme data moderne (Cloud-native, Self-service)',
    'Établir un programme de formation continue et certification des équipes'
  ],
  actionPlan: [
    {
      phase: 1,
      title: 'Stabilisation et Sécurisation (0-3 mois)',
      duration: '90 jours',
      actions: [
        'Résolution des incidents critiques de qualité des données',
        'Mise en place des contrôles de sécurité essentiels',
        'Établissement des processus de gouvernance de base'
      ],
      expectedOutcomes: [
        'Réduction de 80% des incidents critiques',
        'Conformité sécurité à 95%',
        'Politiques data opérationnelles'
      ],
      budget: '150K-300K €'
    },
    {
      phase: 2,
      title: 'Optimisation et Automatisation (3-9 mois)',
      duration: '180 jours',
      actions: [
        'Déploiement du catalogue de données et lignage',
        'Automatisation des pipelines de qualité',
        'Implémentation de l\'architecture moderne'
      ],
      expectedOutcomes: [
        'Découverte des données à 90%',
        'Qualité automatisée sur 80% des flux',
        'Performance améliorée de 40%'
      ],
      budget: '300K-500K €'
    },
    {
      phase: 3,
      title: 'Innovation et Excellence (9-18 mois)',
      duration: '270 jours',
      actions: [
        'Déploiement de l\'IA et analytics avancés',
        'Mise en place du self-service data',
        'Certification et formation avancée'
      ],
      expectedOutcomes: [
        'Modèles ML en production',
        'Autonomie utilisateurs à 70%',
        'Maturité niveau "Advanced"'
      ],
      budget: '200K-400K €'
    }
  ],
  riskAssessment: {
    criticalRisks: [
      'Problèmes de qualité - Impact sur les décisions business',
      'Gouvernance insuffisante - Risque de non-conformité'
    ],
    mitigationStrategies: [
      'Mise en place d\'un monitoring 24/7 avec alertes automatiques',
      'Plan de continuité d\'activité et procédures de backup',
      'Formation intensive des équipes sur les bonnes pratiques',
      'Audits sécurité trimestriels par des experts externes'
    ]
  },
  roiProjection: {
    year1: '180% - Efficacité opérationnelle',
    year2: '270% - Innovation produits/services',
    year3: '360% - Avantage concurrentiel',
    breakeven: '12-18 mois'
  },
  conclusion: `
🎯 DÉCLARATION FINALE STRATÉGIQUE

Avec un score de maturité global de 81% et un niveau "Optimized", 
l'organisation dispose d'une base solide pour sa transformation data-driven.

✅ FORCES: 2 composants d'excellence constituent un avantage concurrentiel durable
⚠️ DÉFIS: 3 domaines prioritaires représentent des opportunités d'amélioration significatives

🚀 POTENTIEL DE TRANSFORMATION:
L'implémentation du plan d'action recommandé permettra d'atteindre le niveau "Advanced" dans les 18 prochains mois, 
générant une valeur business estimée à 3-5x l'investissement initial.

🏆 RECOMMANDATION EXÉCUTIVE:
APPROUVATION recommandée pour le programme de transformation data avec priorité haute sur les composants critiques. 
Le retour sur investissement attendu et l'avantage concurrentiel justifient pleinement l'engagement des ressources nécessaires.

📈 PROCHAINES ÉTAPES:
1. Validation du plan d'action par le comité de direction
2. Allocation des ressources pour la Phase 1 (stabilisation)
3. Nomination du sponsor exécutif et du chef de projet transformation
4. Lancement du programme dans les 30 jours suivants
  `.trim()
}

export const EnhancedUnifiedAnalyzer: React.FC = () => {
  const report = mockAnalysisReport

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
      'Critical': 'text-red-600 bg-red-100 border-red-200',
      'High': 'text-red-600 bg-red-100 border-red-200',
      'Medium': 'text-yellow-600 bg-yellow-100 border-yellow-200',
      'Low': 'text-green-600 bg-green-100 border-green-200'
    }
    return colors[priority as keyof typeof colors] || colors.Medium
  }

  const excellentComponents = report.componentAnalyses.filter(c => c.maturity.category === 'Excellent')
  const criticalComponents = report.componentAnalyses.filter(c => c.priority === 'High' || c.priority === 'Critical')

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">🎯 Analyse Unifiée de Maturité</h1>
          <p className="text-xl opacity-90">Data Management Comprehensive Assessment</p>
          <div className="mt-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-lg font-semibold">
              Les 10 composants réunis en une analyse complète avec déclaration finale
            </p>
          </div>
        </div>
      </div>

      {/* Score Global */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="relative w-40 h-40 mx-auto mb-6">
            <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#e5e7eb"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke={report.globalMaturity.score >= 80 ? '#10b981' : report.globalMaturity.score >= 60 ? '#f59e0b' : '#ef4444'}
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${(report.globalMaturity.score / 100) * 251.2} 251.2`}
                className="transition-all duration-2000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-4xl font-bold text-gray-900">{report.globalMaturity.score}%</span>
              <span className="text-sm text-gray-600 mt-1">Maturité Globale</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Évaluation Complète des 10 Composants</h2>
          <div className={`inline-flex items-center px-6 py-3 rounded-full text-xl font-bold ${getMaturityColor(report.globalMaturity.level)}`}>
            Niveau: {report.globalMaturity.level}
          </div>
        </div>
      </div>

      {/* Résumé Exécutif */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          📋 Résumé Exécutif
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
            {report.executiveSummary}
          </p>
        </div>
      </div>

      {/* Tableau de Bord Unifié des Composants */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">📊 Dashboard Unifié - 10 Composants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {report.componentAnalyses.map((component, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 card-hover"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg text-gray-900">
                  {index + 1}. {component.name}
                </h3>
                <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                  component.score >= 85 ? 'bg-green-100 text-green-700' :
                  component.score >= 75 ? 'bg-blue-100 text-blue-700' :
                  component.score >= 60 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {component.score}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                <div
                  className={`h-3 rounded-full transition-all duration-1000 ${
                    component.score >= 85 ? 'bg-green-500' :
                    component.score >= 75 ? 'bg-blue-500' :
                    component.score >= 60 ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${component.score}%` }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <span className={`text-xs px-2 py-1 rounded-full font-medium border ${getMaturityColor(component.maturity.level)}`}>
                  {component.maturity.level}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium border ${getPriorityColor(component.priority)}`}>
                  Priorité: {component.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Forces et Défis Unifiés */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
            💪 Forces Stratégiques
          </h2>
          <div className="space-y-4">
            {excellentComponents.map((component, index) => (
              <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="text-green-500 mr-3 text-xl">🏆</span>
                <div>
                  <span className="text-green-800 font-bold text-lg">{component.name}</span>
                  <div className="text-green-700 text-sm">{component.score}% - Excellence confirmée</div>
                </div>
              </div>
            ))}
            <div className="bg-green-100 p-4 rounded-lg border border-green-300">
              <p className="text-green-800 font-medium">
                🎯 Ces {excellentComponents.length} composants d'excellence constituent votre avantage concurrentiel
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
            ⚡ Défis Prioritaires
          </h2>
          <div className="space-y-4">
            {criticalComponents.map((component, index) => (
              <div key={index} className="flex items-center p-4 bg-red-50 rounded-lg border border-red-200">
                <span className="text-red-500 mr-3 text-xl">🚨</span>
                <div>
                  <span className="text-red-800 font-bold text-lg">{component.name}</span>
                  <div className="text-red-700 text-sm">{component.score}% - Action immédiate requise</div>
                </div>
              </div>
            ))}
            <div className="bg-red-100 p-4 rounded-lg border border-red-300">
              <p className="text-red-800 font-medium">
                ⚠️ Ces {criticalComponents.length} composants nécessitent une intervention prioritaire
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommandations Stratégiques Unifiées */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
          🎯 Plan Stratégique Unifié
        </h2>
        <div className="space-y-4">
          {report.strategicRecommendations.map((recommendation, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg mt-1 font-bold">{index + 1}.</span>
                <p className="text-blue-800 font-medium text-lg">{recommendation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plan d'Action Unifié en 3 Phases */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-purple-600 mb-6 flex items-center">
          📅 Roadmap de Transformation
        </h2>
        <div className="space-y-6">
          {report.actionPlan.map((phase, index) => (
            <div key={index} className="border-2 border-purple-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-purple-800">
                  Phase {phase.phase}: {phase.title}
                </h3>
                <div className="text-right">
                  <div className="text-purple-600 font-bold">{phase.duration}</div>
                  <div className="text-purple-500 text-sm">{phase.budget}</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">🎯 Actions Clés</h4>
                  <ul className="space-y-2">
                    {phase.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start text-sm">
                        <span className="text-purple-500 mr-2">▸</span>
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">📈 Résultats Attendus</h4>
                  <ul className="space-y-2">
                    {phase.expectedOutcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-start text-sm">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ROI et Risques */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
            💰 Projection ROI
          </h2>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-green-800 font-bold">Année 1: {report.roiProjection.year1}</div>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <div className="text-green-800 font-bold">Année 2: {report.roiProjection.year2}</div>
            </div>
            <div className="bg-green-200 p-4 rounded-lg">
              <div className="text-green-800 font-bold">Année 3: {report.roiProjection.year3}</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="text-blue-800 font-bold">Breakeven: {report.roiProjection.breakeven}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center">
            🛡️ Gestion des Risques
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Risques Identifiés</h3>
              {report.riskAssessment.criticalRisks.map((risk, index) => (
                <div key={index} className="bg-orange-50 p-3 rounded-lg mb-2 border border-orange-200">
                  <span className="text-orange-700 text-sm">{risk}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Stratégies de Mitigation</h3>
              {report.riskAssessment.mitigationStrategies.slice(0, 2).map((strategy, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-lg mb-2 border border-blue-200">
                  <span className="text-blue-700 text-sm">{strategy}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Déclaration Finale Stratégique */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h2 className="text-4xl font-bold text-center mb-6">🏆 DÉCLARATION FINALE STRATÉGIQUE</h2>
        <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
          <p className="text-xl leading-relaxed whitespace-pre-line text-center">
            {report.conclusion}
          </p>
          <div className="text-center mt-8">
            <div className="inline-flex items-center px-8 py-4 bg-white/20 rounded-full">
              <span className="text-3xl mr-3">🚀</span>
              <span className="font-bold text-2xl">TRANSFORMATION DATA APPROUVÉE</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-8 text-center">
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold">{report.globalMaturity.score}%</div>
              <div className="text-sm opacity-90">Score Global</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold">18 mois</div>
              <div className="text-sm opacity-90">Délai Transformation</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold">3-5x</div>
              <div className="text-sm opacity-90">ROI Attendu</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}