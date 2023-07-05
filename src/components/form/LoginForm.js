import axios from "axios";
import { Button, Input, ModalBody, ModalFooter, Select, TabPanel } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React, { useState }  from 'react'
import * as Yup from "yup";
import InputWithError from '../input/InputWithError';

const LoginForm = () => {
    const [text, setText] = useState("Login")
    const [inputOption, setInputOption] = useState("");
  
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
          alert(`[error.response.data.err] ${error.response.data.err}`);
        });
        alert("Done");
      }
    })
  
    function selectionOnChange(event) {
      if (event.target.value === "email") setInputOption("email");
      else if (event.target.value === "username") setInputOption("username");
      else if (event.target.value === "phone") setInputOption("phone");
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
                              <Button type="submit" colorScheme={"green"}>
                                {text}
                              </Button>
                            </ModalFooter>
                        </>
                        : <></>
                    }
                </form>
             </ModalBody>
         </TabPanel>
    )
}

export default LoginForm