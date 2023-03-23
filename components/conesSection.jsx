import React, { useRef, useState } from 'react'
import { Button, Col, Container, Dropdown, DropdownButton, Image, Row } from 'react-bootstrap'

function ConesSection() {

  const accordionRef = useRef(null)

  const [products,setProducts] = useState([
    {'id':'0','name':'BROWN CONES','imgC':'/background/conesBrown.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#B18D17] rounded","textC":"text-[#B18D17]",'color':'#B18D17',
    'content':"Introducing the 9ice Brown Pre-Rolled Cones - The ultimate solution for smokers who demand the best. Made from unbleached, natural brown paper, these cones offer a fuller flavor and faster burn than white cones. They are also crafted from organic materials, free from harmful chemicals, and include multi-use protectors for safe storage. What sets the 9ice Pre-Rolled Cones apart from other pre-rolled cones on the market is their multi-use protectors. These protectors are included with every cone, ensuring that you can safely store your cones for later use without damaging them. It's a simple yet innovative solution that makes these cones the first of their kind on the market. "},
    {'id':'1','name':'WHITE CONES','imgC':'/background/conesWhite.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#999797] rounded","textC":"text-[#999797]",'color':'#999797',
    'content':"Introducing the 9ice White Pre-Rolled Cones - The ultimate solution for smokers who demand the best. Made from the world's thinnest French rolling paper, these cones offer a slow, even burn that enhances tobacco flavors. Crafted from natural, organic materials and free from harmful chemicals, each cone includes a multi-use protector for safe storage. What sets the 9ice Pre-Rolled Cones apart from other pre-rolled cones on the market is their multi-use protectors. These protectors are included with every cone, ensuring that you can safely store your cones for later use without damaging them. It's a simple yet innovative solution that makes these cones the first of their kind on the market. "},
    {'id':'2','name':'SLIMS Cones','imgC':'/background/jarCones.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#F8B497] rounded","textC":"text-[#F8B497]",'color':'#F8B497',
    'content':"Experience the convenience and quality of 9ice #Slims pre-rolled cones with protector. Each jar contains 25 ultra-thin cones made with the world's thinnest French rolling paper, ensuring a slow and natural burn. With the added protector, you can rest easy knowing your cones are protected and ready to use whenever you need them. Our pre-rolled cones are natural and free from harmful chemicals, providing a clean and enjoyable smoking experience. Upgrade your smoking ritual with the convenience and quality of 9ice #Slims pre-rolled cones."}
    
  ])

  const [allButtons,setAllButtons]=useState([
    {"name":"BROWN CONES","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#B18D17]","normalStyle":"border-2 border-[#B18D17] p-2 rounded text-[#B18D17] hover:text-white hover:bg-[#B18D17]"},
    {"name":"WHITE CONES","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#999797]","normalStyle":"border-2 border-[#999797] p-2 rounded text-[#999797] hover:text-white hover:bg-[#999797]"},
    {"name":"SLIMS Cones","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#F8B497]","normalStyle":"border-2 border-[#F8B497] p-2 rounded text-[#F8B497] hover:text-white hover:bg-[#F8B497]"},
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
              >Cones</Dropdown.Toggle>
                  <Dropdown.Menu className='p-0 '>
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
            <div className=' p-4 text-xl text-justify'>
                {currentProduct.content}                  
            </div>
          </div>
        </Col>
        <Col md={2} className="flex justify-end mt-4 d-none d-lg-block ">
          <div className={currentProduct.bgC}>
          <div className='rounded-lg m-auto mt-4 p-1 font-second'>
            {allButtons.map((button,i)=> 
            currentProduct.id==i?
            <div key={i} className='m-2 bg-white p-1 w-[100%] rounded-lg text-lg font-bold'>
              <div className={button.selectedStyle}>{button.name}</div>
            </div>:
            <div key={i} className='m-2 bg-white p-1 rounded-lg hover:scale-105 text-lg font-bold'>
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

export default ConesSection

