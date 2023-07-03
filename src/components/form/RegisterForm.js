import { Input, ModalBody, TabPanel } from '@chakra-ui/react'
import React from 'react'

const RegisterForm = () => {
  return (
    <TabPanel bgGradient='linear(to-b, pink, white)'  borderBottomRadius={15}>
        <ModalBody bg="white" borderRadius={15} padding={15} >
            <Input type="text" placeholder='Username' borderColor={"grey"} marginBottom={5}/>
            <Input type="email" placeholder='Email' borderColor={"grey"} marginBottom={5}/>
            <Input type="password" placeholder='Password' borderColor={"grey"} marginBottom={5}/>
            <Input type="password" placeholder='Konfirmasi password' borderColor={"grey"} marginBottom={5}/>
            <Input type="number" placeholder='Nomor telepon' borderColor={"grey"} />
        </ModalBody>
    </TabPanel>
  )
}

export default RegisterForm