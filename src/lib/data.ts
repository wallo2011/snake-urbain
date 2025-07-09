import { DataComponent, DashboardData } from '@/types';

export const dataComponents: DataComponent[] = [
  {
    id: '1',
    title: 'Ingénierie des données',
    description: 'Préparation des données, de la source à l\'analyse',
    icon: 'database',
    color: 'bg-blue-500',
    status: 'good',
    subComponents: [
      {
        id: '1.1',
        name: 'ETL/ELT',
        description: 'Extraction, transformation et chargement des données',
        implementation: 'Pipeline automatisé avec Apache Airflow',
        tools: ['Apache Airflow', 'Talend', 'Informatica', 'Azure Data Factory'],
        bestPractices: [
          'Implémentation de contrôles de qualité',
          'Logging détaillé des transformations',
          'Tests automatisés des pipelines'
        ]
      },
      {
        id: '1.2',
        name: 'Pipelines de données',
        description: 'Pipelines de données entre les systèmes',
        implementation: 'Architecture micro-services avec API REST',
        tools: ['Apache Kafka', 'AWS Kinesis', 'Google Cloud Dataflow'],
        bestPractices: [
          'Monitoring en temps réel',
          'Gestion des erreurs et retry automatique',
          'Scalabilité horizontale'
        ]
      },
      {
        id: '1.3',
        name: 'Ingestion de données',
        description: 'Intégration des données depuis leurs sources',
        implementation: 'Connecteurs natifs et APIs',
        tools: ['Fivetran', 'Stitch', 'Airbyte', 'Custom APIs'],
        bestPractices: [
          'Validation des schémas source',
          'Gestion des changements de format',
          'Monitoring de la latence'
        ]
      },
      {
        id: '1.4',
        name: 'Transformation des données',
        description: 'Traitement des données pour les rendre exploitables',
        implementation: 'Transformations SQL et Python',
        tools: ['dbt', 'Apache Spark', 'Pandas', 'SQL'],
        bestPractices: [
          'Documentation des transformations',
          'Tests unitaires sur les transformations',
          'Versioning des modèles'
        ]
      }
    ],
    metrics: {
      score: 85,
      coverage: 78,
      incidents: 3,
      trend: 'up',
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: '2',
    title: 'Sécurité des données',
    description: 'Protection des données contre les fuites ou les utilisations abusives',
    icon: 'shield',
    color: 'bg-red-500',
    status: 'excellent',
    subComponents: [
      {
        id: '2.1',
        name: 'Confidentialité des données',
        description: 'Confidentialité des informations personnelles',
        implementation: 'Chiffrement end-to-end et anonymisation',
        tools: ['HashiCorp Vault', 'AWS KMS', 'Azure Key Vault'],
        bestPractices: [
          'Chiffrement des données sensibles',
          'Pseudonymisation des PII',
          'Contrôle d\'accès granulaire'
        ]
      },
      {
        id: '2.2',
        name: 'Protection des données',
        description: 'Prévention des accès non autorisés',
        implementation: 'IAM et contrôles d\'accès basés sur les rôles',
        tools: ['Okta', 'Active Directory', 'AWS IAM'],
        bestPractices: [
          'Authentification multi-facteurs',
          'Principe du moindre privilège',
          'Audit régulier des accès'
        ]
      },
      {
        id: '2.3',
        name: 'Classification des données',
        description: 'Classification des données selon leur sensibilité',
        implementation: 'Étiquetage automatique et manuel',
        tools: ['Microsoft Purview', 'Varonis', 'Spirion'],
        bestPractices: [
          'Taxonomie claire des classifications',
          'Scanning automatique des contenus',
          'Formation des utilisateurs'
        ]
      }
    ],
    metrics: {
      score: 92,
      coverage: 88,
      incidents: 0,
      trend: 'stable',
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: '3',
    title: 'Gouvernance des données',
    description: 'Cadre pour garantir une utilisation responsable des données',
    icon: 'users',
    color: 'bg-green-500',
    status: 'good',
    subComponents: [
      {
        id: '3.1',
        name: 'Dictionnaire des données',
        description: 'Explication des termes et des données',
        implementation: 'Catalogue centralisé avec définitions',
        tools: ['Alation', 'Collibra', 'Apache Atlas'],
        bestPractices: [
          'Définitions claires et cohérentes',
          'Maintenance collaborative',
          'Intégration avec les outils métier'
        ]
      },
      {
        id: '3.2',
        name: 'Politiques et normes',
        description: 'Politiques et normes régissant les données',
        implementation: 'Framework de gouvernance documenté',
        tools: ['SharePoint', 'Confluence', 'Notion'],
        bestPractices: [
          'Révision régulière des politiques',
          'Formation et sensibilisation',
          'Mesure de la conformité'
        ]
      },
      {
        id: '3.3',
        name: 'Gestion des données',
        description: 'Affectation de responsables qualité des données',
        implementation: 'Équipe de data stewards dédiée',
        tools: ['JIRA', 'ServiceNow', 'Custom Dashboard'],
        bestPractices: [
          'Rôles et responsabilités clairs',
          'Processus d\'escalade définis',
          'Métriques de performance'
        ]
      },
      {
        id: '3.4',
        name: 'Données de référence',
        description: 'Normalisation des données de référence',
        implementation: 'MDM centralisé avec golden records',
        tools: ['Informatica MDM', 'Talend MDM', 'Microsoft MDS'],
        bestPractices: [
          'Source unique de vérité',
          'Processus de validation robuste',
          'Synchronisation temps réel'
        ]
      }
    ],
    metrics: {
      score: 78,
      coverage: 82,
      incidents: 2,
      trend: 'up',
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: '4',
    title: 'Qualité des données',
    description: 'S\'assurer que les données sont correctes, précises et à jour',
    icon: 'check-circle',
    color: 'bg-yellow-500',
    status: 'needs-improvement',
    subComponents: [
      {
        id: '4.1',
        name: 'Règles de qualité',
        description: 'Règles de validation des données',
        implementation: 'Engine de règles avec alertes automatiques',
        tools: ['Great Expectations', 'Deequ', 'Talend Data Quality'],
        bestPractices: [
          'Règles métier documentées',
          'Validation en temps réel',
          'Historique des violations'
        ]
      },
      {
        id: '4.2',
        name: 'Profilage des données',
        description: 'Analyse de la qualité du contenu',
        implementation: 'Scans automatiques et rapports',
        tools: ['Trifacta', 'Dataiku', 'Pandas Profiling'],
        bestPractices: [
          'Profilage régulier et programmé',
          'Détection d\'anomalies',
          'Visualisation des distributions'
        ]
      },
      {
        id: '4.3',
        name: 'Contrats de données',
        description: 'Accords définissant le format et les attentes',
        implementation: 'Documentation formelle avec SLA',
        tools: ['JSON Schema', 'Avro', 'Protobuf'],
        bestPractices: [
          'Schémas versionnés',
          'Tests de conformité',
          'Communication des changements'
        ]
      },
      {
        id: '4.4',
        name: 'Gestion des incidents',
        description: 'Résolution des problèmes de qualité',
        implementation: 'Workflow ITSM intégré',
        tools: ['JIRA', 'ServiceNow', 'PagerDuty'],
        bestPractices: [
          'Catégorisation par priorité',
          'SLA de résolution',
          'Analyse post-incident'
        ]
      },
      {
        id: '4.5',
        name: 'Observabilité des données',
        description: 'Suivi de l\'état des données au fil du temps',
        implementation: 'Dashboard temps réel avec métriques',
        tools: ['Monte Carlo', 'Bigeye', 'Datadog'],
        bestPractices: [
          'Métriques de qualité en temps réel',
          'Alertes proactives',
          'Tableaux de bord exécutifs'
        ]
      }
    ],
    metrics: {
      score: 72,
      coverage: 65,
      incidents: 8,
      trend: 'down',
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: '5',
    title: 'Opérations de données (DataOps)',
    description: 'Méthodologie combinant science des données et opérations techniques',
    icon: 'settings',
    color: 'bg-purple-500',
    status: 'good',
    subComponents: [
      {
        id: '5.1',
        name: 'CI/CD',
        description: 'Intégration et déploiement continus',
        implementation: 'Pipeline GitOps avec tests automatisés',
        tools: ['GitLab CI', 'GitHub Actions', 'Jenkins'],
        bestPractices: [
          'Tests automatisés complets',
          'Déploiements blue-green',
          'Rollback automatique'
        ]
      },
      {
        id: '5.2',
        name: 'Gestion du changement',
        description: 'Contrôle des modifications apportées aux données et systèmes',
        implementation: 'Processus de review et approbation',
        tools: ['Git', 'Bitbucket', 'Azure DevOps'],
        bestPractices: [
          'Review par les pairs',
          'Documentation des changements',
          'Tests d\'impact'
        ]
      }
    ],
    metrics: {
      score: 88,
      coverage: 79,
      incidents: 1,
      trend: 'stable',
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: '6',
    title: 'Architecture des données',
    description: 'Conception et planification du stockage et de l\'utilisation des données',
    icon: 'layers',
    color: 'bg-indigo-500',
    status: 'excellent',
    subComponents: [
      {
        id: '6.1',
        name: 'Lac de données / Entrepôt',
        description: 'Grands entrepôts de données',
        implementation: 'Architecture hybride cloud-native',
        tools: ['Snowflake', 'Amazon S3', 'Azure Data Lake'],
        bestPractices: [
          'Architecture en couches',
          'Partitioning optimisé',
          'Compression et indexation'
        ]
      },
      {
        id: '6.2',
        name: 'Maillage de données',
        description: 'Architecture de données décentralisée',
        implementation: 'Domaines autonomes avec APIs',
        tools: ['Kubernetes', 'API Gateway', 'Service Mesh'],
        bestPractices: [
          'Ownership par domaine',
          'APIs standardisées',
          'Governance décentralisée'
        ]
      },
      {
        id: '6.3',
        name: 'Produits de données',
        description: 'Packages de données réutilisables',
        implementation: 'Catalogue de produits avec APIs',
        tools: ['dbt', 'Airflow', 'Kubernetes'],
        bestPractices: [
          'Documentation complète',
          'Versioning sémantique',
          'Monitoring de l\'usage'
        ]
      },
      {
        id: '6.4',
        name: 'Modélisation des données',
        description: 'Conception de modèles structurels',
        implementation: 'Modèles dimensionnels et normalisés',
        tools: ['ERwin', 'PowerDesigner', 'Lucidchart'],
        bestPractices: [
          'Normalisation appropriée',
          'Documentation des relations',
          'Révision régulière'
        ]
      }
    ],
    metrics: {
      score: 90,
      coverage: 85,
      incidents: 0,
      trend: 'up',
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: '7',
    title: 'Business Intelligence',
    description: 'Transformer les données en informations exploitables',
    icon: 'bar-chart',
    color: 'bg-cyan-500',
    status: 'good',
    subComponents: [
      {
        id: '7.1',
        name: 'OLAP',
        description: 'Outils d\'analyse de données multidimensionnelles',
        implementation: 'Cubes OLAP avec requêtes optimisées',
        tools: ['Microsoft SSAS', 'Oracle OLAP', 'Mondrian'],
        bestPractices: [
          'Agrégations précalculées',
          'Hiérarchies optimisées',
          'Cache intelligent'
        ]
      },
      {
        id: '7.2',
        name: 'Modèles sémantiques',
        description: 'Modèles d\'interprétation des données',
        implementation: 'Couche sémantique unifiée',
        tools: ['Tableau', 'Power BI', 'Looker'],
        bestPractices: [
          'Métriques cohérentes',
          'Business glossary',
          'Certification des données'
        ]
      },
      {
        id: '7.3',
        name: 'Data Marts',
        description: 'Entrepôts de microdonnées pour des services spécifiques',
        implementation: 'Marts départementaux optimisés',
        tools: ['Snowflake', 'BigQuery', 'Redshift'],
        bestPractices: [
          'Conception orientée métier',
          'ETL spécialisés',
          'Performance optimisée'
        ]
      }
    ],
    metrics: {
      score: 82,
      coverage: 76,
      incidents: 2,
      trend: 'stable',
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: '8',
    title: 'Découverte des données',
    description: 'Rechercher et comprendre les sources de données',
    icon: 'search',
    color: 'bg-orange-500',
    status: 'needs-improvement',
    subComponents: [
      {
        id: '8.1',
        name: 'Catalogues de données',
        description: 'Catalogues décrivant les données',
        implementation: 'Catalogue centralisé avec métadonnées',
        tools: ['Alation', 'Collibra', 'DataHub'],
        bestPractices: [
          'Métadonnées enrichies',
          'Search facetté',
          'Ratings et reviews'
        ]
      },
      {
        id: '8.2',
        name: 'Lignage des données',
        description: 'Tracer le chemin des données',
        implementation: 'Mapping automatique end-to-end',
        tools: ['Apache Atlas', 'Manta', 'Informatica Lineage'],
        bestPractices: [
          'Traçabilité complète',
          'Impact analysis',
          'Visualisation interactive'
        ]
      },
      {
        id: '8.3',
        name: 'Gestion des métadonnées',
        description: 'Gérer les métadonnées',
        implementation: 'Repository centralisé avec APIs',
        tools: ['Apache Atlas', 'AWS Glue', 'Azure Purview'],
        bestPractices: [
          'Standards de métadonnées',
          'Automatisation de la collecte',
          'Qualité des métadonnées'
        ]
      }
    ],
    metrics: {
      score: 68,
      coverage: 58,
      incidents: 5,
      trend: 'up',
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: '9',
    title: 'Stockage des données',
    description: 'Gérer le stockage et la récupération des données',
    icon: 'hard-drive',
    color: 'bg-gray-500',
    status: 'good',
    subComponents: [
      {
        id: '9.1',
        name: 'Gestion des bases de données',
        description: 'Gérer les bases de données',
        implementation: 'Administration automatisée multi-cloud',
        tools: ['PostgreSQL', 'MongoDB', 'Oracle', 'MySQL'],
        bestPractices: [
          'Backup automatisé',
          'Monitoring proactif',
          'Optimisation des performances'
        ]
      },
      {
        id: '9.2',
        name: 'Conservation et récupération',
        description: 'Sauvegarder et récupérer les données',
        implementation: 'Stratégie 3-2-1 avec cloud',
        tools: ['Veeam', 'Commvault', 'AWS Backup'],
        bestPractices: [
          'Tests de récupération réguliers',
          'RTO/RPO définis',
          'Chiffrement des backups'
        ]
      }
    ],
    metrics: {
      score: 84,
      coverage: 80,
      incidents: 1,
      trend: 'stable',
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: '10',
    title: 'Ingénierie des fonctionnalités',
    description: 'Préparation des données pour l\'IA et le ML',
    icon: 'cpu',
    color: 'bg-pink-500',
    status: 'good',
    subComponents: [
      {
        id: '10.1',
        name: 'Magasin de fonctionnalités',
        description: 'Référentiel de fonctionnalités pour les modèles',
        implementation: 'Feature store centralisé avec versioning',
        tools: ['Feast', 'Tecton', 'AWS SageMaker Feature Store'],
        bestPractices: [
          'Features réutilisables',
          'Monitoring de drift',
          'Documentation complète'
        ]
      }
    ],
    metrics: {
      score: 76,
      coverage: 72,
      incidents: 3,
      trend: 'up',
      lastUpdated: '2024-01-15'
    }
  }
];

export const dashboardData: DashboardData = {
  overview: {
    totalComponents: 10,
    healthScore: 81,
    activeProjects: 24,
    dataVolume: '2.4 TB'
  },
  components: dataComponents,
  recentActivity: [
    {
      id: '1',
      type: 'incident',
      description: 'Problème de qualité détecté dans le pipeline ETL',
      timestamp: '2024-01-15T10:30:00Z',
      component: 'Qualité des données',
      severity: 'high'
    },
    {
      id: '2',
      type: 'deployment',
      description: 'Nouveau modèle de features déployé',
      timestamp: '2024-01-15T09:15:00Z',
      component: 'Ingénierie des fonctionnalités',
      severity: 'low'
    },
    {
      id: '3',
      type: 'update',
      description: 'Mise à jour des politiques de gouvernance',
      timestamp: '2024-01-15T08:45:00Z',
      component: 'Gouvernance des données',
      severity: 'medium'
    }
  ]
};