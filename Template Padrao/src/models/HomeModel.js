const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  titulo: {type: String, required: true},
  id: String,
  descricao: String,
})

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

};

module.exports = HomeModel; 