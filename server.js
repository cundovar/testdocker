const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000; // Choisissez le port que vous souhaitez utiliser

// Connectez-vous à la base de données MongoDB
mongoose.connect('mongodb://mongo:27017/monapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB !');
});

// Définissez une route pour servir les données de votre base de données
app.get('/api/data', async (req, res) => {
  try {
    // Effectuez la logique nécessaire pour récupérer les données de MongoDB
    const data = await MyModel.find(); // Assurez-vous de remplacer MyModel par le nom de votre modèle MongoDB
    res.json(data);
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Définissez d'autres routes nécessaires pour votre application

// Démarrez le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});