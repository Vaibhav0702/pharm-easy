
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./Home.css"
import { fetchOffersData } from "../../Redux/Products/action";

import OfferSlide from "./OfferSlide";
import BrandSlider from "./BrandSlider";



const Home = () => {

  const myOffers = useSelector((store) => store.ecommerceData.myOffers)


  console.log("myOffers", myOffers);

  const dispatch = useDispatch();


  useEffect(() => {


    dispatch(fetchOffersData());


  }, [dispatch])







  return (


    <>

      <div >


        <Carousel  autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={true} showThumbs={false} showArrows={true} swipeable={true} useKeyboardArrows={true}   >

          <div>
            <img style={{height:"250px"}} src="https://cms-contents.pharmeasy.in/banner/374ed4b3c4e-Liveasy_diabetic_Dweb.jpg?dim=1440x0&dpr=1&q=100" alt='' />

          </div>
          <div>
            <img  style={{height:"250px"}} src="https://cms-contents.pharmeasy.in/banner/c5bfba7b457-Dweb.jpg?dim=1440x0&dpr=1&q=100" alt='' />

          </div>
          <div>
            <img  style={{height:"250px"}}    src="https://cms-contents.pharmeasy.in/banner/11968e3c347-MEGA20_Dweb.jpg?dim=1440x0&dpr=1&q=100" alt='' />
          </div>

        </Carousel>




      </div>

      <div className="offerContainer">
        <OfferSlide myOffers={myOffers} />
      </div>


      <div className="BrandContainer">
        <BrandSlider  products={myOffers} />
      </div>

      
      




    </>




  )
}

export default Home



