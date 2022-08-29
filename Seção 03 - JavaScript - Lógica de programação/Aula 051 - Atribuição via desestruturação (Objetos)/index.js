const pessoa = {
  nome: 'Felipe',
  sobrenome: 'Texeira',
  idade: 27,
  endereco: {
    rua: 'Garibaldi veronez',
    numero: 090
  }
}

console.log(pessoa);
console.log();
console.log(pessoa.nome);
console.log();

const nomePessoa = pessoa.nome;
console.log(nomePessoa);
console.log();

// abaixo, caso algum campo não exista no objeto, é possível setar um valor default
const { nome, sobrenome, idade, campoInexisteObjeto = 'Não informado' } = pessoa;
console.log(nome, sobrenome, idade, campoInexisteObjeto);
console.log();

//alterar nome de variável
const {nome: pes_nome, sobrenome: pes_sobrenome, idade: pes_idade} = pessoa;
console.log(pes_nome, pes_sobrenome, pes_idade);
console.log();

//pegando dados de objeto dentro de outro objeto
const {nome: emp_razao_social, 
       sobrenome: emp_nome_fantasia, 
       endereco:{ rua: end_rua, 
                  numero1: end_numero = '000' }} = pessoa;
console.log(`Razão social: ${emp_razao_social}. Nome fantasia: ${emp_nome_fantasia} Endereço: ${end_rua} nº ${end_numero}`);
console.log();

const {nome: cli_nome, sobrenome: cli_sobrenome, ...resto} = pessoa;
console.log(cli_nome, resto);