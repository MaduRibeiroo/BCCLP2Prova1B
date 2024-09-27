import { Button, Container, Table } from "react-bootstrap";

export default function DetalhesCandidato(props) {
    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            <Table striped bordered hover>
                    <thead>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Nome</th>
                        <th>Avatar</th>
                        <th>Curtida</th>
                        <th>Descurtida</th>
                        <th>Proposta</th>
                    </thead>
                    <tbody>{
                            props.candidato?.map((candidato) => {
                                return (
                                    <tr>
                                        <td>{candidato.id}</td>
                                        <td>{candidato.email}</td>
                                        <td>{candidato.nome}</td>
                                        <td><img style={{
                                                          "width":"40px",
                                                          "height":"40px"
                                                        }} src={candidato.avatar} alt="foto do candidato" /></td>
                                        <td>{candidato.curtidas}</td>
                                        <td>{candidato.descurtidas}</td>
                                        <td>{candidato.proposta}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Button className="mb-3" variant="primary"
                    onClick={() => {
                        props.detalharCandidato(false);
                    }}>
                    Voltar
                </Button>
        </Container>
    );
}