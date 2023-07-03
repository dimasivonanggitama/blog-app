import React, { useState } from 'react'
import {
  Box,
  Button,
  // Lorem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Select,
  Text,
} from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import LoginForm from '../form/LoginForm';
import Header from '../Header';

const TabModal = (props) => {

  let isLoginTabPressed = true;
  let isRegisterTabPressed = false;

  // let text = "Login";
  const [text, setText] = useState("Login")
  const [colorScheme, setColorScheme] = useState("green")
  const [inputOption, setInputOption] = useState("");
  
  function loginTab() {
    // isLoginTabPressed = true;
    // isRegisterTabPressed = false;
    setColorScheme("green");
    setText("Login");
  }

  function registerTab() {
    // isLoginTabPressed = false;
    // isRegisterTabPressed = true;
    setColorScheme("pink");
    setText("Register");
  }

  function selectionOnChange(event) {
    if (event.target.value === "email") setInputOption("email");
    else if (event.target.value === "username") setInputOption("username");
    else if (event.target.value === "phone") setInputOption("phone");
  }

  function modalOnClose() {
    setInputOption("");
    setText("Login");
  }

  return (
    <>
      {/* <Lorem count={2} /> */}
      { /*<Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            ... This is Modal Body ...
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={props.onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      */}
      
      <Modal isOpen={props.isOpen} onClose={() => {
          modalOnClose();
          loginTab();
          props.onClose();
        }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{text}</ModalHeader>
          <ModalCloseButton />
          <Tabs isFitted variant='enclosed'>
            <TabList>
              <Tab bg="lightgreen" borderTopLeftRadius={15} onClick={() => loginTab()}>Login</Tab>
              <Tab bg="pink" borderTopRightRadius={15} onClick={() => registerTab()}>Register</Tab>
            </TabList>
            <TabPanels>
              <LoginForm />
              <TabPanel bgGradient='linear(to-b, pink, white)'  borderBottomRadius={15}>
                <ModalBody bg="white" borderRadius={15} padding={15} >
                  <Input type="text" placeholder='Username' borderColor={"grey"} marginBottom={5}/>
                  <Input type="email" placeholder='Email' borderColor={"grey"} marginBottom={5}/>
                  <Input type="password" placeholder='Password' borderColor={"grey"} marginBottom={5}/>
                  <Input type="password" placeholder='Konfirmasi password' borderColor={"grey"} marginBottom={5}/>
                  <Input type="number" placeholder='Nomor telepon' borderColor={"grey"} />
                </ModalBody>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TabModal