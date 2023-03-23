import React, { useRef, useState } from 'react'
import { Button, Col, Container, Dropdown, DropdownButton, Image, Row } from 'react-bootstrap'

function TwinsSection() {

  const accordionRef = useRef(null)

  const [products,setProducts] = useState([
    {'id':'0','name':'TWINS BROWN','imgC':'/background/twinsBrown.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#B18D17] rounded","textC":"text-[#B18D17]",'color':'#B18D17',
    'content':"The 9ice Brown Twin Packs are a premium smoking accessory made from the world's thinnest French rolling paper, providing a slow, even burn that enhances tobacco flavors. They are made from natural, organic materials and crafted to high-quality standards, ensuring they are free from harmful chemicals and additives. Each twin pack comes with filters to reduce harshness and provide a satisfying hit. They offer a smooth and clean smoking experience, making them a must-have for both new and seasoned smokers."},
    {'id':'1','name':'TWINS WHITE','imgC':'/background/twinsWhite.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#999797] rounded","textC":"text-[#999797]",'color':'#999797',
    'content':"The 9ice White Twin Packs are a premium smoking accessory made from the world's thinnest French rolling paper, providing a slow, even burn that enhances tobacco flavors. They are made from natural, organic materials and crafted to high-quality standards, ensuring they are free from harmful chemicals and additives. Each twin pack comes with filters to reduce harshness and provide a satisfying hit. They offer a smooth and clean smoking experience, making them a must-have for both new and seasoned smokers."}
  ])

  const [allButtons,setAllButtons]=useState([
    {"name":"TWINS BROWN","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#B18D17]","normalStyle":"border-2 border-[#B18D17] p-2 rounded text-[#B18D17] hover:text-white hover:bg-[#B18D17]"},
    {"name":"TWINS WHITE","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#999797]","normalStyle":"border-2 border-[#999797] p-2 rounded text-[#999797] hover:text-white hover:bg-[#999797]"},
  ])

  const [currentProduct,setCurrentProduct] = useState(products[0])

  function changeData(val){
    setCurrentProduct(products[val]);
  }
  
  return (
    <div>
      {/* <AlwaysOpenExample /> */}
      <div className=' right-2 mt-2 absolute d-lg-none bg-white font-second'>
      <Dropdown drop='start' >     
            <Dropdown.Toggle 
            id="dropdown-custom-1"
            variant="secondary"
            size="lg"
              >Twins</Dropdown.Toggle>
                  <Dropdown.Menu className='p-0'>
                  <div className={currentProduct.bgC} >
                  <div className='py-2 pr-4'>
                  {allButtons.map((button,i)=> 
                currentProduct.id==i?
                <Dropdown.Item key={i} className='m-2 bg-white p-1 w-[100%] rounded-lg font-semibold'>
                  <div className={button.selectedStyle}>{button.name}</div>
                </Dropdown.Item>:
                <Dropdown.Item key={i} className='m-2 bg-white p-1 rounded-lg hover:scale-105 font-semibold'>
                  <div className={button.normalStyle} onClick={()=>changeData(i)} >{button.name}</div>
                </Dropdown.Item>
                )}
                  </div></div>
                  </Dropdown.Menu>
            </Dropdown>
      {/* <Accordion >
      <Accordion.Item  eventKey="0">
        <Accordion.Header ref={accordionRef}>flavors</Accordion.Header>
        <Accordion.Body className='p-0 pb-0'>
        
            
          </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}
    </div>

      <Container fluid className='mb-8'>
      <Row >
        <Col lg={5} md={6} >
          <div>
          <Image
            src={currentProduct.imgC}
            alt="9iceImage"
            // onMouseOver={e => (e.currentTarget.src = '/background/boxOpened.png')}
            // onMouseLeave={e=> (e.currentTarget.src = '/background/boxOpened.png')}
            className="mt-8 scale-[90%]"
          />
          </div>
        </Col>
        <Col lg={5} md={6} >
          <div className=''>
            <div className='mt-[8%] md:text-5xl text-4xl font-semibold text-center font-second'>
              <span className={currentProduct.textC}>{currentProduct.name}</span>
            </div>
            <div className=' p-4 text-xl text-justify '>
                {currentProduct.content}                  
            </div>
          </div>
        </Col>
        <Col md={2} className="flex justify-end mt-4 d-none d-lg-block ">
          <div className={currentProduct.bgC}>
          <div className='rounded-lg m-auto mt-4 p-1 font-second'>
            {allButtons.map((button,i)=> 
            currentProduct.id==i?
            <div key={i} className='m-2 bg-gray-200 p-1 w-[100%] rounded-lg text-lg font-bold'>
              <div className={button.selectedStyle}>{button.name}</div>
            </div>:
            <div key={i} className='m-2 bg-gray-200 p-1 rounded-lg hover:scale-105 text-lg font-bold'>
              <div className={button.normalStyle} onClick={()=>changeData(i)}>{button.name}</div>
            </div>
            )}
          </div>
          </div>   
          
        </Col>
      </Row>
     
    </Container>
    
    </div>
  )
}

export default TwinsSection

