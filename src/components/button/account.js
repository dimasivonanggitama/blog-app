import { Avatar, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import TabModal from '../modal/TabModal'

const Account = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Avatar 
        backgroundColor="#999999" 
        onClick={onOpen} 
        src='https://bit.ly/broken-link' 

        _hover={{ 
          cursor: "pointer",
          bg: '#666666', 
        }}
        
        _active={{
          bg: '#333333',
          transform: 'scale(0.95)',
        }}
      />

      <TabModal isOpen={isOpen} /* onOpen={onOpen} */ onClose={onClose} />
    </>
  )
}

export default Account