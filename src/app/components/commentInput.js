import { Box, Button, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function CommentInput({postId, updateComment}) {

    const [comment, setComment] = useState('')
    const [error, setError] = useState('')

    const handleNewComment = async() => {
        try {

            if(comment.length <= 0) {
                setError('hahahahah!')
            }  else {
                const accessToken = localStorage.getItem('accessToken')

                const res = await fetch(`http://localhost:3000/blog-api/posts/${postId}/new-comment`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': accessToken
                    },
                    body: JSON.stringify({
                        comment: comment
                    })
                })

                if(res.ok) {
                    setComment('')
                    updateComment()
                } else {
                    const errorData = await res.json()
                    throw new Error(errorData.message)
                }

            }
            

            


        } catch (error) {
            console.error(error)
        }
    }



    return(
        <Box>
            <FormControl isInvalid={error}>
                <Input type="text" maxLength={300} minLength={1} value={comment}
                    onChange={(e) => setComment(e.target.value)}/>
                    <FormErrorMessage>
                    {error}
                    </FormErrorMessage>
                <Button onClick={handleNewComment}>Send</Button>
                
            </FormControl>
        </Box>
    )
}