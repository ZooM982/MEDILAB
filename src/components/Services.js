import { Container, Row } from "react-bootstrap";




export function Services(){



    
    return (
        <section id="services" className="py-5 my-5">
            <Container>
                <Row>
                <div className='head-text'>
                    <h1 className='text-center'>Services</h1>
                    <div className='barre'>
                        <div className='barre-1'></div>
                    </div>
                    <p className='text-center'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
                        Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>
                <div className="services-card">
                    <div className="card-services">
                        <div className="icon-services">
                        <i class="fa-solid fa-heart-pulse"></i>
                        </div>
                        <h3>Lorem Ipsum</h3>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    </div>
                    <div className="card-services">
                        <div className="icon-services">
                        <span class="material-symbols-outlined">
                            prescriptions
                        </span>
                        </div>
                        <h3>Sed ut perspiciatis</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                    <div className="card-services">
                        <div className="icon-services">
                        <i class="fa-solid fa-person-circle-plus"></i>
                        </div>
                        <h3>Magni Dolores</h3>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                    </div>
                </div>
                <div className="services-card">
                    <div className="card-services">
                        <div className="icon-services">
                        <i class="fa-solid fa-dna"></i>
                        </div>
                        <h3>Nemo Enim</h3>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                    <div className="card-services">
                        <div className="icon-services">
                        <i class="fa-solid fa-wheelchair-move"></i>
                        </div>
                        <h3>Dele cardo</h3>
                        <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                    </div>
                    <div className="card-services">
                        <div className="icon-services">
                        <i class="fa-solid fa-prescription-bottle-medical"></i>
                        </div>
                        <h3>Divera don</h3>
                        <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                    </div>
                </div>
                </Row>
            </Container>
        </section>
    )
}