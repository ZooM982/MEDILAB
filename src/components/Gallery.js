/* eslint-disable jsx-a11y/anchor-is-valid */
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

    // /**
    //  * Initiate glightbox 
    //  */
    // const glightbox = GLightbox({
    //     selector: '.glightbox'
    //   });
    
    //   /**
    //    * Initiate Gallery Lightbox 
    //    */
    //   const galelryLightbox = GLightbox({
    //     selector: '.galelry-lightbox'
    //   });


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
                <a href={image1} className="galelry-lightbox">
                    <img alt='' src={image1} />
                </a>
            </div>
            <div className='image-card'>
                <a href={image2} className="galelry-lightbox">
                    <img alt='' src={image2} />
                </a>
            </div>
            <div className='image-card'>
                <a href={image3} className="galelry-lightbox">
                    <img alt='' src={image3} />
                </a>
            </div>
            <div className='image-card'>
                <a href={image4} className="galelry-lightbox">
                    <img alt='' src={image4} />
                </a>
            </div>
            <div className='image-card'>
                <a href={image5} className="galelry-lightbox">
                    <img alt='' src={image5} />
                </a>
            </div>
            <div className='image-card'>
                <a href={image6} className="galelry-lightbox">
                    <img alt='' src={image6} />
                </a>
            </div>
            <div className='image-card'>
                <a href={image7} className="galelry-lightbox">
                    <img alt='' src={image7} />
                </a>
            </div>
            <div className='image-card'>
                <a href={image8} className="galelry-lightbox">
                    <img alt='' src={image8} />
                </a>
            </div>
        </Row>
        </Container>
    </section>
  );
}