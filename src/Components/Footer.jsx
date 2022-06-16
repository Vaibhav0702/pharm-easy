

import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

import { FaGooglePay } from "react-icons/fa"

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

                            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }} >

                                <a href="https://www.instagram.com/pharmeasyapp/" target="blank" > <BsInstagram size="40px" color='#10847e' /></a>

                                <a href="https://www.facebook.com/pharmeasy/" target="blank"     > <BsFacebook size="40px" color='#10847e' /></a>

                                <a href="https://www.youtube.com/channel/UCDats_DLX-bGZH3-KGu8JhA" target="blank"      > <BsYoutube size="40px" color='#10847e' /></a>

                                <a href="https://www.twitter.com/pharmeasyapp/" target="blank"      ><BsTwitter size="40px" color='#10847e' /></a>



                            </div>


                        </div>




                    </div>


                    <div>

                        <p className='fheading'>Our Payment Partners</p>


                        <div className="fclower"   >

                            <div className="fclleft" >

                                <img width="80px" src="https://www.logo.wine/a/logo/Google_Pay/Google_Pay-Logo.wine.svg" alt="" />

                                <img width="80px" src="https://www.logo.wine/a/logo/PhonePe/PhonePe-Logo.wine.svg" alt="" />

                                <img width="80px" src="https://www.logo.wine/a/logo/Paytm/Paytm-Logo.wine.svg" alt="" />

                                <img width="80px" src="https://www.logo.wine/a/logo/Amazon_Pay/Amazon_Pay-Logo.wine.svg" alt="" />

                                <img width="80px" src="https://www.logo.wine/a/logo/MobiKwik/MobiKwik-Logo.wine.svg" alt="" />

                                <img width="80px" src="https://www.logo.wine/a/logo/Airtel_India/Airtel_India-Logo.wine.svg" alt="" />

                                <img width="80px" src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" alt="" />

                                <img  width="80px" src="https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg" alt="" />
                               


                            </div>

                            <div style={{color:"gray"}}>
                                <p>© 2022 PharmEasy. All Rights Reserved</p>
                            </div>


                        </div>

                    </div>




                </div>








            </div>




        </>







    )
}

export default Footer