module.exports = (req, res, next) => {
    if(req.body.cliente){
    req.body.cliente = req.body.cliente.replace('Felipe', 'Cliente não iformado!');
    console.log();
    console.log(`Cliente: ${req.body.cliente}`)
    console.log();
  }

  next();
}