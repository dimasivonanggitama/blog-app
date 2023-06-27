import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'

const SearchBar = () => {
  return (
    <>
        <InputGroup margin="auto">
            <InputLeftElement pointerEvents='none'>
                <SearchIcon color='gray.300' />
            </InputLeftElement>
            <Input bg={"white"} type='text' placeholder='Cari sesuatu ...'/>
        </InputGroup>
    </>
  )
}

export default SearchBar