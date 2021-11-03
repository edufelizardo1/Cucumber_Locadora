# language: pt
Funcionalidade: Alugar filme
  Como um usuário
  Eu quero cadastrar aluguéis de filmes
  Para controlar preços e datas de entrega

  Cenario: Deve alugar um filme com sucesso
    Dado um filme com estoque de 2 unidades
    E que o preço de aluguel seja R$ 3
    Quando alugar
    Então o preço do aluguel será R$ 3
    E a data de entrega será em 1 dia
#    E a data de entrega será o dia seguinte ->
    E o estoque do filme será 1 unidade

  Cenario: Não deve alugar filme sem estoque
    Dado um filme com estoque de 0 unidades
    Quando  alugar
    Então não será possível por falta de estoque
    E o estoque do filme será 0 unidade

  Esquema do Cenário: Deve dar condições conform tipo de aluguel
    Dado um filme com estoque de 2 unidades
    E que o preço de aluguel seja R$ <preco>
    E que o tipo de aluguel seja <tipo>
    Quando  alugar
    Então o preço do aluguel será R$ <valor>
    E a data de entrega será em <qtdDias> dias
    E a pontuação recebida será de <pontuacao> pontos
    Exemplos:
      | preco | tipo      | valor | qtdDias | pontuacao |
      | 4     | extendido | 8     | 3       | 2         |
      | 4     | comum     | 4     | 1       | 1         |
      | 10    | extendido | 20    | 3       | 2         |

#  Cenario: Deve dar condições especiais para categoria extendida
#    Dado um filme com estoque de 2 unidades
#    E que o preço de aluguel seja R$ 4
#    E que o tipo de aluguel seja extendido
#    Quando  alugar
#    Então o preço do aluguel será R$ 8
#    E a data de entrega será em 3 dias
#    E a pontuação recebida será de 2 pontos
#
#  Cenario: Deve alugar para categoria comun
#    Dado um filme com estoque de 2 unidades
#    E que o preço de aluguel seja R$ 4
#    E que o tipo de aluguel seja comum
#    Quando alugar
#    Então o preço do aluguel será R$ 4
#    E a data de entrega será em 1 dia
#    E a pontuação recebida será de 1 pontos