import { Box, Button, Flex, Grid, Spacer, Stack } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from "react-router-dom"
import Account from './button/account';
import SearchBar from './SearchBar';

const Header = () => { // assume this is register button/page
    const navigate = useNavigate();
    const toLoginPage = () => navigate("/login");
    const toRegisterPage = () => navigate("/register");

    return (
        <>
            <Flex bgColor="lightgrey" padding="5">
                <Flex justifyContent="flex-start" width={1/3}>
                    <Box bgColor="white" color="black" padding="5">
                        <h1>logologologologologologologologo</h1>
                    </Box>
                </Flex>
                <Flex justifyContent="center" width={1/3}>
                    {/* <Box bgColor="orange" color="black" padding="5"> */}
                        <SearchBar/>
                    {/* </Box> */}
                </Flex>
                <Flex justifyContent="flex-end" width={1/3}>
                    <Box>
                        {/* <Button marginLeft="5px" onClick={""}>Login</Button>
                        <Button marginLeft="5px">Register</Button> */}
                        <Account/>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
}

export default Header