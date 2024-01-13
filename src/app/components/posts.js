
import { Heading, Box, Text, Link, Divider, textDecoration, Center, Flex, ButtonGroup, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";


export default function Posts() {
    
    const [post, setPosts] = useState(null)

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async() => {

        try {
            const res = await fetch("http://localhost:3000/blog-api/posts/allPosts")
            const dataResponse = await res.json()

            if(res.ok) {
                setPosts(dataResponse)
            } else {
                console.error(dataResponse.message)
                setPosts([])
            }
            
        } catch (error) {
            console.error(error)
            setPosts([])
        }
    }

    return ( 
        <Box>
            <Heading>Posts</Heading>

            {post ? (
                <Box  width={"100%"} margin={"auto"}>
                {post.map((post) => (

                    <Link key={post._id} href={`/posts/${post._id}`} 
                    _hover={{textDecoration: "none"}}>
                        <Box p={4} _hover={{ bg: "#33464C"}} borderRadius={5} margin={1}>
                            <Flex >
                            <Text color={"#CBD5E0"} _hover={{color: "#2C7A7B"}}>{post.user.username}  
                            </Text><Text mr={1} ml={1} color={"#CBD5E0"}> • </Text>
                            <Text as={"span"} color={"#CBD5E0"}> {post.latest}</Text>
                            </Flex>
                            
                            <Heading as='h2' size={"md"} color={"white"}>{post.title}</Heading>
                            <Text textColor={"GrayText"}>{post.content}</Text>

                        </Box>
                        <Divider />
                    </Link>

                    
                ))}
                </Box>
            ): 
            <Text>No post yet</Text>
            }
        </Box>
    )
}