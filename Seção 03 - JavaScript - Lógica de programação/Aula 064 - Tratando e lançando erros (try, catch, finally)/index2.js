//Validar se mData é do tipo Date
//(mData instanceof Date)

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',   // Formata a hora com 2 dígitos caso menor que 10
    minute: '2-digit', // Formata o minuto com 2 dígitos caso menor que 10
    second: '2-digit', // Formata o segundo com 2 dígitos caso menor que 10
    hour12: false      // Força mostrar no formato 24h, assim não vem o AM PM 
  });
}

try {
  const data = new Date('10-23-1994 11:03:00')
  const hora = retornaHora(11);
  console.log(hora);
} catch (e) {
  // Tratar erro
  console.log(e)
} finally {
  console.log('Tenha um bom dia');
}


/*retornaHora(1);
retornaHora('1');
retornaHora(new Date());*/