import { Avatar, Box, Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CommentInput from "./commentInput";
import { ChatIcon, LinkIcon } from "@chakra-ui/icons";

export default function Comments({postId}) {
    const [comments, setComments] = useState('')

    

    const getComments = async()=> { 
        try {
            
            const res = await fetch("http://localhost:3000/blog-api/comments/allComments")
            const dataRes = await res.json()

            if(res.ok) {
                setComments(dataRes)
            } else {
                throw new Error(dataRes.message)
            }

        } catch (error) {
            console.error(error)
            setComments([])
        }
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <Box>
            {comments && (
                <Box>
                <ButtonGroup mt={2}>
                    <Button alignItems={"center"} borderRadius={10} p={2}>
                        <ChatIcon />
                        <Text ml={1}>{comments.length}</Text>
                    </Button>
                    <Button>
                        <LinkIcon />
                        <Text ml={1}>Compartir</Text>
                    </Button>
                </ButtonGroup>
                
                <CommentInput  postId={postId} updateComment={getComments}/>
                {comments.filter((comment) => comment.post == postId).map((comment) => (
                    <Box key={comment._id} mt={6} >
                        <Flex alignItems={"center"}>
                            <Avatar mr={2} size={"sm"} />
                            <Text color={"white"} as={"b"}>{comment.user.username}</Text>
                        </Flex>
                        <Box ml={4} mt={1} borderLeft={"1px solid gray"}>
                        <Text color={"white"} p={2} ml={4}>{comment.comment}</Text>
                        </Box>
                        
                    </Box>
                ))}
                
                </Box>
            )}
        </Box>
    )
}