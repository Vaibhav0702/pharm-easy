



import React from 'react'


import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';



import "./Brandslider.css";





const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,

    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,

    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,

    }
};




const BrandSlider = ({ products }) => {

    return (


        <>

            <div>

                <div className="oupper">
                    <div className="oupperL" >
                       
                        <p style={{ color: "gray", margin: "10px", fontWeight: "bold", fontSize: "20px" }}>Featured Brands</p>

                    </div>


                 
                </div>


         

                <Carousel   responsive={responsive}  draggable={false}  containerClass="carousel-container" itemClass="carousel-item-padding-40-px" showDots={false} autoPlay={true} dotListClass="custom-dot-list-style" autoPlaySpeed={3000} infinite={true} keyBoardControl={true}>


                    {
                        products.map((e) => {
                            return (
                                
                                  <>

                                     <div className='OfferBox'  >
                                        <div className='Oimg'><img width={"60px"} src={e.image} alt="" /></div>

                                         <div className='textD'>
                                            
                                            <p>{e.title}</p>
                                             
                                             <p> Code : {e.code}</p>

                                         </div>



                                     </div>
                                  
                                  
                                  </>


                            )
                        })
                    }


                </Carousel>




            </div>

        </>
    )
}

export default BrandSlider;