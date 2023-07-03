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

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters at minimum")
      .required("Password is required")
  });

  // const loginSchema = useFormik({
  //   initialValues
  // })

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
              <TabPanel bgGradient='linear(to-b, lightgreen, white)' borderBottomRadius={15}>
                <ModalBody bg="white" borderRadius={15} padding={15} >
                  <Box>
                    <Formik
                      initialValues={{email: "", password: ""}}
                      validationSchema={LoginSchema}
                      onSubmit={(values) => {
                        // console.log(`values: ${values}`);
                        // console.log(`valuesvaluesvaluesvaluesvaluesvaluesvaluesvaluesvalues`);
                      }}
                    >
                      
                      {(props) => {
                        console.log(props)
                        // console.log(`valuesvaluesvaluesvaluesvaluesvaluesvaluesvaluesvalues`);
                        return <Form>
                          {/* <div>
                            <label htmlFor='email'>Email</label>
                            <Field type="text" name="email" placeholder="Enter Email" autoComplete="off"/>
                            <ErrorMessage component="div" name="email" style={{ color: "red"}}/>
                            </div>
                            <div>
                            <label htmlFor='password'>Password</label>
                            <Field type="password" name="password" placeholder="Enter password" />
                            <ErrorMessage component="div" name="password" style={{ color: "red"}}/>
                          </div> */}
                          <Select marginBottom="5" onChange={selectionOnChange}>
                            <option value="" disabled selected>--- Pilih jenis formulir ---</option>
                            <option value='email'>Email</option>
                            <option value='username'>Username</option>
                            <option value='phone'>Nomor telepon</option>
                          </Select>
                          {
                            (inputOption === "email")? <Input type="text" name="email" placeholder='Email' borderColor={"grey"} marginBottom="5" value={Formik.value.email}/>
                            : (inputOption === "username")? <Input type="text" name="username" placeholder='Username' borderColor={"grey"} marginBottom="5" value={Formik.value.username}/>
                            : (inputOption === "phone")? <Input type="text" name="phone" placeholder='Nomor telepon' borderColor={"grey"} marginBottom="5" value={Formik.value.phone}/>
                            : <></>
                          }
                          {/* {formik.errors.full_name && formik.touched.full_name && (
                            <p>{formik.errors.full_name}</p>
                          )} */}
                          {
                            (inputOption !== "")? 
                              <>
                                <Input type="text" placeholder='Password' borderColor={"grey"} marginBottom="5" />
                                <ModalFooter>
                                  <Button type="submit" colorScheme={colorScheme} /*onClick={props.onClose}*/>
                                    {text}
                                  </Button>
                                </ModalFooter>
                              </>
                            : <></>
                          }
                          {/* <Input type="text" placeholder='This is a test' borderColor={"grey"} errorBorderColor="green" isInvalid/> */}
                          {/* <Button type="submit">Login</Button> */}
                          

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
        </ModalContent>
      </Modal>
    </>
  )
}

export default TabModal