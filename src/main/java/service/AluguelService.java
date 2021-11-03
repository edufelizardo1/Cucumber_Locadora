package service;

import domain.Filme;
import domain.NotaAluguel;
import domain.utils.DateUtil;

import java.util.Calendar;

public class AluguelService {

    public NotaAluguel alugar(Filme filme, String tipoAluguel) {
        if (filme.getEstoque() == 0) throw new RuntimeException("Filme sem estoque");

        NotaAluguel notaAluguel = new NotaAluguel();
        if ("extendido".equals(tipoAluguel)) {
            notaAluguel.setPreco(filme.getAluguel() * 2);
            notaAluguel.setDataEntrega(DateUtil.obterDataDiferencaDias(3));
            notaAluguel.setPontuacao(2);
        }else {
            notaAluguel.setPreco(filme.getAluguel());
            notaAluguel.setDataEntrega(DateUtil.obterDataDiferencaDias(1));
            notaAluguel.setPontuacao(1);
        }

        filme.setEstoque(filme.getEstoque() - 1);
        return notaAluguel;
    }
}
