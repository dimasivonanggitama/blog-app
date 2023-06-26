import { Box } from '@chakra-ui/react'
import React from 'react'
import Carousel from './Carousel'
import CategoriesButton from './button/CategoriesButton'


const Content = () => {
  return (
    <Box bg="grey">
      <Box marginTop={15} marginLeft={"5%"} marginRight={"5%"} bg={'yellowgreen'}>
          <Carousel />
          <CategoriesButton/>
      </Box>
    </Box>
  )
}

export default Content