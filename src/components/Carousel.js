import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Carousel = () => {
  return (
    <Box>
    <HStack marginTop={15} marginLeft={"25%"} marginRight={"25%"} bg={'greenyellow'}>
        <Box bg={"orange"} borderRadius={15} height={"250"} width={"50%"} >
            <Text marginTop={"auto"}>This is image 1</Text>
        </Box>
        <Box bg={"blue"} borderRadius={15} height={"250"} width={"50%"} >
            <Text marginTop={"auto"} color={'white'}>This is image 2</Text>
        </Box>
    </HStack>
    <Text>1 2 3 4 5</Text>
    </Box>
  )
}

export default Carousel