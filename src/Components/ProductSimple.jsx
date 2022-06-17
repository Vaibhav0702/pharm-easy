import { Badge, Box, Center, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function ProductSimple({ id, image, title, price, payment , discount }) {
    return (
        <>
            <Link to={`/products/${id}`} >

                <Center py={12} >
                    <Box
                    
                        role={'group'}
                        p={6}
                        maxW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        _hover={{ cursor: "pointer", border: "1px solid #10847e" }}
                        zIndex={1}>

                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'200px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${image})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}>
                            <Image
                                rounded={'lg'}
                                height={200}
                                width={282}
                                marginTop={"50px"}
                                objectFit={'contain'}
                                src={image}
                            />
                        </Box>
                        <Stack pt={10} align={'center'}>
                            <Box w="100%" >
                                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} color={'gray.700'}    >
                                    {title}
                                </Heading>

                            </Box>
                            <Box w="100%"    >
                                <Stack direction={"column"} align={'left'}>

                                    <Stack direction={"row"}  gap="30px" marginTop={"10px"}    >
                                        <Text textDecoration={'line-through'} color={'gray.600'}>

                                            MRP ₹{price}
                                        </Text>

                                        <Badge variant='solid' colorScheme='red'>{discount} % OFF   </Badge>

                                    </Stack>
                                    <Text fontWeight={800} fontSize={'xl'} color={'gray.700'}   >
                                        ₹{payment}
                                    </Text>

                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Center>
            </Link>
        </>
    );
}




