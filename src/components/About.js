import { Container, Row } from "react-bootstrap";
import Image from "./images/about.jpg";


export function About(){
    return (
        <section id="about" className="py-5">
        <Container fluid>
            <Row>
                <div className="about-left">
                    <img alt="" src={Image}></img>
                </div>
                <div className="about-right">
                    <h1>Enim quis est voluptatibus aliquid consequatur fugiat</h1>
                    <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. 
                        Non ipsam et sed minima temporibus laudantium. 
                        Soluta voluptate sed facere corporis dolores excepturi. 
                        Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.
                    </p>
                    <div className="about-text">
                        <div className="about-icon">
                        <i class="fa-solid fa-fingerprint"></i>
                        </div>
                        <div className="about-paragraph">
                            <h3>Lorem Ipsum</h3>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas 
                                molestias excepturi sint occaecati cupiditate non provident
                            </p>
                        </div>
                    </div>
                    <div className="about-text">
                        <div className="about-icon">
                        <i class="fa-solid fa-gift"></i>
                        </div>
                        <div className="about-paragraph">
                            <h3>Nemo Enim</h3>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                                blanditiis praesentium voluptatum deleniti atque
                            </p>
                        </div>
                    </div>
                    <div className="about-text">
                        <div className="about-icon">
                        <i class="fa-solid fa-atom"></i>
                        </div>
                        <div className="about-paragraph">
                            <h3>Dine Pad</h3>
                            <p>Explicabo est voluptatum asperiores consequatur magnam. 
                                Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                            </p>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </section>
    )
}