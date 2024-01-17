import { SearchIcon } from "@chakra-ui/icons";
import { Heading, Box, Flex, InputGroup, Input, InputRightElement, Link, Divider, Hide, Show, Center } from "@chakra-ui/react";
import Logo from "../../../public/logo.png"
import Image from "next/image";
import SearchBar from "./searchBar";


export default function OutNav() {

    return (
        <Box>
        <Box zIndex={1} p={4} margin={"auto"}  width={"100%"} position={"fixed"} top={0} overflow={"hidden"} >
            <Hide below="md">
            <Flex justifyContent={"space-between"} m={1} alignItems={"center"}>
                <Box display={"flex"} alignItems={"center"} >
                    <Image src={Logo} alt="bloggy logo"  style={{ height: "50px", width: "50px", }}/>
                    <Heading as={"h2"} color={"white"} ml={1} ><Link _hover={{ textDecor: "none"}} href="/">Bloggy</Link></Heading>
                </Box>
                <SearchBar />

                <Box>
                    <Link href="/login" bg={"#203033"} p={3} borderRadius={"3xl"} color={"whitesmoke"} mr={1}
                    _hover={{ textDecoration: "none", bg: "#33464C"}}>Log In</Link>
                    <Link href="/register" bg={"#203033"} p={3} borderRadius={"3xl"} color={"whitesmoke"}
                    _hover={{ textDecoration: "none", bg: "#33464C"}}>Sign Up</Link>
                </Box>
            </Flex>
            <Divider />
            
            </Hide>
        </Box>
            


        <Show below="md">
                <Box m={1}>
                    <Flex justifyContent={"space-between"}>
                    <Center>
                        <Image src={Logo} alt="bloggy logo"  style={{ height: "50px", width: "50px", }}/>
                        <Heading as={"h2"} color={"white"} ml={1} ><Link _hover={{ textDecor: "none"}} href="/">Bloggy</Link></Heading>
                    </Center>
                    <Center> 
                        <Link href="/login" bg={"#203033"} p={3} borderRadius={"3xl"} color={"whitesmoke"} mr={1}
                        _hover={{ textDecoration: "none", bg: "#33464C"}}>Log In</Link>
                        <Link href="/register" bg={"#203033"} p={3} borderRadius={"3xl"} color={"whitesmoke"}
                        _hover={{ textDecoration: "none", bg: "#33464C"}}>Sign Up</Link>
                    </Center>
                    </Flex>
                </Box>
                <Divider />
            </Show>
        </Box>
    )
}