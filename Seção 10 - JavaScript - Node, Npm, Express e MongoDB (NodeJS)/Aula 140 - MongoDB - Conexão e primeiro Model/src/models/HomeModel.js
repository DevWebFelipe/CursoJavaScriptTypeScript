const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  titulo: String,
  id: {
    type: String,
    required: true
  },
  descricao: String
})

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;