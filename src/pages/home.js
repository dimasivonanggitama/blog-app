import React from 'react'
import Header from '../components/Header'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import Content from '../components/Content'


const HomePage = () => {
  return (
    // <Box>
    //   <Navbar/>
    //   <Content/>
    // </Box>
    <Grid
      templateAreas={`"header header header"
                      "leftMargin carousel rightMargin"
                      "leftMargin navbar rightMargin"
                      "leftMargin main rightMargin"
                      "footer footer footer"`}
      gridTemplateRows={'0fr 1fr 1fr 1fr 30px'}
      gridTemplateColumns={'5% 1fr 5%'}
      h='500px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem bg='orange.300' area={'header'}>
        <Header/>
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