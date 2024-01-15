import { Box, Button, Flex, FormControl, FormErrorMessage, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
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
            <FormControl isInvalid={error} >
                <Flex>
                    <InputGroup >
                    
                    <Input 
                    borderRadius={"2xl"}
                    borderColor={"gray"}
                    type="text" maxLength={300} minLength={1} value={comment}
                        onChange={(e) => setComment(e.target.value)} />
                    <InputRightElement mr={3}  >
                        <Button onClick={handleNewComment} pr={8} pl={8} bg={"#38B2AC"} borderRadius={"3xl"} >Send</Button>
                    </InputRightElement>
                    </InputGroup>

                </Flex>
                <FormErrorMessage>
                        {error}
                </FormErrorMessage>
            </FormControl>
        </Box>
    )
}