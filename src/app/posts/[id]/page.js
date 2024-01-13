'use client'
import Comments from "@/app/components/comments";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";



export default function SinglePost({params}) {
    const id = params.id;
    const [post, setPost] = useState(null)

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
            {post ? (
                <Box>
                    <Text color={"#CBD5E0"} _hover={{color: "#2C7A7B"}}>{post.user.username}</Text>
                   <Heading as='h2' size={"lg"} color={"white"}>{post.title}</Heading>
                   <Text color={"GrayText"}>{post.content}</Text>
                   <Box>
                   <Comments postId={post._id}/>
                    </Box>
                </Box>

            ) : 
            <Text>Loading...</Text>
            }

        </Box>
    )
}