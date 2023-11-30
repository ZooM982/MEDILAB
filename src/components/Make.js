import { Button, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';



export function Make(){
    return(
        <section id="make" className="py-5">
            <Container>
                <Row>
                <div className='head-text'>
                    <h1 className='text-center'>Make an Appointment</h1>
                    <div className='barre'>
                        <div className='barre-1'></div>
                    </div>
                    <p className='text-center'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
                        Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>
                    <Form>
                        <Row>
                        <Form.Group className="col-md-4 mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control className="rounded-0" type="text" placeholder="Your name" />
                        </Form.Group>
                        <Form.Group className="col-md-4 mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control className="rounded-0" type="email" placeholder="Your email" />
                        </Form.Group>
                        <Form.Group className="col-md-4 mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control className="rounded-0" type="number" placeholder="Your phone" />
                        </Form.Group>
                        <Form.Group className="col-md-4 mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control className="rounded-0" type="text" placeholder="Appointment date" />
                        </Form.Group>
                        <Form.Group className="col-md-4 mb-3">
                            <Form.Select className="rounded-0">
                                <option>Select Departements</option>
                                <option>Departement 1</option>
                                <option>Departement 2</option>
                                <option>Departement 3</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="col-md-4 mb-3">
                            <Form.Select className="rounded-0">
                                <option>Select Doctors</option>
                                <option>Doctor 1</option>
                                <option>Doctor 2</option>
                                <option>Doctor 3</option>
                            </Form.Select>
                        </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="text-area">
                            <Form.Control className="rounded-0" as="textarea" rows={4} placeholder="Message(optional)" />
                        </Form.Group>
                        <Button type="btn btn-primary" className="rounded-5 col-md-3 p-2 my-4">Make an Appointment</Button>
                    </Form>
                </Row>
            </Container>
        </section>
    )
}