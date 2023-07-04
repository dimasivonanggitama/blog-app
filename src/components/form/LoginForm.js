import axios from "axios";
import { Box, Button, Collapse, Input, ModalBody, ModalFooter, Select, TabPanel } from '@chakra-ui/react'
import { Formik, useFormik } from 'formik'
import React, { useState }  from 'react'
import * as Yup from "yup";
import InputWithError from '../input/InputWithError';

const LoginForm = () => {
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
  
    // const LoginSchema = Yup.object().shape({
    //   email: Yup.string()
    //     .email("Invalid email address format")
    //     .required("Email is required"),
    //   password: Yup.string()
    //     .min(6, "Password must be 6 characters at minimum")
    //     .required("Password is required")
    // });
  
    const loginSchema = useFormik({
      initialValues: {
        email: "",
        password: ""
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Invalid email address format")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be 6 characters at minimum")
          .required("Password is required")
      }),
      onSubmit: async values => {
        // alert(JSON.stringify(values, null, 2));

        // const axios = require("axios");
        await axios.post("https://minpro-blog.purwadhikabootcamp.com/api/auth/login", {
          username: "",
          phone: "",
          email: values.email,
          password: values.password
        }).then(resp => {
          alert(`[resp.data]: ${resp.data}`);
        }).catch(error => {
          alert(`[error] ${error}`);
        });
        alert("Done");
      }
    })
  
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
        <TabPanel bgGradient='linear(to-b, lightgreen, white)' borderBottomRadius={15}>
            <ModalBody bg="white" borderRadius={15} padding={2} >
                <form onSubmit={loginSchema.handleSubmit}>
                    <Select marginBottom="5" onChange={selectionOnChange}>
                        <option value="" disabled selected>--- Pilih jenis formulir ---</option>
                        <option value='email'>Email</option>
                        <option value='username'>Username</option>
                        <option value='phone'>Nomor telepon</option>
                    </Select>
                    <hr color="solid"/>
                    {
                        (inputOption === "email")?
                          <InputWithError 
                            errors={loginSchema.errors.email} 
                            touched={loginSchema.touched.email} 
                            presetInput={<Input type="email" name="email" placeholder='Email' bgColor="white" borderColor={"grey"} color={"black"} value={loginSchema.values.email} onChange={loginSchema.handleChange}/>}
                          />
                        : (inputOption === "username")? <Input type="text" name="username" placeholder='Username' borderColor={"grey"} marginBottom="5" value={loginSchema.values.username}/>
                        : (inputOption === "phone")? <Input type="text" name="phone" placeholder='Nomor telepon' borderColor={"grey"} marginBottom="5" value={loginSchema.values.phone}/>
                        : <></>
                    }
                    {
                        (inputOption !== "")? 
                        <>
                            <InputWithError 
                              errors={loginSchema.errors.password} 
                              touched={loginSchema.touched.password} 
                              presetInput={<Input type="password" name="password" placeholder='Password' bgColor="white" borderColor={"grey"} color={"black"} value={loginSchema.values.password} onChange={loginSchema.handleChange}/>}
                            />
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
                        
                </form>
             </ModalBody>
         </TabPanel>
    )
}

export default LoginForm

// import { Input, Box, Collapse } from '@chakra-ui/react'

// export const App = () => {
//   const bool = false;
//   const bool2 = false;
//   return <Box bgColor="lightblue" padding="1">
//     <Box
//         margin="50"
//         padding="2"
//         borderRadius="15"
//         bgColor={bool ? 'red' : 'transparent'}
//         color="white"
//         in={bool}
//         sx={{
//           "transition": "background-color 0.5s ease-out"
//         }}
//       >
//         <Input type="text" placeholder="Click on me!" bgColor="white" />
//         <Collapse in={bool}>Input belum diisi</Collapse>
//       </Box>
//     <Box  bgColor="pink" padding="5">
//       <Collapse startingHeight={20} in={bool2}>
//         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
//         terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//         labore wes anderson cred nesciunt sapiente ea proident.
//       </Collapse>
//     </Box>
//   </Box>
// }