import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Isis',
      sobrenome: 'Gabrielle Texeira',
      email: 'isis@gmail.com',
      idade: 0,
      peso: 7.0,
      altura: 0.48,
    });

    res.json({
      novoAluno,
    });
  }
}

export default new HomeController();
