import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    // Mandando pro Insomnia
    res.json('Index');
  }
}

export default new HomeController();
