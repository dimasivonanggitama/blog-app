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
} from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PresetModal = (props) => {

  let isLoginTabPressed = true;
  let isRegisterTabPressed = false;

  // let text = "Login";
  const [text, setText] = useState("Login")
  const [colorScheme, setColorScheme] = useState("green")
  
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

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters at minimum")
      .required("Password is required")
  });

  // if (props.isOpen === false) setText("Login");
  // console.log("props.onClose: "+props.onClose)

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
      
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
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
              <TabPanel bgGradient='linear(to-b, lightgreen, white)' borderBottomRadius={15}>
                <ModalBody bg="white" borderRadius={15} padding={15} >
                  <Box>
                    <Formik
                      initialValues={{email: "", password: ""}}
                      validationSchema={LoginSchema}
                      onSubmit={(values) => {
                        console.log(values);
                      }}
                    >
                      {/* <Input type="text" placeholder='Email / Username / Nomor telepon' borderColor={"grey"} marginBottom={5}/>
                      <Input type="text" placeholder='Password' borderColor={"grey"}/> */}
                      {(props) => {
                        console.log(props)
                        return <Form>
                          <div>
                            <label htmlFor='email'>Email</label>
                            <Field type="text" name="email" placeholder="Enter Email" autoComplete="off"/>
                            <ErrorMessage component="div" name="email" style={{ color: "red"}}/>
                          </div>
                          <div>
                            <label htmlFor='password'>Password</label>
                            <Field type="password" name="password" placeholder="Enter password" />
                            <ErrorMessage component="div" name="password" style={{ color: "red"}}/>
                          </div>
                          <Button type="submit">Login</Button>
                        </Form>
                      }}
                    </Formik>
                  </Box>
                </ModalBody>
              </TabPanel>
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

          <ModalFooter>
            <Button colorScheme={colorScheme} onClick={props.onClose}>
              {text}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PresetModal