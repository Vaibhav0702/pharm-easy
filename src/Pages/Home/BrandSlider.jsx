



import React from 'react'


import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';



import "./Brandslider.css";





const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8,

    },
    tablet: {
        breakpoint: { max: 1024, min: 564 },
        items: 4,

    },
    mobile: {
        breakpoint: { max: 564, min: 0 },
        items: 2,

    }
};




const BrandSlider = ({ Brands }) => {

    return (


        <>

            <div>

                <div className="oupper">
                    <div className="oupperL" >
                       
                        <p style={{ color: "gray", margin: "10px", fontWeight: "bold", fontSize: "20px" }}>Featured Brands</p>

                    </div>


                 
                </div>


             

                <Carousel     responsive={responsive}  draggable={false}  containerClass="carousel-container" showDots={false} autoPlay={true} dotListClass="custom-dot-list-style" autoPlaySpeed={4000} infinite={true} keyBoardControl={true}>


                    {
                        Brands.map((e) => {
                            return (
                                
                                  <>

                                     <div className='BrandBox'  >
                                        <div className='Bimg'><img width={"150px"} src={e.image} alt="" /></div>

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

