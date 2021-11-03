package domain;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import domain.utils.DateUtil;
import org.junit.Assert;
import service.AluguelService;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class AlugarFimeSteps {

    private Filme filme;
    private AluguelService aluguel = new AluguelService();
    private NotaAluguel notaAluguel;
    private String erro;
    private String tipoAluguel;

    @Dado("^um filme com estoque de (\\d+) unidades$")
    public void umFilmeComEstoqueDeUnidades(int estoque) {
        filme = new Filme();
        filme.setEstoque(estoque);
    }

    @E("^que o preço de aluguel seja R\\$ (\\d+)$")
    public void queOPreçoDeAluguelSejaR$(int precoAluguel) {
        filme.setAluguel(precoAluguel);
    }

    @Quando("^alugar$")
    public void alugar() {
        try {
            notaAluguel = aluguel.alugar(filme, tipoAluguel);
        } catch (RuntimeException e) {
            erro = e.getMessage();
        }
    }

    @Então("^o preço do aluguel será R\\$ (\\d+)$")
    public void oPreçoDoAluguelSeráR$(int preco) {
        Assert.assertEquals(preco, notaAluguel.getPreco());
    }
//
//    @E("^a data de entrega será o dia seguinte$")
//    public void aDataDeEntregaSeráODiaSeguinte() {
//        Calendar calendar = Calendar.getInstance();
//        calendar.add(Calendar.DAY_OF_MONTH, 1);
//
//        Date dataRetorno = notaAluguel.getDataEntrega();
//        Calendar calRetorno = Calendar.getInstance();
//        calRetorno.setTime(dataRetorno);
//        Assert.assertEquals(calendar.get(Calendar.DAY_OF_MONTH), calRetorno.get(Calendar.DAY_OF_MONTH));
//        Assert.assertEquals(calendar.get(Calendar.MONTH), calRetorno.get(Calendar.MONTH));
//        Assert.assertEquals(calendar.get(Calendar.YEAR), calRetorno.get(Calendar.YEAR));
//    }

    @E("^o estoque do filme será (\\d+) unidade$")
    public void oEstoqueDoFilmeSeráUnidade(int estoque) {
        Assert.assertEquals(estoque, filme.getEstoque());
    }

    @Então("^não será possível por falta de estoque$")
    public void nãoSeráPossívelPorFaltaDeEstoque() {
        Assert.assertEquals("Filme sem estoque", erro);
    }

    @E("^que o tipo de aluguel seja (.*)$")
    public void queOTipoDeAluguelSejaExtendido(String tipo) {
        tipoAluguel = tipo;
    }

    @E("^a data de entrega será em (\\d+) dias?$")
    public void aDataDeEntregaSeráEmDias(int dia) {
        Date dataEsperada = DateUtil.obterDataDiferencaDias(dia);
        Date dataReal = notaAluguel.getDataEntrega();

        DateFormat format = new SimpleDateFormat("dd/MM/yyyy");

        Assert.assertEquals(format.format(dataEsperada), format.format(dataReal));
    }

    @E("^a pontuação recebida será de (\\d+) pontos$")
    public void aPontuaçãoRecebidaSeráDePontos(int pontuacao) {
        Assert.assertEquals(pontuacao, notaAluguel.getPontuacao());
    }
}
