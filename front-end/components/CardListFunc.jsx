import CardFunc from "./CardFunc"

export default function CardList(props) {
    const { funcionarios } = props
    return (
        <div className="container">
            <div className="row g-3">
                {funcionarios.map((funcionario, index) => (
                    <div className="col-12 col-sm-6 col-md-4" key={index}>
                        <CardFunc
                            first_name={funcionario.first_name}
                            last_name={funcionario.last_name}
                            email={funcionario.email}
                            avatar={funcionario.avatar}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}