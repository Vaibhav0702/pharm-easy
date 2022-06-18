





import React from 'react'


import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import { Button } from '@chakra-ui/react';

import{ ChevronRightIcon }from "@chakra-ui/icons"


import "./ArticalSlider.css";





const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,

    },
    tablet: {
        breakpoint: { max: 1024, min: 564 },
        items: 2,

    },
    mobile: {
        breakpoint: { max: 564, min: 0 },
        items: 1,

    }
};




const ArticalSlider = ({ Articals }) => {

    return (


        <>

            <div>

                <div className="oupper">
                    <div className="oupperL" >

                        <p style={{ color: "gray", margin: "10px", fontWeight: "bold", fontSize: "20px" }}>Health Articles</p>

                    </div>

                    <div>
                        <p style={{ color: "#10847e", margin: "10px", fontWeight: "bold", fontSize: "20px" }} >  See All </p>
                    </div>




                </div>




                <Carousel responsive={responsive} draggable={false} containerClass="carousel-container" showDots={false} autoPlay={true} dotListClass="custom-dot-list-style" autoPlaySpeed={4000} infinite={true} keyBoardControl={true}>


                    {
                        Articals.map((e) => {
                            return (

                                <>

                                    <div className='ArticalBox'  >
                                        
                                        <div className='Aimg'><img src={e.image} alt="" /></div>

                                        <div>
                                            <p  style={{fontWeight:"bold" ,color:"gray", margin:"10px" }} >{e.title}</p>
                                            <p   style={{color:"gray", margin:"10px" }} >{e.description}</p>
                                            <Button  color="#10847e "    variant='ghost' rightIcon={<ChevronRightIcon/>} > Read More </Button>
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

export default ArticalSlider;