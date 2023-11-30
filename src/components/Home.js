import {Container, Row} from 'react-bootstrap'



export function Home(){
    return (
        <Container fluid>
            <Row>
            <section id="home" class="d-flex align-items-center">
                <div class="container">
                <h1>Welcome to Medilab</h1>
                <h2>We are team of talented designers making websites with Bootstrap</h2>
                <a href="#about" class="btn-get-started scrollto">Get Started</a>
                </div>
            </section>
            </Row>
        </Container>
    )
}