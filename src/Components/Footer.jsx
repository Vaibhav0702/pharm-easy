
import { Heading } from '@chakra-ui/react'
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

import "./Footer.css"

const Footer = () => {
    return (



        <>

            <div className='footerbox'>

                <div className="fcontainer">


                    <div className="fcupper">

                        <div>


                            <div>
                                <p className='fheading'>Company</p>

                                <p>About Us</p>
                                <p>Careers</p>
                                <p>Blog</p>
                                <p>Partner with PharmEasy</p>
                            </div>


                            <div>

                                <p className='fheading'>Our Services</p>

                                <p>Order Medicine</p>
                                <p>Healthcare Products</p>
                                <p>Lab Tests</p>

                            </div>

                        </div>


                        <div>

                            <p className='fheading'>Featured Categories</p>

                            <p>Covid Essentials</p>
                            <p>Personal Care</p>
                            <p>Health Food and Drinks</p>
                            <p>Skin Care</p>
                            <p>Home Care</p>
                            <p>Ayurvedic Care</p>
                            <p>Sexual Wellness</p>
                            <p>Fitness & Supplements</p>
                            <p>Mother and Baby Care</p>
                            <p>Healthcare Devices</p>
                            <p>Surgicals and Dressings</p>
                            <p>Health Condition</p>
                            <p>Diabetic Care</p>
                            <p>Elderly Care</p>
                            <p>Accessories And Wearables</p>
                            <p>Beauty</p>

                        </div>


                        <div>

                            <div>

                                <p className='fheading'>Need Help</p>

                                <p>Browse All Medicines</p>
                                <p>Browse All Molecules</p>
                                <p>Browse All Cities & Areas</p>
                                <p>FAQs</p>



                            </div>


                            <div>


                                <p className='fheading'>Policy Info</p>

                                <p>Editorial Policy</p>
                                <p>Privacy Policy</p>
                                <p>Vulnerability Disclosure Policy</p>
                                <p>Terms and condition</p>
                                <p>Customer Support Policy</p>
                                <p>Return Policy</p>





                            </div>








                        </div>


                        <div>

                            <p className='fheading'>FOLLOW US</p>

                            <div style={{display:"flex" , gap:"20px" ,marginTop:"20px"  }} >

                               <a href="https://www.instagram.com/pharmeasyapp/"  target="blank" > <BsInstagram  size="40px"  color='#10847e'   /></a>

                               <a href=""> <BsFacebook  size="40px" color='#10847e'   /></a>
                               
                                  <a href=""> <BsYoutube size="40px"  color='#10847e'  /></a>
                                 
<a href=""><BsTwitter  size="40px" color='#10847e'    /></a>
                                  


                            </div>


                        </div>




                    </div>





                </div>








            </div>




        </>







    )
}

export default Footer