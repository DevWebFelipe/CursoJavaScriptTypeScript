// 705.484.450-52 070.987.720-03
/*

*****     Primeira etapa     *****

1º Usamos os 9 primeiros dígitos do CPF para pegar o 10º dígito
2º Multiplicamos cada um dos 9 dígitos por uma sequência regressiva
começando de 10
3º Após multiplicados valores, somar o resultado das multiplicações
4º Pegar o 10º dígito pela fómula 
(11 menos (resto da divisão do total das multiplicações e 11))

7x  0x  5x  4x  8x  4x  4x  5x  0x -> 9 Primeiros dígitos do CPF
10  9   8   7   6   5   4   3   2  -> Sequência regreciva de 10
70  0   40  28  48  20  16  15  0  -> Resultado = 237

11 - (237 % 11) = 5 (Primeiro dígito) 
(OBS: quando resultado maior que 9, considerar como 0)


*****     Segunda etapa     *****

1º Usamos os 9 primeiros dígitos do CPF mais o dígito retornado 
na primeira etapa para encontrar o 11º dígito do CPF
2º Multiplicamos cada um dos 9 dígitos por uma sequência regressiva
só que agora, começando de 11
3º Após multiplicados valores, somar o resultado das multiplicações
4º Pegar o 10º dígito pela fómula 
(11 menos (resto da divisão do total das multiplicações e 11))

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x -> 10 Primeiros dígitos do CPF 
11  10  9   8   7   6   5   4   3   2  -> Sequência regreciva de 11
77  0   45  32  56  24  20  20  0   10 -> Resultado = 284

11 - (284 % 11) = 2 (Primeiro dígito)
*/