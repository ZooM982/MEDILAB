import { Container, Row } from "react-bootstrap"



export function Count(){
    return (
        <section id="counts" class="counts">
            <Container>
                <Row>
                    <div class="col-lg-3 col-md-6">
                        <div class="count-box">
                        <div className="box">
                            <i class="fas fa-user-md"></i>
                        </div>
                        <span class="num">85</span>
                        <p>Doctors</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div class="count-box">
                        <div className="box">
                            <i class="far fa-hospital"></i>
                        </div>
                        <span class="num">18</span>
                        <p>Departments</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div class="count-box">
                        <div className="box">
                            <i class="fas fa-flask"></i>
                        </div>
                        <span class="num">12</span>
                        <p>Research Labs</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div class="count-box">
                        <div className="box">
                            <i class="fas fa-award"></i>
                        </div>
                        <span  class="num">150</span>
                        <p>Awards</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}