'use client'

import { Box, Button, Center, FormControl, FormErrorMessage, Heading, Input, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleLogin = async() => {
        try {
            const res = await fetch('https://yourblog-api.fly.dev/blog-api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email , password})
            })

            if(res.ok) {
                const data = await res.json()
                localStorage.setItem('accessToken', data.token)
                localStorage.setItem('userId', data._id)
                router.push("/")
            } else {
                const errorData = await res.json()
                throw new Error(errorData.message ||"Failed to fetch data")
            }
        } catch (error) {
            console.error("Failed to login: ",error)
            setError(error.message)
        }
    }


    return (
        <Box margin={"auto"} maxWidth={960} color={"white"}>
            <Heading as={"h1"} textAlign={"center"} mt={100}>Log in</Heading>

            <FormControl isInvalid={error} margin={"auto"} maxWidth={400}>
                <Input type="email" 
                placeholder="email@email.com"
                mt={5}
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

                <Input type="password" 
                placeholder="******"
                mt={5}
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                {error && (
                    <FormErrorMessage>{error}</FormErrorMessage>
                )}

                <Center flexDir={"column"} mt={5}>
                <Button onClick={handleLogin}>Log In</Button>
                <Text mt={5}>New to YourBlog? <Link href="/register" color={"blue"}>Sign Up</Link></Text>
                </Center>
                

            </FormControl>
        </Box>
    )
}