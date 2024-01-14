import { SearchIcon } from "@chakra-ui/icons";
import { Heading, Box, Flex, InputGroup, Input, InputRightElement, Link, Divider } from "@chakra-ui/react";
import Logo from "../../../public/logo.png"
import Image from "next/image";


export default function OutNav() {

    return (
        <Box zIndex={1} p={4} margin={"auto"}  width={"100%"} position={"fixed"} top={0} overflow={"hidden"} >
            
            <Flex justifyContent={"space-between"} m={1} alignItems={"center"}>
                <Box display={"flex"} alignItems={"center"} >
                    <Image src={Logo} alt="bloggy logo"  style={{ height: "50px", width: "50px", }}/>
                    <Heading as={"h2"} color={"white"} ml={1} >Bloggy</Heading>
                </Box>
                <InputGroup  maxWidth={"960px"} >  
                    <Input  variant={"filled"}  _hover={{ bg: "#33464C"}} bg={"#203033"} 
                    placeholder="Search in bloggy" borderRadius={"3xl"}/>
                    <InputRightElement>
                            <SearchIcon color={"white"}/>
                    </InputRightElement>
                </InputGroup>

                <Box>
                    <Link href="/login" bg={"#203033"} p={3} borderRadius={"3xl"} color={"whitesmoke"} mr={1}
                    _hover={{ textDecoration: "none", bg: "#33464C"}}>Log In</Link>
                    <Link href="/register" bg={"#203033"} p={3} borderRadius={"3xl"} color={"whitesmoke"}
                    _hover={{ textDecoration: "none", bg: "#33464C"}}>Sign Up</Link>
                </Box>
            </Flex>
            <Divider />
        </Box>
    )
}