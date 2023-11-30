import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import image1 from './images/departments-1.jpg'
import image2 from './images/departments-2.jpg'
import image3 from './images/departments-3.jpg'
import image4 from './images/departments-4.jpg'
import image5 from './images/departments-5.jpg'



export function Departements() {
  return (
    <section id='departements' className='py-5'>
        <Container>
        <Row>
            <div className='head-text'>
                <h1 className='text-center'>Departments</h1>
                <div className='barre'>
                    <div className='barre-1'></div>
                </div>
                <p className='text-center'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                    Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
                    Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="premier" className='departments'>
            <Col sm={3}>
            <Nav className="flex-column navigation">
                <Nav.Item>
                <Nav.Link eventKey="premier">Cardiology</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="deuxieme">Neurology</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="troisieme">Hepatology</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="quatrieme">Pediatrics</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="cinquieme">Eye Care</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content className='departments'>
                <Tab.Pane eventKey="premier">
                    <div className='table-panel'>
                        <div className='text-part'>
                            <h1>Cardiology</h1>
                            <span>Qui laudantium consequatur laborum sit qui ad 
                                sapiente dila parde sonata raqer a videna mareta paulona marka
                            </span>
                            <p>
                                Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint.
                                Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui.
                                Est repellat minima eveniet eius et quis magni nihil.
                                Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero
                            </p>
                        </div>
                        <div className='image-part'>
                            <img alt='' src={image1}/>
                        </div>
                    </div>
                    </Tab.Pane>
                <Tab.Pane eventKey="deuxieme">
                    <div className='table-panel'>
                        <div className='text-part'>
                            <h1>Et blanditiis nemo veritatis excepturi</h1>
                            <span>
                                Qui laudantium consequatur laborum sit qui ad 
                                sapiente dila parde sonata raqer a videna mareta paulona marka
                            </span>
                            <p>
                                Ea ipsum voluptatem consequatur quis est.
                                Illum error ullam omnis quia et reiciendis sunt sunt est.
                                Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates.
                                Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal
                            </p>
                        </div>
                        <div className='image-part'>
                            <img alt='' src={image2}/>
                        </div>
                    </div>
                    </Tab.Pane>
                <Tab.Pane eventKey="troisieme">
                    <div className='table-panel'>
                        <div className='text-part'>
                            <h1>Impedit facilis occaecati odio neque aperiam sit</h1>
                            <span>
                                Eos voluptatibus quo. Odio similique illum id quidem non enim fuga.
                                Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut
                            </span>
                            <p>
                                Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam.
                                Neque necessitatibus illo rerum eum ut. 
                                Commodi ipsam minima molestiae sed laboriosam a iste odio.
                                Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae
                            </p>
                        </div>
                        <div className='image-part'>
                            <img alt='' src={image3}/>
                        </div>
                    </div>
                    </Tab.Pane>
                <Tab.Pane eventKey="quatrieme">
                    <div className='table-panel'>
                        <div className='text-part'>
                            <h1>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h1>
                            <span>
                            Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus
                            </span>
                            <p>
                                Eaque consequuntur consequuntur libero expedita in voluptas.
                                Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit.
                                Eum ex maxime error in consequatur corporis atque.
                                Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore
                            </p>
                        </div>
                        <div className='image-part'>
                            <img alt='' src={image4}/>
                        </div>
                    </div>
                    </Tab.Pane>
                <Tab.Pane eventKey="cinquieme">
                    <div className='table-panel'>
                        <div className='text-part'>
                            <h1>Est eveniet ipsam sindera pad rone matrelat sando reda</h1>
                            <span>Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</span>
                            <p>
                                Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. 
                                Omnis recusandae ut non quam ut quod eius qui. 
                                Ipsum quia odit vero atque qui quibusdam amet.
                                Occaecati sed est sint aut vitae molestiae voluptate vel
                            </p>
                        </div>
                        <div className='image-part'>
                            <img alt='' src={image5}/>
                        </div>
                    </div>
                    </Tab.Pane>
            </Tab.Content>
            </Col>
            </Tab.Container>
        </Row>
    </Container>
    </section>
  );
}