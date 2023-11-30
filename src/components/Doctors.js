import { Container, Row, Card } from "react-bootstrap";
import image1 from './images/doctors/doctors-1.jpg'
import image2 from './images/doctors/doctors-2.jpg'
import image3 from './images/doctors/doctors-3.jpg'
import image4 from './images/doctors/doctors-4.jpg'





export function Doctors(){
    return (
        <section id="doctors" className="py-5">
            <Container>
                <Row>
                    <div className='head-text'>
                        <h1 className='text-center'>Doctors</h1>
                        <div className='barre'>
                            <div className='barre-1'></div>
                        </div>
                        <p className='text-center'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                            Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
                            Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>
                    <Card>
                        <Card.Img src={image1} />
                        <Card.Body>
                            <Card.Title>
                                <h3>Walter White</h3>
                                <p className="text-muted">Chief Medical Officer</p>
                            </Card.Title>
                            <div className="border-bottom"></div>
                            <Card.Text>
                            <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                            <div className="card-icons">
                                <div className="icon">
                                    <i className="fa-brands fa-twitter"></i>
                                </div>
                                <div className="icon">
                                    <i className="fa-brands fa-facebook"></i>
                                </div>
                                <div className="icon">
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                                <div className="icon">
                                    <i className="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img src={image2} />
                        <Card.Body>
                            <Card.Title>
                                <h3>Sarah Jhonson</h3>
                                <p className="text-muted">Anesthesiologistr</p>
                            </Card.Title>
                            <div className="border-bottom"></div>
                            <Card.Text>
                            <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                            <div className="card-icons">
                                <div className="icon">
                                    <i className="fa-brands fa-twitter"></i>
                                </div>
                                <div className="icon">
                                    <i className="fa-brands fa-facebook"></i>
                                </div>
                                <div className="icon">
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                                <div className="icon">
                                    <i className="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img src={image3} />
                        <Card.Body>
                            <Card.Title>
                                <h3>William Anderson</h3>
                                <p className="text-muted">Cardiology</p>
                            </Card.Title>
                            <div className="border-bottom"></div>
                            <Card.Text>
                            <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                            <div className="card-icons">
                                <div className="icon">
                                    <i className="fa-brands fa-twitter"></i>
                                </div>
                                <div className="icon">
                                    <i className="fa-brands fa-facebook"></i>
                                </div>
                                <div className="icon">
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                                <div className="icon">
                                    <i className="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img src={image4} />
                        <Card.Body>
                            <Card.Title>
                                <h3>Amanda Jepson</h3>
                                <p className="text-muted">Neurosurgeon</p>
                            </Card.Title>
                            <div className="border-bottom"></div>
                            <Card.Text>
                            <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                            <div className="card-icons">
                                <div className="icon">
                                    <i className="fa-brands fa-twitter"></i>
                                </div>
                                <div className="icon">
                                    <i className="fa-brands fa-facebook"></i>
                                </div>
                                <div className="icon">
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                                <div className="icon">
                                    <i className="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </section>
    )
}