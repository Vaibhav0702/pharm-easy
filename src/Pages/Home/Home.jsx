
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./Home.css"
import { fetchArticalsData, fetchBrandsData, fetchData, fetchOffersData } from "../../Redux/Products/action";

import OfferSlide from "./OfferSlide";
import BrandSlider from "./BrandSlider";
import DealsSlider from "./DealsSlider";
import ArticalSlider from "./ArticalSlider";





const Home = () => {

  const myOffers = useSelector((store) => store.ecommerceData.myOffers)

  const Brands = useSelector((store) => store.ecommerceData.Brands)

  const Articals = useSelector((store) => store.ecommerceData.Articals)

  const products = useSelector((store) => store.ecommerceData.products)


  console.log("myOffers", myOffers);

  console.log("Brands", Brands);

  console.log("Articals", Articals);

  const dispatch = useDispatch();


  useEffect(() => {


    dispatch(fetchOffersData());
    
    dispatch(fetchBrandsData());

    dispatch(fetchArticalsData());

    dispatch(fetchData());


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
        <BrandSlider  Brands={Brands} />
      </div>

      
      <div className="BrandContainer">
        <DealsSlider  products={products} />
      </div>

      <div className="BrandContainer">
        <ArticalSlider  Articals={Articals} />
      </div>
      

       <div className="fixedbox">

              
              <div className="fixedBox1" >
                <div>
                  <img src="https://assets.pharmeasy.in/web-assets/dist/4d2f7c48.svg" alt="" />
                </div>

                <p className="fixedboxTitle"  >25 Millions</p>

                <p className="fixedboxPara"  >Registered Users as of jun 30, 2021</p>

              </div>
              

              <div className="fixedBox1" >
                <div>
                  <img src="https://assets.pharmeasy.in/web-assets/dist/92c372bb.svg" alt="" />
                </div>

                <p className="fixedboxTitle"  >8.8 Millions</p>

                <p className="fixedboxPara"  >Pharmeasy Orders as of FY21</p>

              </div>
              
              <div className="fixedBox1" >
                <div>
                  <img src="https://assets.pharmeasy.in/web-assets/dist/773ae9c5.svg" alt="" />
                </div>

                <p  className="fixedboxTitle"  >50K+</p>

                <p  className="fixedboxPara"  >SKUs sold in Q1FY22</p>

              </div>
              

              <div className="fixedBox1" >
                <div>
                  <img src="https://assets.pharmeasy.in/web-assets/dist/f2d557d3.svg" alt="" />
                </div>

                <p  className="fixedboxTitle"  >18K+</p>

                <p  className="fixedboxPara"  >Pin-Code Serviced for the month of June 2021 </p>

              </div>
              
        

       </div>


    </>




  )
}

export default Home



