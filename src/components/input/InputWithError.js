import { Box, Collapse, Input } from '@chakra-ui/react'
import React from 'react'

const InputWithError = (props) => {
    const bool = props.errors && props.touched;
    return (
        <Box
            // margin="5"
            borderRadius="15"
            bgColor={bool? 'red' : 'transparent'}
            color="white"
            padding="2"
            marginBottom="5"
            in={bool}
            sx={{
                "transition": "background-color 0.5s ease-out"
            }}
            >
            {/* <Input type="email" name="email" placeholder='Email' bgColor="white" borderColor={"grey"} color={"black"} value={loginSchema.values.email} onChange={loginSchema.handleChange}/> */}
            {props.presetInput}
            <Collapse in={bool}>{props.errors}</Collapse>
            </Box>
    )
}

export default InputWithError