import { Box, Text, Flex, Input, InputRightElement, Divider, Heading, Link, InputGroup, Avatar, Hide, Show, Center} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SearchIcon } from "@chakra-ui/icons";
import Logo from "../../../public/logo.png"
import LogOutButton from "./logOut";
import SearchBar from "./searchBar";


export default function LogNav() {
     
    const [user, setUser] = useState({})

    const getUser = async() => {
        const accessToken = localStorage.getItem('accessToken')

        try {

            const res = await fetch(`http://localhost:3000/blog-api/users/${accessToken}`)

            const resData = await res.json()
            
            if(res.ok) { 
                setUser(resData)
            } else {
                throw new Error(resData.message)
            }

        } catch (error) {
            console.error(error)
            setUser([])
        }
    } 

    useEffect(() => {
        getUser()
    }, [])

    return(
        <Box>
            <Hide below="md">
            {user && (
                <Box zIndex={1} p={4} margin={"auto"}  width={"100%"} position={"fixed"} top={0} overflow={"hidden"} >
            
                <Flex justifyContent={"space-between"} m={1} alignItems={"center"}>
                    <Box display={"flex"} alignItems={"center"} >
                        <Image src={Logo} alt="bloggy logo"  style={{ height: "50px", width: "50px", }}/>
                        <Heading as={"h2"} color={"white"} ml={1} ><Link _hover={{ textDecor: "none"}} href="/">Bloggy</Link></Heading>
                    </Box>
                    <SearchBar />
                    <Box >
                        <Flex alignItems={"center"}>
                            <Text color={"white"} mr={1}
                            as={"b"}>{user.username}</Text>
                            <Avatar  size={"sm"}/>
                        </Flex>
                        
                    </Box>

                    <LogOutButton/>
                </Flex>
                <Divider />
            </Box>
            )}
            </Hide>

            <Show below="md">
                    <Box m={1} >
                        <Flex justifyContent={"space-between"}>
                        <Center>
                        <Avatar  size={"sm"}/>
                        <Text color={"white"} ml={1}
                            as={"b"}>{user.username}</Text>
                            
                        
                        </Center>
                        <Center>
                        <Image src={Logo} alt="bloggy logo"  style={{ height: "50px", width: "50px", }}/>
                        <Heading as={"h2"} color={"white"} ml={1} ><Link _hover={{ textDecor: "none"}} href="/">Bloggy</Link></Heading>
                        </Center>
                        <Center>
                            <LogOutButton/>
                        </Center>
                        </Flex>
                        
                    </Box>
                    <Divider/>
            </Show>
        </Box>
    )
}