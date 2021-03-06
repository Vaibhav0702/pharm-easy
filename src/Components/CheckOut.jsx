import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Box,
    Flex,
    Image,
    Text,
} from '@chakra-ui/react'



export default function CheckOut({ cart, checkOutHandler }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box>
            <Button
                rounded={'none'}
                w={'full'}
                mt={8}
                size={'lg'}
                py={'7'}
                // bg={useColorModeValue('gray.900', 'gray.50')}
                color={useColorModeValue('white', 'gray.900')}
                  backgroundColor={"#10847e"}
                textTransform={'uppercase'}
                _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'lg',
                }}

                onClick={onOpen}

            >
                CHECKOUT
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirm Order</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        {
                            cart.map(product => {
                                return (
                                    <Box key={product.id} mb="1rem" >

                                        <Flex>

                                            <Box>

                                                <Image src={product.image} border={"1px solid black"} rounded="lg" objectFit={"contain"} alt="prod" boxSize={"100px"} />

                                            </Box>

                                            <Box maxW={"250px"} ml="1rem"   >

                                                <Text fontSize={"lg"}    >{product.title}</Text>



                                            </Box>


                                        </Flex>

                                    </Box>
                                )
                            })
                        }


                    </ModalBody>

                    <ModalFooter>


                     

                            <Button    backgroundColor={"#10847e"} color={"white"}   mr={3} onClick={checkOutHandler}>
                                Confirm
                            </Button>


                     



                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}