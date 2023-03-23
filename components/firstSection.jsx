import React, { useRef, useState } from 'react'
import { Button, Col, Container, Dropdown, DropdownButton, Image, Row } from 'react-bootstrap'

function FirstSection() {

  const accordionRef = useRef(null)

  const [products,setProducts] = useState([
    {'id':'0','name':'PAAN KIWI MINT','imgC':'/background/paanFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#00A558] rounded ","textC":"text-[#00A558]",'color':'#00A558',
    'content':"Experience the exotic blend of Paan Kiwi Mint flavor by 9ice Cigarillos. These handcrafted cigarillos are made using the world's thinnest French rolling papers, ensuring a smooth and even burn. The top-quality Golden Virginia tobacco blends perfectly with the natural flavors of fresh kiwi and refreshing mint, with a hint of Paan, giving you a unique smoking experience that you won't find anywhere else. Packaged in an attractive wooden box, each pack contains 9 cigarillos that last longer than regular cigarettes. The Spiral Smoothflow filters add to the smoking experience, ensuring a cool and comfortable draw every time. Experience the taste of India with every puff of our Paan Kiwi Mint cigarillos and elevate your smoking experience to a whole new level. Try it now and discover why 9ice Cigarillos is the perfect choice for discerning smokers who demand nothing but the best."},
    {'id':'1','name':'COMMISSIONER','imgC':'/background/commfinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#AFB1B0] rounded","textC":"text-[#AFB1B0]",'color':'#AFB1B0',
    'content':"9ice Commissioner flavor is the perfect cigarillo blend for those who crave an elevated smoking experience. Crafted with precision and care, each 9ice cigarillo is hand rolled and made with the thinnest French rolling papers, resulting in a satisfying smoking experience with every puff. The Commissioner flavor is a perfect blend of premium Golden Virginia tobacco and spices, delivering a rich, robust flavor with hints of sweet and spicy notes. Each pack comes in a beautifully designed wooden box and contains 9 cigarillos that offer a longer-lasting smoke compared to regular cigarettes. With the addition of Spiral Smoothflow filters, each puff delivers a cool and comfortable draw that enhances the overall smoking experience. Whether you are a seasoned smoker or a beginner, 9ice Commissioner flavor is sure to impress with its high-quality ingredients and expert craftsmanship. So, light up a 9ice Commissioner cigarillo, sit back, and savour the rich flavor and aroma of this premium cigarillo."},
    {'id':'2','name':'AMERICAN FREEZER','imgC':'/background/americanFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#A130B2] rounded","textC":"text-[#A130B2]",'color':'#A130B2',
    'content':"Indulge in the cool and refreshing taste of 9ice American Freezer hand rolled cigarillos These premium cigarillos are crafted using the world's thinnest French rolling papers, which perfectly complement the top-quality Golden Virginia tobacco blends. Infused with natural flavors, including menthol, spearmint, and icy mint, these cigarillos offer a smooth and invigorating smoke that is sure to satisfy your cravings. Packaged in an attractive wooden box, each pack contains 9 cigarillos that last longer than regular cigarettes. Each cigarillo is meticulously crafted with a Spiral Smoothflow filter to ensure consistency and quality, providing a satisfying smoke every time. Whether you're looking to unwind after a hot summer day or elevate your smoking experience, 9ice American Freezer is the perfect choice for those who crave a fresh and flavorful smoking experience."},
    {'id':'3','name':'DUBAI CLASS','imgC':'/background/dubaiFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#BE9202] rounded","textC":"text-[#BE9202]",'color':'#BE9202',
    'content':"Experience the Arabic opulence with every puff of our 9ice Dubai Class flavor hand rolled cigarillos. Our expert blenders have carefully crafted a unique blend of top-quality Golden Virginia tobacco infused with natural flavors, spices and herbs that will transport you to the luxurious streets of Marina. Using the world's thinnest French rolling papers, each cigarillo is meticulously hand rolled by our skilled artisans, ensuring a consistent and smooth draw every time. Our cigarillos are designed to last longer than cigarettes, and they come with a Spiral Smoothflow filter that enhances your smoking experience. Our 9ice Dubai Class flavored cigarillos are packaged in an attractive wooden box that adds a touch of sophistication to your smoking experience. Each pack contains 9 cigarillos, making it convenient to carry them with you wherever you go.  Immerse yourself in the exotic and luxurious flavors of 9ice and indulge in the sophistication that comes with every cigarillo. Discover the perfect smoking experience with 9ice Dubai Class flavored cigarillos"},
    {'id':'4','name':'ZAFFRAN','imgC':'/background/zaffranFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#F17E00] rounded","textC":"text-[#F17E00]",'color':'#F17E00',
    'content':"Experience the exotic and luxurious flavors of 9ice Zaffran hand rolled cigarillos. Each cigarillo is crafted using the world's thinnest French rolling papers, perfectly complementing the top-quality Golden Virginia tobacco blends infused with the essence of the rare and precious Zaffran spice. This unique blend offers a distinct and unforgettable smoking experience that is sure to satisfy even the most discerning smokers. Our cigarillos are designed to last longer than cigarettes, and they come with a Spiral Smoothflow filter that enhances your smoking experience. Each pack of 9ice cigarillos comes packaged in a beautiful wooden box, perfect for those who appreciate the finer things in life. Each cigarillo is meticulously crafted by skilled artisans, ensuring consistency in flavor and quality. The subtle sweetness and complex aroma of our Zaffran cigarillos make them the perfect choice for those who appreciate the finer things in life. Enjoy the rich flavor and smooth smoke of 9ice Zaffran cigarillos and savour the essence of luxury."},
    {'id':'5','name':'CLOVE MIX','imgC':'/background/cloveFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#8A6857] rounded","textC":"text-[#8A6857]",'color':'#8A6857',
    'content':"Indulge in the unique and exotic taste of 9ice Clove Mix hand rolled cigarillos. Meticulously crafted with a blend of premium Golden Virginia tobacco, clove, and other secret spices, each cigarillo delivers a bold and flavorful smoking experience. Our expert craftsmen utilize the world's thinnest French rolling papers and Spiral Smoothflow filters in the creation of our cigarillos, resulting in a smoking experience that is both cool and comfortable with a smooth draw and even burn. Countless hours of dedication and precision are put into the rolling and packing of each cigarillo, ensuring that every puff is a pleasure. Packaged in an attractive wooden box, each pack contains 9 cigarillos that last longer than regular cigarettes. Perfect for those who want to explore the rich and complex world of cigarillos, 9ice Clove Mix offers a truly unforgettable smoking experience."},
    {'id':'6','name':'SPRING WATER','imgC':'/background/springFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#02A1D8] rounded","textC":"text-[#02A1D8]",'color':'#02A1D8',
    'content':"Indulge in the crisp and refreshing taste of Spring Water with 9ice Cigarillos. Each hand rolled cigarillo is crafted using the world's thinnest French rolling papers, ensuring a smooth and even burn with a unique flavor profile. Packaged in an attractive wooden box, each pack contains 9 cigarillos that last longer than regular cigarettes. The Spiral Smoothflow filters add to the smoking experience, ensuring a cool and comfortable draw every time. The Spring Water flavor offers a cool and invigorating sensation with every puff, transporting you to a serene mountain spring. Made with the Golden Virginia tobacco and natural ingredients, 9ice Spring Water cigarillos are the perfect choice for smokers who appreciate quality and flavor. Experience the essence of pure freshness with every smoke of 9ice Spring Water flavored cigarillos."},
    {'id':'7','name':'DOUBLE APPLE','imgC':'/background/appleFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#E30153] rounded","textC":"text-[#E30153]",'color':'#E30153',
    'content':"Indulge in the sweet and fruity aroma of our hand rolled 9ice Double Apple cigarillos. Made with top-quality Golden Virginia tobacco, each cigarillo is craftily infused with the delicious flavor of juicy double apple, giving you a refreshing and satisfying smoking experience. Each cigarillo is meticulously handcrafted with the world's thinnest French rolling paper, ensuring a smooth and even burn with a Spiral Smoothflow filter, allowing you to savour every moment. Packaged in an attractive wooden box, our cigarillos last longer than cigarettes and come in a pack of 9 for convenience. Elevate your smoking experience with 9ice Double Apple flavored cigarillos - the perfect blend of quality and flavor."},
    {'id':'8','name':'ORIGINAL','imgC':'/background/originalFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#f2df88] rounded","textC":"text-[#f2df88]",'color':'#F5F0DA',
    'content':"Experience a timeless smoking tradition with our 9ice Original hand rolled cigarillos, expertly crafted with the world's thinnest French rolling papers and infused with natural flavors. Our cigarillos are made using only the finest blend of top-quality Golden Virginia tobacco, ensuring a rich and smooth taste that is perfect for any occasion. Whether you're relaxing after a long day or enjoying a night out with friends, 9ice Original cigarillos are the perfect choice. Packaged in an attractive wooden box, each pack contains 9 cigarillos that last longer than cigarettes. Our Spiral Smoothflow filters provide a consistent burn and smooth draw, making each smoking experience truly satisfying. Try 9ice Original flavored cigarillos today and discover the true essence of a classic smoke."},
    {'id':'9','name':'LIPSTICK','imgC':'/background/lipstickFinal.png','imgO':'/background/boxOpened.png',"bgC":"bg-[#B92211] rounded","textC":"text-[#B92211]",'color':'#B92211',
    'content':"Indulge in the luxurious experience of 9ice Lipstick flavor hand rolled cigarillos, made with the world's thinnest French rolling papers and a blend of top-quality Golden Virginia tobacco infused with earthy rose and jasmine that delivers a one-of-a-kind smoking experience. Each cigarillo is craftily hand rolled to perfection with a Spiral Smoothflow filter, ensuring a consistent and smooth draw every time. Our 9ice Lipstick flavored cigarillos are packaged in an attractive wooden box, last longer than cigarettes and come in a pack of 9 for convenience. Elevate your smoking ritual with our exotic and unique flavors, and enjoy the sophistication and elegance that comes with every 9ice cigarillo."}
  ])

  const [allButtons,setAllButtons]=useState([
    {"name":"Paan Kiwi Mint","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#00A558]","normalStyle":"border-2 border-[#00A558] p-2 rounded text-[#00A558] hover:text-white hover:bg-[#00A558]"},
    {"name":"Commissioner","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#AFB1B0]","normalStyle":"border-2 border-[#AFB1B0] p-2 rounded text-[#AFB1B0] hover:text-white hover:bg-[#AFB1B0]"},
    {"name":"American Freezer","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#A130B2]","normalStyle":"border-2 border-[#A130B2] p-2 rounded text-[#A130B2] hover:text-white hover:bg-[#A130B2]"},
    {"name":"Dubai Class","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#BE9202]","normalStyle":"border-2 border-[#BE9202] p-2 rounded text-[#BE9202] hover:text-white hover:bg-[#BE9202]"},
    {"name":"Zaffran","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#F17E00]","normalStyle":"border-2 border-[#F17E00] p-2 rounded text-[#F17E00] hover:text-white hover:bg-[#F17E00]"},
    {"name":"Clove Mix","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#8A6857]","normalStyle":"border-2 border-[#8A6857] p-2 rounded text-[#8A6857] hover:text-white hover:bg-[#8A6857]"},
    {"name":"Spring Water","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#02A1D8]","normalStyle":"border-2 border-[#02A1D8] p-2 rounded text-[#02A1D8] hover:text-white hover:bg-[#02A1D8]"},
    {"name":"Double Apple","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#E30153]","normalStyle":"border-2 border-[#E30153] p-2 rounded text-[#E30153] hover:text-white hover:bg-[#E30153]"},
    {"name":"Original","selectedStyle":"p-2 rounded text-black w-[90%] bg-[#F5F0DA]","normalStyle":"border-2 border-[#F5F0DA] p-2 rounded text-[#f2df88] hover:text-black hover:bg-[#F5F0DA]"},
    {"name":"Lipstick","selectedStyle":"p-2 rounded text-white w-[90%] bg-[#B92211]","normalStyle":"border-2 border-[#B92211] p-2 rounded text-[#B92211] hover:text-white hover:bg-[#B92211]"},
  ])

  const [currentProduct,setCurrentProduct] = useState(products[2])

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
              >Flavors</Dropdown.Toggle>
                  <Dropdown.Menu className='p-0 font-semibold text-lg'>
                  <div className={currentProduct.bgC} >
                  <div className='py-2 pr-4'>
                  {allButtons.map((button,i)=> 
                currentProduct.id==i?
                <Dropdown.Item key={i} className='m-2 bg-white p-1 w-[100%] rounded-lg '>
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
              <span className={currentProduct.textC} >{currentProduct.name}</span>
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
            <div key={i} className='m-2 bg-white p-1 w-[100%] rounded-lg text-lg font-semibold'>
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

export default FirstSection
