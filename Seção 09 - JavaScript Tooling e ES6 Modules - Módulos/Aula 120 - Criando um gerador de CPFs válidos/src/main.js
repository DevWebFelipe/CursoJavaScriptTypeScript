import GenerateCPF from './modules/GenerateCPF';

import './assets/css/styles.css';

(function() {
  const gererate = new GenerateCPF();
  const generatedCPF = document.querySelector('.generated-cpf');
  generatedCPF.innerHTML = gererate.generateNewCPF();
})();