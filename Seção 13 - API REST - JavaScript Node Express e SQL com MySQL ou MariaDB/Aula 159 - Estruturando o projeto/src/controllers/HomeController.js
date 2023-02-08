class HomeController {
  index(req, res) {
    res.json({
      tudoFuncionando: true,
    });
  }
}

export default new HomeController();
