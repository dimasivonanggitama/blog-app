import { Button, Input, ModalBody, ModalFooter, TabPanel } from '@chakra-ui/react'
import React from 'react'
import InputWithError from '../input/InputWithError'
import { useFormik } from 'formik'
import * as Yup from "yup";
import axios from 'axios';

const RegisterForm = () => {
  
  const registerSchema = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Username must be 3 characters at minimum")
        .required("Username is required"),
      email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
      phone: Yup.string()
        .min(10, "Phone number must be 10 characters at minimum")
        .max(13, "Phone number must be 13 characters at maximum")
        .required("Phone number is required"),
      password: Yup.string()
        .min(6, "Password must be 6 characters at minimum")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Confirm password is required"),
    }),
    onSubmit: async values => {
      // alert(JSON.stringify(values, null, 2));
      await axios.post("https://minpro-blog.purwadhikabootcamp.com/api/auth/", {
        username: values.username,
        phone: values.phone,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      }).then(response => {
        alert(`[response.message]: ${response.message}`);
      }).catch(error => {
        alert(`[error.response.data] ${error.response.data}`);
      });
    }
  })
  return (
    <TabPanel bgGradient='linear(to-b, pink, white)'  borderBottomRadius={15}>
        <ModalBody bg="white" borderRadius={15} padding={15} >
          <form onSubmit={registerSchema.handleSubmit}>
            <InputWithError 
              errors={registerSchema.errors.email} 
              touched={registerSchema.touched.email} 
              presetInput={<Input type="email" name="email" placeholder='Email' bgColor="white" borderColor={"grey"} color={"black"} value={registerSchema.values.email} onChange={registerSchema.handleChange}/>}
            />
            <InputWithError 
              errors={registerSchema.errors.password} 
              touched={registerSchema.touched.password} 
              presetInput={<Input type="password" name="password" placeholder='Password' bgColor="white" borderColor={"grey"} color={"black"} value={registerSchema.values.password} onChange={registerSchema.handleChange}/>}
            />
            <InputWithError 
              errors={registerSchema.errors.confirmPassword} 
              touched={registerSchema.touched.confirmPassword} 
              presetInput={<Input type="password" name="confirmPassword" placeholder='Confirm Password' bgColor="white" borderColor={"grey"} color={"black"} value={registerSchema.values.confirmPassword} onChange={registerSchema.handleChange}/>}
            />
            <InputWithError 
              errors={registerSchema.errors.username} 
              touched={registerSchema.touched.username} 
              presetInput={<Input type="text" name="username" placeholder='Username' bgColor="white" borderColor={"grey"} color={"black"} value={registerSchema.values.username} onChange={registerSchema.handleChange}/>}
            />
            <InputWithError 
              errors={registerSchema.errors.phone} 
              touched={registerSchema.touched.phone} 
              presetInput={<Input type="tel" name="phone" placeholder='Phone' bgColor="white" borderColor={"grey"} color={"black"} value={registerSchema.values.phone} onChange={registerSchema.handleChange}/>}
            />
            <ModalFooter>
              <Button type="submit" colorScheme="pink">
                Register
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
    </TabPanel>
  )
}

export default RegisterForm