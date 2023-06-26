import React from 'react'
import Navbar from '../components/navbar'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import Content from '../components/Content'


const HomePage = () => {
  return (
    // <Box>
    //   <Navbar/>
    //   <Content/>
    // </Box>
    <Grid
      // templateAreas={`"header header"
                      // "nav main"
                      // "nav footer"`}
      // gridTemplateRows={'50px 1fr 30px'}
      // gridTemplateColumns={'150px 1fr'}

      templateAreas={`"header header header"
                      "leftMargin carousel rightMargin"
                      "leftMargin navbar rightMargin"
                      "leftMargin main rightMargin"
                      "footer footer footer"`}
      gridTemplateRows={'50px 1fr 1fr 1fr 30px'}
      gridTemplateColumns={'5% 1fr 5%'}
      h='500px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='orange.300' area={'header'}>
        Header
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'leftMargin'}>
       Left Margin
      </GridItem>
      <GridItem pl='2' bg='purple.300' area={'carousel'}>
        Carousel
      </GridItem>
      <GridItem pl='2' bg='yellow.300' area={'navbar'}>
        Navbar
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        Main
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'rightMargin'}>
       Right Margin
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  )
}

export default HomePage