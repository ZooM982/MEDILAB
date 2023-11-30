/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import {Container, Row, Button, Col} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';


export function Contact(){

    return (
        <section id='contact' className='py-5'>
            <Container fluid>
                <Row>
                    <div className='head-text'>
                        <h1 className='text-center'>Contact</h1>
                        <div className='barre'>
                            <div className='barre-1'></div>
                        </div>
                        <p className='text-center'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                            Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
                            Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>
                    <div className='maps'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15433.793038598997!2d-17.4531447!3d14.7437573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10dd476fedbb1%3A0x4b7c559a6d1a192b!2sBakeli%20School%20of%20Technology!5e0!3m2!1sfr!2ssn!4v1701346446692!5m2!1sfr!2ssn"
                         allowfullscreen="" 
                         loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className='contact-info'>
                        <div className='part-left'>
                            <div className='left'>
                                <div className='icon-contact'>
                                    <i className='fas fa-location'></i>
                                </div>
                                <div className='paragraph-contact'>
                                    <h3>Location :</h3>
                                    <p>Terrain de Foot, HLM Grand Yoff Villa 241
                                        <br />
                                         A côté du terminus AIBD,
                                         en face du, Dakar 11500
                                    </p>
                                </div>
                            </div>
                            <div className='left'>
                                <div className='icon-contact'>
                                    <i className='fas fa-envelope'></i>
                                </div>
                                <div className='paragraph-contact'>
                                    <h3>Email :</h3>
                                    <a href='rh@bakeli.tech'><p>rh@bakeli.tech</p></a>
                                </div>
                            </div>
                            <div className='left'>
                                <div className='icon-contact'>
                                    <i className='fas fa-mobile'></i>
                                </div>
                                <div className='paragraph-contact'>
                                    <h3>Phone :</h3>
                                    <p>785461551</p>
                                </div>
                            </div>
                        </div>
                        <div className='part-right'>
                            <Form className='text-center'>
                                <Form.Group className="d-flex">
                                    <Form.Group className="mb-3 me-1" as={Col} md="6" >
                                        <Form.Control className='rounded-0' type="text" placeholder="Your name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" as={Col} md="6">
                                        <Form.Control className='rounded-0' type="email" placeholder="Your email" />
                                    </Form.Group>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control className='rounded-0' type="text" placeholder="Subject" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control className='rounded-0' as="textarea" rows={4} />
                                </Form.Group>
                                <Button type='submit' className="btn btn-primary rounded-5 col-md-4">Send message</Button>
                            </Form>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}