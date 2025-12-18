const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // ✅ en premier

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/user.route'));
app.use('/api/categories', require('./routes/categorie.route'));
app.use('/api/scategories', require('./routes/scategorie.route'));
app.use('/api/articles', require('./routes/article.route'));

// Route racine
app.get('/', (req, res) => {
  res.send('bonjour');
});

// Connexion MongoDB
mongoose.connect(process.env.DATABASECLOUD)
  .then(() => console.log('DataBase Successfully Connected'))
  .catch(err => {
    console.error('Unable to connect to database', err);
    process.exit(1); // ✅ exit(1) pour erreur
  });

// Démarrage
const PORT = process. PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;