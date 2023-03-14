import React, { useRef, useState } from 'react'
import { Button, Col, Container, Dropdown, DropdownButton, Image, Row } from 'react-bootstrap'

function FirstSection() {

  const accordionRef = useRef(null)

  const [products,setProducts] = useState([
    {'id':'0','name':'PAAN KIWI MINT','imgC':'/background/paanFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#00A558] rounded ","textC":"text-[#00A558]",'color':'#00A558','content':'Paan Kiwi Mint is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoyIt is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy. <br/> It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy'},
    {'id':'1','name':'COMMISSIONER','imgC':'/background/commfinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#AFB1B0] rounded","textC":"text-[#AFB1B0]",'color':'#AFB1B0','content':'COMMISSIONER is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoyIt is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy. <br/> It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy'},
    {'id':'2','name':'AMERICAN FREEZER','imgC':'/background/americanFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#A130B2] rounded","textC":"text-[#A130B2]",'color':'#A130B2','content':'AMERICAN FREEZER is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoyIt is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy. <br/> It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy'},
    {'id':'3','name':'DUBAI CLASS','imgC':'/background/dubaiFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#BE9202] rounded","textC":"text-[#BE9202]",'color':'#BE9202','content':'DUBAI CLASS is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoyIt is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy. <br/> It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy'},
    {'id':'4','name':'ZAFFRAN','imgC':'/background/zaffranFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#F17E00] rounded","textC":"text-[#F17E00]",'color':'#F17E00','content':'ZAFFRAN is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoyIt is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy. <br/> It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy'},
    {'id':'5','name':'CLOVE MIX','imgC':'/background/cloveFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#8A6857] rounded","textC":"text-[#8A6857]",'color':'#8A6857','content':'CLOVE MIX is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoyIt is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy. <br/> It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy'},
    {'id':'6','name':'SPRING WATER','imgC':'/background/springFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#02A1D8] rounded","textC":"text-[#02A1D8]",'color':'#02A1D8','content':'SPRING WATER is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoyIt is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy. <br/> It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy'},
    {'id':'7','name':'DOUBLE APPLE','imgC':'/background/appleFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#E30153] rounded","textC":"text-[#E30153]",'color':'#E30153','content':'DOUBLE APPLE is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoyIt is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy. <br/> It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy'},
    {'id':'8','name':'ORIGINAL','imgC':'/background/originalFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#f2df88] rounded","textC":"text-[#f2df88]",'color':'#F5F0DA','content':'ORIGINAL is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoyIt is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy. <br/> It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy'},
    // {'id':'9','name':'LIPSTICK','imgC':'/background/boxClosed.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#B92211] rounded","textC":"text-[#B92211]",'color':'#B92211','content':`LIPSTICK is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoyIt is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy. It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy It is a flavor to relax and enjoy`}
  ])

  const [allButtons,setAllButtons]=useState([
    {"name":"Paan Kiwi Mint","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#00A558]","normalStyle":"border-2 border-[#00A558] p-2 rounded text-[#00A558] hover:text-white hover:bg-[#00A558]"},
    {"name":"Commissioner","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#AFB1B0]","normalStyle":"border-2 border-[#AFB1B0] p-2 rounded text-[#AFB1B0] hover:text-white hover:bg-[#AFB1B0]"},
    {"name":"American Frezzer","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#A130B2]","normalStyle":"border-2 border-[#A130B2] p-2 rounded text-[#A130B2] hover:text-white hover:bg-[#A130B2]"},
    {"name":"Dubai Class","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#BE9202]","normalStyle":"border-2 border-[#BE9202] p-2 rounded text-[#BE9202] hover:text-white hover:bg-[#BE9202]"},
    {"name":"Zaffran","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#F17E00]","normalStyle":"border-2 border-[#F17E00] p-2 rounded text-[#F17E00] hover:text-white hover:bg-[#F17E00]"},
    {"name":"Clove Mix","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#8A6857]","normalStyle":"border-2 border-[#8A6857] p-2 rounded text-[#8A6857] hover:text-white hover:bg-[#8A6857]"},
    {"name":"Spring Water","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#02A1D8]","normalStyle":"border-2 border-[#02A1D8] p-2 rounded text-[#02A1D8] hover:text-white hover:bg-[#02A1D8]"},
    {"name":"Double Apple","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#E30153]","normalStyle":"border-2 border-[#E30153] p-2 rounded text-[#E30153] hover:text-white hover:bg-[#E30153]"},
    {"name":"Original","selectedStyle":"p-2 rounded text-black w-[90%] bg-[#F5F0DA]","normalStyle":"border-2 border-[#F5F0DA] p-2 rounded text-[#f2df88] hover:text-black hover:bg-[#F5F0DA]"},
    // {"name":"Lipstick","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#B92211]","normalStyle":"border-2 border-[#B92211] p-2 rounded text-[#B92211] hover:text-white hover:bg-[#B92211]"},
  ])

  const [currentProduct,setCurrentProduct] = useState(products[2])

  function changeData(val){
    setCurrentProduct(products[val]);
  }
  
  return (
    <div>
      {/* <AlwaysOpenExample /> */}
      <div className=' right-2 mt-2 absolute d-lg-none bg-white'>
      <Dropdown drop='start' >     
            <Dropdown.Toggle 
            id="dropdown-custom-1"
            variant="secondary"
            size="lg"
              >Flavours</Dropdown.Toggle>
                  <Dropdown.Menu className='p-0'>
                  <div className={currentProduct.bgC} >
                  <div className='py-2 pr-4'>
                  {allButtons.map((button,i)=> 
                currentProduct.id==i?
                <Dropdown.Item className='m-2 bg-white p-1 w-[100%] rounded-lg '>
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
        <Accordion.Header ref={accordionRef}>Flavours</Accordion.Header>
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
            // onMouseOver={e => (e.currentTarget.src = '/background/boxOpened.png')}
            // onMouseLeave={e=> (e.currentTarget.src = '/background/boxOpened.png')}
            className="mt-8 scale-[80%]"
          />
          </div>
        </Col>
        <Col lg={5} md={6} >
          <div className='h-[80%] ml-[10%]'>
            <div className='mt-[13%] md:text-5xl text-4xl font-semibold'>
              <span className={currentProduct.textC}>{currentProduct.name}</span>
            </div>
            <div className='mt-12 w-[80%] text-lg'>
                {currentProduct.content}                  
            </div>
          </div>
        </Col>
        <Col md={2} className="flex justify-end mt-4 d-none d-lg-block ">
          <div className={currentProduct.bgC}>
          <div className='rounded-lg m-auto mt-4 p-1'>
            {allButtons.map((button,i)=> 
            currentProduct.id==i?
            <div className='m-2 bg-white p-1 w-[100%] rounded-lg '>
              <div className={button.selectedStyle}>{button.name}</div>
            </div>:
            <div key={i} className='m-2 bg-white p-1 rounded-lg hover:scale-105 font-semibold'>
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

export default FirstSection
