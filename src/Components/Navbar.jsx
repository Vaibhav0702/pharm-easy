

import { CloseIcon, HamburgerIcon, Search2Icon, TriangleDownIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, IconButton, Input, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import "./Navbar.css"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Navbar = () => {


  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
  const btnRef = React.useRef();

  return (

    <>




































      <div className='navbar' >





        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={'ghost'}
          aria-label={'Toggle Navigation'}

          className="sidebar"
        />


        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />

          <DrawerContent>
            <DrawerCloseButton color={"white"} />


            <DrawerHeader backgroundColor="#10847e "   >


              <div className='logo'  >
                <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="" />
              </div>


            </DrawerHeader>

            <DrawerBody>
              <Input placeholder='Type here...' />





              <Box marginTop="10px" backgroundColor="#e1f6f5" color="gray" padding={5} rounded={5} _hover={{ backgroundColor: "#ffffff", color: "#10847e" }}  >

                <Link to="/products"   >

                  <div style={{ display: "flex" }}  >


                    <p>Order Medicine</p>


                  </div>


                </Link>


              </Box>




              <Box marginTop="10px" backgroundColor="#e1f6f5" color="gray" padding={5} rounded={5} _hover={{ backgroundColor: "#ffffff", color: "#10847e" }}  >

                <Link to="/products"   >

                  <div style={{ display: "flex" }}  >


                    <p>Health Products</p>


                  </div>


                </Link>


              </Box>

              <Box marginTop="10px" backgroundColor="#e1f6f5" color="gray" padding={5} rounded={5} _hover={{ backgroundColor: "#ffffff", color: "#10847e" }}  >

                <Link to="/shoppingcart"   >

                  <div style={{ display: "flex" }}  >


                    <p>Cart   </p>


                  </div>


                </Link>


              </Box>


              <Box marginTop="10px" backgroundColor="#e1f6f5" color="gray" padding={5} rounded={5} _hover={{ backgroundColor: "#ffffff", color: "#10847e" }}  >

                <Link to="/orders"   >

                  <div style={{ display: "flex" }}  >


                    <p>My Orders</p>


                  </div>


                </Link>


              </Box>


              <Box marginTop="10px" backgroundColor="#e1f6f5" color="gray" padding={5} rounded={5} _hover={{ backgroundColor: "#ffffff", color: "#10847e" }}  >

                <Link to="/login"   >

                  <div style={{ display: "flex" }}  >


                    <p >Login / Signup </p>


                  </div>


                </Link>


              </Box>





            </DrawerBody>



            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Close
              </Button>

            </DrawerFooter>
          </DrawerContent>
        </Drawer>

































        <div className='logo'  >

          <Link to="/"  >  <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="" /></Link>




        </div>

        <div className='navright'>


          <div className='searchbar'>

            <Button colorScheme="white" color={"#10847e"} rightIcon={<TriangleDownIcon color="gray" />} > Deliver to</Button>


            <Input variant="unstyled" color={"gray"} placeholder="Search Medicines / Health products" />


            <Button ><Search2Icon color={"gray"} /></Button>

          </div>


          <div className="navbottom">


            <div className="navbleft">
              <Link to="/products"   >
                <div>
                  Order Medicine
                </div>
              </Link>
              <Link to="/products"   >
                <div>
                  Helth Products
                </div>
              </Link>
              <div>
                Lab Tests
              </div>

            </div>

            <div className="navbright">


              <div style={{ display: "flex" }}  >
                <img src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" alt="" />

                <p> Offers</p>
              </div>



              <Link to="/login"   >


                <div style={{ display: "flex" }}  >
                  <img src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" alt="" />

                  <p>Login / Signup</p>
                </div>


              </Link>









              <Link to="/shoppingcart"   >

                <div style={{ display: "flex" }}  >
                  <img src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" alt="" />


                  <p>Cart</p>


                </div>


              </Link>



            </div>




          </div>










        </div>


      </div>


    </>

  )
}

export default Navbar