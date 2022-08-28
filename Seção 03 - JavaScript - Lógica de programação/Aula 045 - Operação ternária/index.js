

//  Utiliza ? para subistituir a sintaxe do IF e : para substituir a sintaxe do ELSE

let pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
  console.log('usuario VIP');
} else {
  console.log('usuário normal');
}

//com operador ternário fica
pontuacaoUsuario = 1500;
const nivelUsuario = (pontuacaoUsuario >= 1000) ? 'Usuário VIP': 'Usuário normal';
console.log(nivelUsuario);

//outro exemplo, primeiro setamos um valor para a cor do usuário
//caso ele não tenha selecionado nenhuma cor, setamos um outro valor como default
//nesse exemplo, a cor padrão vai ser a cor que o usuário selecionou ou a cor preta
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, 'Cor: ' + corPadrao);