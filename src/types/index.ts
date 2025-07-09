export interface DataComponent {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  subComponents: SubComponent[];
  metrics?: ComponentMetrics;
  status: 'excellent' | 'good' | 'needs-improvement' | 'critical';
}

export interface SubComponent {
  id: string;
  name: string;
  description: string;
  implementation: string;
  tools: string[];
  bestPractices: string[];
}

export interface ComponentMetrics {
  score: number;
  coverage: number;
  incidents: number;
  trend: 'up' | 'down' | 'stable';
  lastUpdated: string;
}

export interface DashboardData {
  overview: {
    totalComponents: number;
    healthScore: number;
    activeProjects: number;
    dataVolume: string;
  };
  components: DataComponent[];
  recentActivity: Activity[];
}

export interface Activity {
  id: string;
  type: string;
  description: string;
  timestamp: string;
  component: string;
  severity: 'low' | 'medium' | 'high';
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

// Types spécifiques pour chaque composant
export interface DataEngineeringMetrics {
  pipelineHealth: number;
  dataLatency: number;
  throughput: string;
  errorRate: number;
}

export interface DataSecurityMetrics {
  vulnerabilities: number;
  complianceScore: number;
  accessControls: number;
  breachRisk: 'low' | 'medium' | 'high';
}

export interface DataGovernanceMetrics {
  policyCompliance: number;
  dataQualityRules: number;
  stewardshipCoverage: number;
  catalogCompleteness: number;
}

export interface DataQualityMetrics {
  overallScore: number;
  completeness: number;
  accuracy: number;
  consistency: number;
  timeliness: number;
}

export interface DataOpsMetrics {
  deploymentFrequency: number;
  leadTime: number;
  changeFailureRate: number;
  recoveryTime: number;
}

export interface DataArchitectureMetrics {
  scalability: number;
  performance: number;
  reliability: number;
  maintainability: number;
}

export interface BusinessIntelligenceMetrics {
  userAdoption: number;
  reportAccuracy: number;
  queryPerformance: number;
  dashboardUsage: number;
}

export interface DataDiscoveryMetrics {
  catalogedAssets: number;
  lineageMapping: number;
  metadataQuality: number;
  searchEfficiency: number;
}

export interface DataStorageMetrics {
  storageEfficiency: number;
  backupReliability: number;
  accessPerformance: number;
  costOptimization: number;
}

export interface FeatureEngineeringMetrics {
  featureQuality: number;
  pipelineEfficiency: number;
  modelPerformance: number;
  featureReuse: number;
}