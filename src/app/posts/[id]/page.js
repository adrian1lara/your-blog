'use client'

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
                   <Heading as={"h2"}>{post.title}</Heading>
                   <Text>{post.content}</Text>
                </Box>

            ) : 
            <Text>Loading...</Text>
            }

        </Box>
    )
}