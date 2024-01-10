
import { Heading, Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Comments from "./comments";

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
                <Box>
                {post.map((post) => (
                    <Box key={post._id}>
                        <Text>{post.user.username}</Text>
                        <Heading as={"h2"}>{post.title}</Heading>
                        <Text>{post.content}</Text>
                        <Comments postId={post._id}/>
                    </Box>

                    
                ))}
                </Box>
            ): 
            <Text>No post yet</Text>
            }
        </Box>
    )
}