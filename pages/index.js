import React from 'react'
import Pagina from '../components/Pagina'
import { Card, Col, Row } from 'react-bootstrap'
import apiDeputados from '../services/apiDeputados'
import Link from 'next/link'

const index = (props) => {
  return (
    <Pagina titulo="Filmes Populares">

            <Row md={4}>
                {props.Deputados.map(item => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={item.urlFoto} />
                            <Card.Body>
                            
                                <Card.Title>{item.nome}</Card.Title>
                        <Link className='btn btn-danger' href={'/deputados/' + item.id}>consultar</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiDeputados.get('/deputados')
    const Deputados = resultado.data.dados

    return {
        props: {
            Deputados  
        },
    }
}