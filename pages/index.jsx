import Head from 'next/head'
import OffcanvasExample from '../components/navbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image  from 'react-bootstrap/Image'
import Link from 'next/link';
import { Button, Modal } from 'react-bootstrap'
import FirstSection from '../components/firstSection'
import { useState } from 'react'
import { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TwinsSection from '../components/twinsSection'
import ConesSection from '../components/conesSection'





export default function Home() {

  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Age Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
        {/* <iframe src="https://embed.lottiefiles.com/animation/19539" className='m-auto my-4' /> */}
          <h4>Are you 21 or older?</h4>
          <p>Our content is age restricted for guests above 21 years old</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} >Yes I,am</Button>
          <Button href='https://www.google.com/search?q=9ice' variant="secondary">No</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  useEffect(()=>{
    setModalShow(true);
  },[])

  return (
    <>
      <Head>
        <title>9ice</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/background/logo9ice.ico" />
      </Head>
      <main>
        <div className="bg-[url('/background/logo1.jpg')] bg-fixed bg-cover bg-center">
        
          <OffcanvasExample />
          
      <Container fluid className='mt-14'>
      <Row>
        <Col xs={12} lg={4} className='bg-blue-100 text-center flex-col justify-end ' >
        
          <p className='mt-8 text-blue-900 text-4xl font-extrabold font-[Georgia]'>Rolling Paper</p>
          <Link href="#rolling_paper">
          <Image alt="9ice"  
          src="/background/twinsFinal.png"
          className='m-auto h-[200px] sm:h-[350px] hover:scale-105'
          />
          </Link>
        </Col>
        <Col xs={12} lg={4} className='bg-red-100 text-center'>
        <p className='mt-8 text-red-900 text-4xl font-extrabold font-[Georgia]'>Cigarillos</p>
        <Link href="#cigarillos">
          <Image alt="9ice"  
          src="/background/cigFinal.png"
          className='m-auto h-[200px] sm:h-[400px] hover:scale-105'
          />
          </Link>
        </Col>
        <Col xs={12} lg={4} className='bg-green-100 text-center'>
        <p className='mt-8 text-green-900 text-4xl font-extrabold font-[Georgia]'>Cones</p>
        <Link href="#cones">
          <Image alt="9ice" 
          src="/background/coneFinal.png"
          className='m-auto h-[200px] sm:h-[400px] hover:scale-105'
          />
          </Link>
        </Col>
      </Row>
    </Container>

    <div>
    {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>

    <div className='bg-white pb-12' id="cigarillos">
    <FirstSection />
    </div>
    <div className='bg-gray-200 pb-12' id="rolling_paper">
    <TwinsSection />
    </div>
    <div className='bg-white pb-12'  id="cones" >
    <ConesSection />
    </div>

    <Container fluid>
      <Row>
      <Col className='text-center mt-2 mb-6 text-gray-700 p-12'>
         <div className=' w-[98%] md:w-[80%] m-auto py-2 mb-8 rounded-lg bg-white opacity-[80%] text-black'>
         <div className='text-5xl md:text-8xl font-semibold mt-12 flex justify-around font-abc'>
          <p>LIVE</p>
          <p>IT</p>
          <p>9ice</p>
         </div>
         <div className='text-lg w-[70%] m-auto mb-4'></div>
         </div>
        </Col>
      </Row>
    </Container>

    <Container fluid className='mb-10 bg-white'>
      <Row>
      <Col className='text-center p-8 pt-4 px-40'>
         {/* <div className='text-5xl mt-0 mb-4 font-[Georgia]'>Our Products</div>  */}
         <Slider {...settings}>
          <div>
            <Image alt="9ice" src="/background/slide1.png" className='w-[400px]'/>
          </div>
          <div>
            <Image alt="9ice" src="/background/slide9.png" className='w-[400px]'/>
          </div>
          <div>
            <Image alt="9ice" src="/background/slide2.png" className='w-[400px]'/>
          </div>
          <div>
            <Image alt="9ice" src="/background/slide8.png" className='w-[400px]'/>
          </div>
          <div>
            <Image alt="9ice" src="/background/slide3.png" className='w-[400px]'/>
          </div>
          <div>
            <Image alt="9ice" src="/background/slide7.png" className='w-[400px]'/>
          </div>
          <div>
            <Image alt="9ice" src="/background/slide4.png" className='w-[400px]'/>
          </div>
          <div>
            <Image alt="9ice" src="/background/slide6.png" className='w-[400px]'/>
          </div>
          <div>
            <Image alt="9ice" src="/background/slide5.png" className='w-[400px]'/>
          </div>
        </Slider>
        </Col>
      </Row>
    </Container>

    <Container fluid>
      <Row>
      <Col className='text-center mt-2 mb-6 text-gray-700 p-2'>
         <div className='w-[98%] md:w-[80%] m-auto py-4 mb-8 rounded-lg bg-white opacity-[80%] text-black'>
         <div className='text-3xl font-semibold my-4' id='contact_us'>Connect With Us</div>
         <div className='text-lg w-[90%] m-auto mb-4 font-semibold'>
          We'd love to hear from you! Whether you have a question, a suggestion, or just hi, there are several ways to get in touch with us.<br/><br/>

          Follow us on Instagram <Link href="https://instagram.com/9ice.in?igshid=MTIzZWQxMDU=" target="_blank" className='font-semibold text-[#E0406F]'> @9ice.in</Link> for the latest updates on our products and promotions.
          Use the contact form on our website to send us a message directly.</div>
         </div>
        </Col>
      </Row>
    </Container>

    <Container fluid className=' bg-white' >
      <Row className='bg-gray-200 text-center p-1'>
        <p className='text-center text-lg font-semibold mt-2'>All rights are reserved to 9ICE.in © SIPL 2023 </p>
      </Row>
    </Container>
    </div>
      </main>
    </>
  )
}
