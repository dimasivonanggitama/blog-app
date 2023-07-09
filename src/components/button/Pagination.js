import { Button, Center, Container, HStack, IconButton, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { PiArrowLeft, PiArrowRight, PiArrowLineLeftBold, PiArrowLineRightBold } from 'react-icons/pi'

const Pagination = () => {
  return (
    // <HStack>
        <Center gap="2">
        <IconButton aria-label='Left end' icon={<PiArrowLineLeftBold/>} bgColor='transparent'/>
        <IconButton aria-label='Next left' icon={<PiArrowLeft/>} bgColor='transparent'/>
        <Input value="135" maxWidth="50"/>
        <Text>dari 150</Text>
        <IconButton aria-label='Next right' icon={<PiArrowRight/>} bgColor='transparent'/>
        <IconButton aria-label='Right end' icon={<PiArrowLineRightBold/>} bgColor='transparent'/>
        </Center>
    // </HStack>
  )
}

export default Pagination