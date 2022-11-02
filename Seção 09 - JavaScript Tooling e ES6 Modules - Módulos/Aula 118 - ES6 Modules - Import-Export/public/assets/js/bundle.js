/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pessoa),
/* harmony export */   "idade": () => (/* binding */ idade),
/* harmony export */   "multiplica": () => (/* binding */ multiplica),
/* harmony export */   "nome": () => (/* binding */ nome),
/* harmony export */   "sobrenome": () => (/* binding */ sobrenome),
/* harmony export */   "somaImportado": () => (/* binding */ soma),
/* harmony export */   "subtrai": () => (/* binding */ subtrai)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var nome = 'Felipe';
var sobrenome = 'Texeira';
var idade = 28;
function soma(x, y) {
  return x + y;
}
function subtrai(x, y) {
  return x - y;
}
var Pessoa = /*#__PURE__*/_createClass(function Pessoa(nome, sobrenome) {
  _classCallCheck(this, Pessoa);
  this.nome = nome;
  this.sobrenome = sobrenome;
});

function multiplica(x, y) {
  return x * y;
}

//export { nome as defaut, sobrenome, idade, soma as somaImportado };

//só será exportado, o que for seguido de EXPORT

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");
//import qualquerNome, {nome, sobrenome, idade, soma} from './modulo1';


var p2 = new _modulo1__WEBPACK_IMPORTED_MODULE_0__["default"](nome, sobrenome);
console.log(p2);
//vai importar o que tiver como default


//vai importar tudo


//se usar o as no export, tem que ser importado aqui com o exano nome utilizado lá

var nome = 'Isis';
var sobrenome = 'Gabrielle Texeira';
var idade = 0.3;
function soma(x, y) {
  return x + y;
}
console.log();
console.log("Nome: ".concat(nome));
console.log("Sobrenome: ".concat(sobrenome));
console.log("Idade: ".concat(idade));
console.log("Resultado: ".concat(soma(7, 9)));
console.log();
console.log("Nome importado: ".concat(_modulo1__WEBPACK_IMPORTED_MODULE_0__.nome));
console.log("Sobrenome importado: ".concat(_modulo1__WEBPACK_IMPORTED_MODULE_0__.sobrenome));
console.log("Idade importado: ".concat(_modulo1__WEBPACK_IMPORTED_MODULE_0__.idade));
console.log("Resultado importado: ".concat((0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.somaImportado)(5, 5)));
console.log();
var p1 = new _modulo1__WEBPACK_IMPORTED_MODULE_0__["default"]('Giulia', 'Gabrielle Breis Texeira');
console.log(p1);
console.log("Resultado: ".concat((0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.subtrai)(9, 3)));
console.log();
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__);
console.log();
console.log(qualquerNome);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map