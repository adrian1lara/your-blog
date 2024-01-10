import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CommentInput from "./commentInput";

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
                <CommentInput  postId={postId} updateComment={getComments}/>
                {comments.filter((comment) => comment.post == postId).map((comment) => (
                    <Box key={comment._id}>
                        <Text>{comment.user.username}</Text>
                        <Text>{comment.comment}</Text>
                    </Box>
                ))}
                
                </Box>
            )}
        </Box>
    )
}