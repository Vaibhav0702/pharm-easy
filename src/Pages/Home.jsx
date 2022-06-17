
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./Home.css"
import { fetchOffersData } from "../Redux/Products/action";



const Home = () => {

  const myOffers = useSelector((store) => store.ecommerceData.myOffers)


  console.log("myOffers", myOffers);

  const dispatch = useDispatch();


  useEffect(() => {


    dispatch(fetchOffersData());


  }, [dispatch])







  return (


    <>

      <div>


        <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={true} showThumbs={false} showArrows={true} swipeable={true} useKeyboardArrows={true}   >

          <div>
            <img src="https://cms-contents.pharmeasy.in/banner/374ed4b3c4e-Liveasy_diabetic_Dweb.jpg?dim=1440x0&dpr=1&q=100" alt='' />

          </div>
          <div>
            <img src="https://cms-contents.pharmeasy.in/banner/c5bfba7b457-Dweb.jpg?dim=1440x0&dpr=1&q=100" alt='' />

          </div>
          <div>
            <img src="https://cms-contents.pharmeasy.in/banner/11968e3c347-MEGA20_Dweb.jpg?dim=1440x0&dpr=1&q=100" alt='' />
          </div>

        </Carousel>




      </div>


      <div className="offers">


        <div className="oupper" >

          <div className="oupperL" >
            <img src="https://assets.pharmeasy.in/web-assets/dist/67890676.svg" alt="" />
            <p style={{ color: "gray", margin: "10px", fontWeight: "bold", fontSize: "20px" }}>Offers Just For You </p>

          </div>

          <div>
            <p style={{ color: "#10847e", margin: "10px", fontWeight: "bold", fontSize: "20px" }} >  See All Offers</p>
          </div>



        </div>



        <div>

          <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={true} showThumbs={false} showArrows={true} swipeable={true} useKeyboardArrows={true}    >

            {
              myOffers?.map((e) => {

                return (

                  <Offer image={e.image} title={e.title} code={e.code} />
                )


              })
            }

          </Carousel>



        </div>




      </div>










    </>




  )
}

export default Home




function Offer({ image, title, code }) {

  return <>

    <div className="offercontainer"  >

      <div className="offercontainerL" >
        <img   src={image} alt="" />
      </div>


      <div className="offercontainerR">
        <p >{title}</p>


        <p> Code : {code}  </p>

      </div>


    </div>




  </>


}