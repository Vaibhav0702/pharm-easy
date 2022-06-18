

import React from 'react'


import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

// import { products } from './Productdata';  // local data

// import { Divider } from "@mui/material"


import "./Dealslider.css";

import { NavLink } from 'react-router-dom';

import { Badge } from "@chakra-ui/react";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,

    },
    tablet: {
        breakpoint: { max: 1024, min: 564 },
        items: 1,

    },
    mobile: {
        breakpoint: { max: 564, min: 0 },
        items: 1,

    }
};




const DealsSlider = ({ title, products }) => {

    return (


        <>

            <div className="products_section">

                <div className="oupper" style={{ backgroundColor: "#fff2f2", height: "200px", marginBottom: "-120px" }}    >
                    <div className="oupperL" >

                        <div><img src="https://assets.pharmeasy.in/web-assets/dist/cc9b301d.svg" alt="" /></div>

                        <p style={{ color: "gray", margin: "10px", fontWeight: "bold", fontSize: "20px" }}> Deals of the Day </p>

                    </div>

                    <NavLink to="/products"   >

                        <div>
                            <p style={{ color: "#10847e", margin: "10px", fontWeight: "bold", fontSize: "20px" }} >  View All </p>
                        </div>


                    </NavLink>


                </div>

                {/* <Divider /> */}

                <Carousel responsive={responsive} infinite={true} draggable={false} swipeable={true} containerClass="carousel-container" itemClass="carousel-item-padding-40-px" showDots={false} centerMode={true} autoPlay={true} dotListClass="custom-dot-list-style" autoPlaySpeed={4000} keyBoardControl={true}>


                    {
                        products.map((e) => {
                            return (
                                <NavLink to={`/products/${e.id}`}>

                                    <div className="products_items">
                                        <div className="product_img">
                                            <img src={e.image} alt="product" />
                                        </div>
                                        <p className="products_name" style={{ color: "grey" }}   >{e.title}</p>
                                        <div style={{ display: "flex", gap: "20px" }}>

                                            <p className="products_explore" style={{ textDecoration: 'line-through' }}   > MRP ₹{e.price}</p>
                                            <div>
                                                <Badge variant='solid' colorScheme='red'>{e.discount} % OFF   </Badge></div>
                                        </div>
                                        <p className="products_offer" style={{ color: "grey" }}>Price : ₹{e.payment}</p>

                                    </div>
                                </NavLink>


                            )
                        })
                    }


                </Carousel>




            </div>

        </>
    )
}

export default DealsSlider;