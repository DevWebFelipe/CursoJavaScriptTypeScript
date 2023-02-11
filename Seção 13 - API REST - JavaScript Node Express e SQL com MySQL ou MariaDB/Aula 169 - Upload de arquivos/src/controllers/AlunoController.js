import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    try {
      const aluno = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      });

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { idUrl } = req.params;

      if (!idUrl) {
        return res.status(400).json({
          errors: ['Nenhum aluno informado para busca!'],
        });
      }

      const aluno = await Aluno.findByPk(idUrl);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado!'],
        });
      }

      const {
        id, nome, sobrenome, email, idade, peso, altura,
      } = aluno;

      return res.json({
        id, nome, sobrenome, email, idade, peso, altura,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);

      const {
        id, nome, sobrenome, email, idade, peso, altura,
      } = novoAluno;

      return res.json({
        id, nome, sobrenome, email, idade, peso, altura,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { idUrl } = req.params;

      if (!idUrl) {
        return res.status(400).json({
          errors: ['Nenhum aluno informado para busca!'],
        });
      }

      const aluno = await Aluno.findByPk(idUrl);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado!'],
        });
      }

      const novosDados = await aluno.update(req.body);

      const {
        id, nome, sobrenome, email, idade, peso, altura,
      } = novosDados;

      return res.json({
        id, nome, sobrenome, email, idade, peso, altura,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { idUrl } = req.params;

      if (!idUrl) {
        return res.status(400).json({
          errors: ['Nenhum aluno informado para busca!'],
        });
      }

      const aluno = await Aluno.findByPk(idUrl);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado!'],
        });
      }

      await aluno.destroy();

      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
