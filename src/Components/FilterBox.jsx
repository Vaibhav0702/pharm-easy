
import { Box, Button, Radio, RadioGroup, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { fetchData } from '../Redux/Products/action'
import { useDispatch } from 'react-redux'





const FilterBox = () => {

  const [searchParams, setSearchParems] = useSearchParams();

  const [categoryValue, setCategoryValue] = useState(searchParams.getAll("category") || []);

  const [sortValue, setSortValue] = useState(searchParams.get("Sort") || "asc"); // set sort order


  const dispatch = useDispatch();

  const categoryHandler = (value) => {

    console.log(value);
    setCategoryValue(value);


  }


  const sortHandler = (value) => {

    console.log("sort", value);
    setSortValue(value);


  }








  useEffect(() => {

    if (categoryValue || sortValue) {
      setSearchParems({ category: categoryValue, sort: sortValue });

      let params = {
        category: searchParams.getAll("category"),
        _sort: "payment",
        _order: `${sortValue}`
      };


      dispatch(fetchData(params));

    }




  }, [categoryValue, setSearchParems, searchParams, dispatch, sortValue])
















  return (

    <Box>
      <Box display={{ base: "none", md: "block" }} p="1rem 2rem" >
        <Text fontSize="2xl">Filters</Text>
        <Text margin={"10px"} fontWeight="bold"  >Category</Text>
        <CheckboxGroup colorScheme='green' defaultValue={categoryValue} onChange={categoryHandler} >
          <VStack alignItems={"baseline"}>
            <Checkbox value='health-care'>Health-Care</Checkbox>
            <Checkbox value='zandu'>Zandu</Checkbox>
          </VStack>
        </CheckboxGroup>
        <Text  margin={"10px"} fontWeight="bold"  >Sort Order</Text>
        <RadioGroup onChange={sortHandler} value={sortValue}>
          <Stack direction='column'>
            <Radio value='asc'>Ascending</Radio>
            <Radio value='desc'>Descending</Radio>
          </Stack>
        </RadioGroup>

      </Box>



      <Box display={{ base: "block", md: "none" }} p="0rem 2rem"     >

        <Menu closeOnSelect={false}>
          <MenuButton as={Button} marginTop={"20px"} color={"white"} backgroundColor={"rgb(16,132,126)"}>
            Filter-Box
          </MenuButton>
          <MenuList minWidth='240px' zIndex={1000} >
            <MenuOptionGroup defaultValue={sortValue} title='Order' type='radio' onChange={sortHandler}          >
              <MenuItemOption value='asc'>Ascending</MenuItemOption>
              <MenuItemOption value='desc'>Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title='Category' type='checkbox' defaultValue={categoryValue} onChange={categoryHandler}              >
              <MenuItemOption value='zandu'>Zandu</MenuItemOption>
              <MenuItemOption value='health-care'>Health-Care</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>


      </Box>
    </Box>
  )
}

export default FilterBox