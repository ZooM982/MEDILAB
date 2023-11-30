import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import image1 from './images/gallery/gallery-1.jpg'
import image2 from './images/gallery/gallery-2.jpg'
import image3 from './images/gallery/gallery-3.jpg'
import image4 from './images/gallery/gallery-4.jpg'
import image5 from './images/gallery/gallery-5.jpg'
import image6 from './images/gallery/gallery-6.jpg'
import image7 from './images/gallery/gallery-7.jpg'
import image8 from './images/gallery/gallery-8.jpg'


export function Gallery() {
  return (
    <section id='gallery' className='py-5'>
        <Container fluid>
        <Row>
            <div className='head-text'>
                <h1 className='text-center'>Gallery</h1>
                <div className='barre'>
                        <div className='barre-1'></div>
                </div>
                <p className='text-center'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                    Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
                    Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>
            </div>
            <div className='image-card'>
                <img alt='' src={image1} />
            </div>
            <div className='image-card'>
                <img alt='' src={image2} />
            </div>
            <div className='image-card'>
                <img alt='' src={image3} />
            </div>
            <div className='image-card'>
                <img alt='' src={image4} />
            </div>
            <div className='image-card'>
                <img alt='' src={image5} />
            </div>
            <div className='image-card'>
                <img alt='' src={image6} />
            </div>
            <div className='image-card'>
                <img alt='' src={image7} />
            </div>
            <div className='image-card'>
                <img alt='' src={image8} />
            </div>
        </Row>
        </Container>
    </section>
  );
}