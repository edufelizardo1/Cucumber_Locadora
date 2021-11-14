# Cucumber_Locadora

![Profile views](https://visitor-badge.glitch.me/badge?page_id=edufelizardo1.visitor-Cucumber_Locadora)
![GitHub followers](https://img.shields.io/github/followers/edufelizardo1?style=social)
<!-- ![Profile views](https://gpvc.arturio.dev/edufelizardo1) -->
[![made-with-java](https://img.shields.io/badge/Language-Java-1f425f.svg)](https://www.oracle.com/br/java/technologies/javase-jdk8-doc-downloads.html)
[![made-with-java](https://img.shields.io/badge/framework-Gherkin-1f425f.svg)](https://cucumber.io/docs/gherkin/)
[![Framework-Cucumber](https://img.shields.io/badge/framework-Cucumber-1f425f.svg)](https://cucumber.io/)
[![made-with-java](https://img.shields.io/badge/framework-JUnit-1f425f.svg)](https://junit.org/junit4/)
[![made-with-java](https://img.shields.io/badge/ide-Intellij-1f425f.svg)](https://www.jetbrains.com/)
<!-- ![Profile views](https://gpvc.arturio.dev/edufelizardo1) -->
[![GitHub license](https://img.shields.io/github/license/edufelizardo1/Cucumber_Locadora)](https://github.com/edufelizardo1/Cucumber_Locadora/blob/main/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/edufelizardo1/Cucumber_Locadora)](https://github.com/edufelizardo1/Cucumber_Locadora/network)
[![GitHub stars](https://img.shields.io/github/stars/edufelizardo1/Cucumber_Locadora)](https://github.com/edufelizardo1/Cucumber_Locadora/stargazers)
[![Generic badge](https://img.shields.io/static/v1?label=build&message=success&color=<COLOR>)]()





* Teste de unidade automatizados
* Utilizando o BDD para construir os testes

### Configuração básica
1. Pom.xml: dependências
~~~
<dependencies>
        <!-- https://mvnrepository.com/artifact/info.cukes/cucumber-java -->
        <dependency>
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-java</artifactId>
            <version>1.2.5</version>
        </dependency>
        <!-- https://mvnrepository.com/artifact/info.cukes/cucumber-junit -->
        <dependency>
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-junit</artifactId>
            <version>1.2.5</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
~~~
2. Configurando a classe Hook ou Runner
* Não pode ser esquecido de fazer configuração
* Em ***figure = "Caminho da fiature"***
#### Exemplo:
~~~
@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/alugar_filme.feature",
        glue = "domain",
        tags = {},
        plugin = {"pretty", "html:target/report-html", "json:target/report-json/"}
        )
public class AlugarFilmeRunner {
}
~~~~
## Cenários: Exemplo
~~~
# language:pt
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
~~~

São testes Simples que procuram entender a funcionalidade da ferramenta ***Cucumber***. Também tem como ituíto otimizar
os tempos de testes, principalmente os unitários, e de que forma pensei nisto. A minha necessidade de contribuir para
com meu time de desnvolvimento, fez com que eu me enteressasse em estudar esta ferramenta, para pode unir as técncicas
de desevolvimento ágil, ***Behaviour Driven Development (ou BDD)*** e o ***Test Driven Development (TDD)***

[<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/eduardo-felizardo-c%C3%A2ndido-28b16122)
[<img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />](edufelizardo1@gmail.com)

