import { dataComponents } from './data'

export interface MaturityAssessment {
  score: number
  level: 'Initial' | 'Managed' | 'Defined' | 'Optimized' | 'Advanced'
  category: 'Critical' | 'Needs Improvement' | 'Good' | 'Excellent'
}

export interface ComponentAnalysis {
  id: string
  name: string
  score: number
  maturity: MaturityAssessment
  risks: string[]
  opportunities: string[]
  priority: 'Low' | 'Medium' | 'High' | 'Critical'
}

export interface UnifiedReport {
  executiveSummary: string
  globalMaturity: MaturityAssessment
  componentAnalyses: ComponentAnalysis[]
  strategicRecommendations: string[]
  actionPlan: Array<{
    phase: number
    title: string
    duration: string
    actions: string[]
    expectedOutcomes: string[]
    budget: string
  }>
  riskAssessment: {
    criticalRisks: string[]
    mitigationStrategies: string[]
  }
  roiProjection: {
    year1: string
    year2: string
    year3: string
    breakeven: string
  }
  conclusion: string
}

export class UnifiedDataAnalyzer {
  private components = dataComponents

  public generateCompleteReport(): UnifiedReport {
    const componentAnalyses = this.analyzeAllComponents()
    const globalMaturity = this.calculateGlobalMaturity(componentAnalyses)
    
    return {
      executiveSummary: this.generateExecutiveSummary(globalMaturity, componentAnalyses),
      globalMaturity,
      componentAnalyses,
      strategicRecommendations: this.generateStrategicRecommendations(componentAnalyses),
      actionPlan: this.generateActionPlan(componentAnalyses),
      riskAssessment: this.assessRisks(componentAnalyses),
      roiProjection: this.calculateROI(globalMaturity),
      conclusion: this.generateConclusion(globalMaturity, componentAnalyses)
    }
  }

  private analyzeAllComponents(): ComponentAnalysis[] {
    return this.components.map(component => {
      const score = component.metrics?.score || 0
      const incidents = component.metrics?.incidents || 0
      const coverage = component.metrics?.coverage || 0
      
      // Calcul de maturité avancé
      const maturity = this.calculateMaturity(score, incidents, coverage)
      
      // Analyse des risques par composant
      const risks = this.identifyRisks(component, score, incidents)
      
      // Identification des opportunités
      const opportunities = this.identifyOpportunities(component, score, coverage)
      
      // Calcul de priorité
      const priority = this.calculatePriority(score, incidents, coverage)

      return {
        id: component.id,
        name: component.title,
        score,
        maturity,
        risks,
        opportunities,
        priority
      }
    })
  }

  private calculateMaturity(score: number, incidents: number, coverage: number): MaturityAssessment {
    // Algorithme sophistiqué de calcul de maturité
    let adjustedScore = score
    
    // Pénalités pour incidents
    if (incidents > 5) adjustedScore -= 15
    else if (incidents > 2) adjustedScore -= 8
    
    // Bonus pour couverture élevée
    if (coverage > 90) adjustedScore += 5
    else if (coverage < 60) adjustedScore -= 10

    let level: MaturityAssessment['level']
    let category: MaturityAssessment['category']

    if (adjustedScore >= 90) {
      level = 'Advanced'
      category = 'Excellent'
    } else if (adjustedScore >= 80) {
      level = 'Optimized' 
      category = 'Good'
    } else if (adjustedScore >= 70) {
      level = 'Defined'
      category = 'Good'
    } else if (adjustedScore >= 60) {
      level = 'Managed'
      category = 'Needs Improvement'
    } else {
      level = 'Initial'
      category = 'Critical'
    }

    return { score: adjustedScore, level, category }
  }

  private identifyRisks(component: any, score: number, incidents: number): string[] {
    const risks: string[] = []

    if (score < 70) {
      risks.push(`Maturité faible en ${component.title} (${score}%) - Risque opérationnel élevé`)
    }

    if (incidents > 3) {
      risks.push(`${incidents} incidents détectés - Instabilité du composant`)
    }

    // Risques spécifiques par composant
    switch (component.id) {
      case '2': // Sécurité
        if (score < 85) risks.push('Vulnérabilités de sécurité - Risque de brèche')
        break
      case '4': // Qualité
        if (score < 75) risks.push('Problèmes de qualité - Impact sur les décisions business')
        break
      case '3': // Gouvernance
        if (score < 80) risks.push('Gouvernance insuffisante - Risque de non-conformité')
        break
    }

    return risks
  }

  private identifyOpportunities(component: any, score: number, coverage: number): string[] {
    const opportunities: string[] = []

    if (score >= 85) {
      opportunities.push(`Excellence en ${component.title} - Modèle à reproduire`)
    }

    if (coverage < 80 && score >= 75) {
      opportunities.push('Extension possible - Bon niveau, couverture à améliorer')
    }

    // Opportunités spécifiques
    switch (component.id) {
      case '6': // Architecture
        if (score >= 85) opportunities.push('Architecture solide - Base pour modernisation cloud')
        break
      case '7': // BI
        if (score >= 80) opportunities.push('BI mature - Opportunité pour analytics avancés et IA')
        break
    }

    return opportunities
  }

  private calculatePriority(score: number, incidents: number, coverage: number): ComponentAnalysis['priority'] {
    if (score < 60 || incidents > 5) return 'Critical'
    if (score < 75 || incidents > 2) return 'High'
    if (score < 85 || coverage < 70) return 'Medium'
    return 'Low'
  }

  private calculateGlobalMaturity(analyses: ComponentAnalysis[]): MaturityAssessment {
    const avgScore = analyses.reduce((sum, a) => sum + a.maturity.score, 0) / analyses.length
    const criticalCount = analyses.filter(a => a.priority === 'Critical').length
    const excellentCount = analyses.filter(a => a.maturity.category === 'Excellent').length

    let adjustedScore = avgScore
    if (criticalCount > 2) adjustedScore -= 10
    if (excellentCount > 3) adjustedScore += 5

    return this.calculateMaturity(adjustedScore, 0, 100)
  }

  private generateExecutiveSummary(maturity: MaturityAssessment, analyses: ComponentAnalysis[]): string {
    const criticalComponents = analyses.filter(a => a.priority === 'Critical').length
    const excellentComponents = analyses.filter(a => a.maturity.category === 'Excellent').length
    
    return `
ÉVALUATION STRATÉGIQUE DE MATURITÉ DATA MANAGEMENT

Score Global: ${Math.round(maturity.score)}% - Niveau "${maturity.level}"

DIAGNOSTIC:
• ${excellentComponents} composants excellent(s) constituent les fondations solides de l'organisation
• ${criticalComponents} composant(s) critique(s) nécessitent une intervention immédiate
• Maturité globale positionnée au niveau "${maturity.level}" avec un potentiel d'évolution significatif

IMPACT BUSINESS:
L'organisation présente une base ${maturity.category === 'Excellent' ? 'excellente' : maturity.category === 'Good' ? 'solide' : 'perfectible'} 
pour exploiter ses données comme actif stratégique. Les investissements ciblés généreront un ROI mesurable 
dans les 12-18 prochains mois.

POSITIONNEMENT CONCURRENTIEL:
Niveau "${maturity.level}" place l'organisation ${maturity.score >= 80 ? 'parmi les leaders' : maturity.score >= 70 ? 'dans la moyenne haute' : 'avec un potentiel d\'amélioration'} 
de son secteur en matière de maturité data.
    `.trim()
  }

  private generateStrategicRecommendations(analyses: ComponentAnalysis[]): string[] {
    const recommendations: string[] = []

    // Recommandations basées sur les composants critiques
    const criticalComponents = analyses.filter(a => a.priority === 'Critical')
    if (criticalComponents.length > 0) {
      recommendations.push(`URGENCE: Résoudre immédiatement les ${criticalComponents.length} composant(s) critique(s): ${criticalComponents.map(c => c.name).join(', ')}`)
    }

    // Recommandations par niveau de maturité
    if (analyses.find(a => a.name.includes('Qualité') && a.maturity.score < 75)) {
      recommendations.push('Implémenter un framework de Data Quality Management avec monitoring temps réel et alertes proactives')
    }

    if (analyses.find(a => a.name.includes('Gouvernance') && a.maturity.score < 80)) {
      recommendations.push('Établir un Data Office avec Chief Data Officer et politiques de gouvernance claires')
    }

    if (analyses.find(a => a.name.includes('Sécurité') && a.maturity.score < 85)) {
      recommendations.push('Renforcer la sécurité avec chiffrement end-to-end et contrôles d\'accès granulaires')
    }

    // Recommandations générales
    recommendations.push('Créer un Centre d\'Excellence Data avec équipes transversales')
    recommendations.push('Déployer une plateforme data moderne (Cloud-native, Self-service)')
    recommendations.push('Établir un programme de formation continue et certification des équipes')

    return recommendations
  }

  private generateActionPlan(analyses: ComponentAnalysis[]): UnifiedReport['actionPlan'] {
    return [
      {
        phase: 1,
        title: 'Stabilisation et Sécurisation (0-3 mois)',
        duration: '90 jours',
        actions: [
          'Résolution des incidents critiques identifiés',
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
    ]
  }

  private assessRisks(analyses: ComponentAnalysis[]): UnifiedReport['riskAssessment'] {
    const allRisks = analyses.flatMap(a => a.risks)
    const criticalRisks = allRisks.filter(risk => 
      risk.includes('critique') || risk.includes('sécurité') || risk.includes('conformité')
    )

    return {
      criticalRisks,
      mitigationStrategies: [
        'Mise en place d\'un monitoring 24/7 avec alertes automatiques',
        'Plan de continuité d\'activité et procédures de backup',
        'Formation intensive des équipes sur les bonnes pratiques',
        'Audits sécurité trimestriels par des experts externes'
      ]
    }
  }

  private calculateROI(maturity: MaturityAssessment): UnifiedReport['roiProjection'] {
    // Calcul ROI basé sur le niveau de maturité actuel
    const baseROI = maturity.score >= 80 ? 1.5 : maturity.score >= 70 ? 1.8 : 2.2
    
    return {
      year1: `${Math.round(baseROI * 100)}% - Efficacité opérationnelle`,
      year2: `${Math.round(baseROI * 150)}% - Innovation produits/services`,
      year3: `${Math.round(baseROI * 200)}% - Avantage concurrentiel`,
      breakeven: maturity.score >= 80 ? '8-12 mois' : '12-18 mois'
    }
  }

  private generateConclusion(maturity: MaturityAssessment, analyses: ComponentAnalysis[]): string {
    const strengths = analyses.filter(a => a.maturity.category === 'Excellent').length
    const improvements = analyses.filter(a => a.priority === 'High' || a.priority === 'Critical').length

    return `
🎯 DÉCLARATION FINALE STRATÉGIQUE

Avec un score de maturité global de ${Math.round(maturity.score)}% et un niveau "${maturity.level}", 
l'organisation dispose d'une base ${maturity.category === 'Excellent' ? 'exceptionnelle' : 'solide'} 
pour sa transformation data-driven.

✅ FORCES: ${strengths} composant(s) d'excellence constituent un avantage concurrentiel durable
⚠️ DÉFIS: ${improvements} domaine(s) prioritaire(s) représentent des opportunités d'amélioration significatives

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
}

export const unifiedAnalyzer = new UnifiedDataAnalyzer()