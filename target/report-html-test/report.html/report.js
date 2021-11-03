$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/alugar_filme.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 2,
  "name": "Alugar filme",
  "description": "Como um usuário\r\nEu quero cadastrar aluguéis de filmes\r\nPara controlar preços e datas de entrega",
  "id": "alugar-filme",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 7,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "alugar-filme;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 8,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "que o preço de aluguel seja R$ 3",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "o preço do aluguel será R$ 3",
  "keyword": "Então "
});
formatter.step({
  "line": 12,
  "name": "a data de entrega será em 1 dia",
  "keyword": "E "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#    E a data de entrega será o dia seguinte -\u003e"
    }
  ],
  "line": 14,
  "name": "o estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFimeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 228077400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "AlugarFimeSteps.queOPreçoDeAluguelSejaR$(int)"
});
formatter.result({
  "duration": 161000,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFimeSteps.alugar()"
});
formatter.result({
  "duration": 221900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "AlugarFimeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 3070300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFimeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 2376200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "AlugarFimeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 154900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "id": "alugar-filme;não-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 17,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 18,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "não será possível por falta de estoque",
  "keyword": "Então "
});
formatter.step({
  "line": 20,
  "name": "o estoque do filme será 0 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFimeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 362300,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFimeSteps.alugar()"
});
formatter.result({
  "duration": 93000,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFimeSteps.nãoSeráPossívelPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 44500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFimeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 94500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Deve dar condições conform tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conform-tipo-de-aluguel",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 23,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "que o preço de aluguel seja R$ \u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "que o tipo de aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "o preço do aluguel será R$ \u003cvalor\u003e",
  "keyword": "Então "
});
formatter.step({
  "line": 28,
  "name": "a data de entrega será em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "a pontuação recebida será de \u003cpontuacao\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conform-tipo-de-aluguel;",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ],
      "line": 31,
      "id": "alugar-filme;deve-dar-condições-conform-tipo-de-aluguel;;1"
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ],
      "line": 32,
      "id": "alugar-filme;deve-dar-condições-conform-tipo-de-aluguel;;2"
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ],
      "line": 33,
      "id": "alugar-filme;deve-dar-condições-conform-tipo-de-aluguel;;3"
    },
    {
      "cells": [
        "10",
        "extendido",
        "20",
        "3",
        "2"
      ],
      "line": 34,
      "id": "alugar-filme;deve-dar-condições-conform-tipo-de-aluguel;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 32,
  "name": "Deve dar condições conform tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conform-tipo-de-aluguel;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 23,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "que o preço de aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "que o tipo de aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "o preço do aluguel será R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 28,
  "name": "a data de entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "a pontuação recebida será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFimeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 153500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFimeSteps.queOPreçoDeAluguelSejaR$(int)"
});
formatter.result({
  "duration": 91700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFimeSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 2360700,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFimeSteps.alugar()"
});
formatter.result({
  "duration": 110200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "AlugarFimeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 113900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFimeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 794300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "AlugarFimeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 189700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Deve dar condições conform tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conform-tipo-de-aluguel;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 23,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "que o preço de aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "que o tipo de aluguel seja comum",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "o preço do aluguel será R$ 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 28,
  "name": "a data de entrega será em 1 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "a pontuação recebida será de 1 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFimeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 120600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFimeSteps.queOPreçoDeAluguelSejaR$(int)"
});
formatter.result({
  "duration": 192000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comum",
      "offset": 27
    }
  ],
  "location": "AlugarFimeSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 87300,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFimeSteps.alugar()"
});
formatter.result({
  "duration": 121600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "AlugarFimeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 99100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFimeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 507400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "AlugarFimeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 89100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Deve dar condições conform tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conform-tipo-de-aluguel;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 23,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "que o preço de aluguel seja R$ 10",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "que o tipo de aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "o preço do aluguel será R$ 20",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 28,
  "name": "a data de entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "a pontuação recebida será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFimeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 131500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "AlugarFimeSteps.queOPreçoDeAluguelSejaR$(int)"
});
formatter.result({
  "duration": 100500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFimeSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 92100,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFimeSteps.alugar()"
});
formatter.result({
  "duration": 108200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 27
    }
  ],
  "location": "AlugarFimeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 124000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFimeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 396100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "AlugarFimeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 101100,
  "status": "passed"
});
});