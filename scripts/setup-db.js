const fs = require('fs');
const path = require('path');

// Créer le répertoire data s'il n'existe pas
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Créer un fichier de configuration pour la base de données
const dbConfig = {
  database: 'data_management_analytics',
  initialized: true,
  version: '1.0.0',
  components: 10,
  lastUpdate: new Date().toISOString()
};

const configPath = path.join(dataDir, 'db-config.json');
fs.writeFileSync(configPath, JSON.stringify(dbConfig, null, 2));

console.log('✅ Base de données configurée avec succès!');
console.log(`📂 Configuration sauvegardée dans: ${configPath}`);
console.log(`🔢 Nombre de composants: ${dbConfig.components}`);
console.log(`📅 Date d'initialisation: ${dbConfig.lastUpdate}`);

// Créer un fichier de données d'exemple pour les métriques
const sampleMetrics = {
  globalHealth: 81,
  components: [
    { id: '1', name: 'Ingénierie des données', score: 85, status: 'good' },
    { id: '2', name: 'Sécurité des données', score: 92, status: 'excellent' },
    { id: '3', name: 'Gouvernance des données', score: 78, status: 'good' },
    { id: '4', name: 'Qualité des données', score: 72, status: 'needs-improvement' },
    { id: '5', name: 'DataOps', score: 88, status: 'good' },
    { id: '6', name: 'Architecture des données', score: 90, status: 'excellent' },
    { id: '7', name: 'Business Intelligence', score: 82, status: 'good' },
    { id: '8', name: 'Découverte des données', score: 68, status: 'needs-improvement' },
    { id: '9', name: 'Stockage des données', score: 84, status: 'good' },
    { id: '10', name: 'Ingénierie des fonctionnalités', score: 76, status: 'good' }
  ],
  lastUpdated: new Date().toISOString()
};

const metricsPath = path.join(dataDir, 'metrics.json');
fs.writeFileSync(metricsPath, JSON.stringify(sampleMetrics, null, 2));

console.log(`📊 Métriques d'exemple créées dans: ${metricsPath}`);
console.log('🚀 Application prête à être lancée!');