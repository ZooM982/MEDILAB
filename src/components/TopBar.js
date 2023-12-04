import {Container, Row} from 'react-bootstrap'

export function TopBar(){

    return (
        <section id='topbar' className='fixed-top'>
            <Container className='d-flex align-items-center'>
                <Row>
                    <div className='container d-flex justify-content-between'>
                        <div className='contact-info d-flex align-items-center mx-auto'>
                            <i className="fa-solid fa-envelope"></i>  <a href='/'>contact@example.com</a>
                            <i className="fa-solid fa-mobile"></i>  <span>+1 5589 55488 55</span>
                        </div>
                        <div className='d-none d-lg-flex social-links align-items-center'>
                            <a href='/'><i className="fa-brands fa-twitter"></i></a>
                            <a href='/'><i className="fa-brands fa-facebook"></i></a>
                            <a href='/'><i className="fa-brands fa-instagram"></i></a>
                            <a href='/'><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}