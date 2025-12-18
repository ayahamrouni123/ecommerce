const mongoose = require('mongoose');

const categorieSchema = new mongoose.Schema({
  nomcategorie: String,
  imagecategorie: String
});

module.exports = mongoose.model('Categorie', categorieSchema);