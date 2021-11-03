package domain;

public class Filme {
    private int estoque;
    private int aluguel;


    public void setEstoque(int estoque) {
        this.estoque = estoque;
    }

    public int getEstoque() {
        return estoque;
    }

    public void setAluguel(int precoAluguel) {
        this.aluguel = precoAluguel;
    }

    public int getAluguel() {
        return aluguel;
    }
}
