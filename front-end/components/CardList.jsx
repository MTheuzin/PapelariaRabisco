import CardProdutos from "./CardProdutos"

export default function CardList(props) {
    const { produtos } = props;
    return (
        <div className="container my-2">
            <div className="row my-5 g-5">
                {/* Estrutura de repetição map */}
                {produtos.map((produto, index) => {
                    return (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index} >
                            <CardProdutos
                                nome={produto.nome}
                                descricao={produto.descricao}
                                preco={produto.preco}
                                quantidade={produto.quantidade}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}