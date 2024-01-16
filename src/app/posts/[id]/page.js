'use client'
import Comments from "@/app/components/comments";
import OutNav from "@/app/components/noUserNav";
import LogNav from "@/app/components/userNav";
import { Avatar, Box, Flex, Heading, Skeleton, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";



export default function SinglePost({params}) {
    const id = params.id;
    const [post, setPost] = useState(null)

    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        setAccessToken(token);
      }, []);

    useEffect(() => {
        if(id) {
            getPost(id)
        }
    }, [id])

    const getPost = async(postId) => {
        try {
            const res = await fetch(`http://localhost:3000/blog-api/post/${postId}`)

            const dataRes = await res.json()

            if(res.ok) {
                setPost(dataRes)

            } else {
                throw new Error(dataRes.message)
            }

        } catch (error) {
            console.error(error)
            setPost([])
        }
    }

    return (
        <Box>
            {accessToken ? <LogNav /> : <OutNav />}
            <Box margin={"auto"} mt={"10%"} maxWidth={"960px"}>
                {post ? (
                    <Box>
                        <Flex>
                            <Avatar mr={2} size={"sm"} src="https://i.pinimg.com/736x/92/26/d7/9226d738bb7e00aa1bff0b73b786ae00.jpg"/>
                            <Text color={"#CBD5E0"} _hover={{color: "#2C7A7B"}} fontWeight={"bold"}>{post.user.username}</Text>
                            <Text mr={1} ml={1} color={"#CBD5E0"}> • </Text>
                            <Text as={"span"} color={"#CBD5E0"}> {post.latest} ago</Text>
                        </Flex>
                    <Heading as='h2' size={"lg"} color={"white"} mt={2}>{post.title}</Heading>
                    <Text color={"GrayText"}>{post.content}</Text>
                    <Box>
                    <Comments postId={post._id}/>
                        </Box>
                    </Box>

                ) :
                    <Text color={"whitesmoke"}>Loading..</Text>
                }

            </Box>
        </Box>
    )
}