'use client'

import { Button, FormErrorMessage, Input, FormControl, Box, Text, Center,Link, Heading } from "@chakra-ui/react"
import { color } from "framer-motion"
//import Link from "next/link"
import { useState } from "react"

export default function Register() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSignUp = async() => {
        try {

            const res = await fetch("http://localhost:3000/blog-api/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password
                })
            })

            if(res.ok) {
                //its ok
            } else {
                const errorData = await res.json()
                setError(errorData.message)
            }
            

        } catch (error) {
            console.error(error)
            setError(error.message)
        }
    }

    return (
        <Box margin={"auto"}
        maxWidth={960} color={"white"}>

            <Heading as={"h1"} textAlign={"center"} mt={100}>Sign Up </Heading>

            <FormControl isInvalid={error} margin={"auto"} maxWidth={400}>
                <Input placeholder="username" 
                type="text"
                value={username}
                minLength={4}
                onChange={(e) => setUsername(e.target.value)} 
                maxLength={40}
                mt={5}/>

                <Input placeholder="email@youremail.com"
                value={email}
                minLength={5}
                mt={5}
                onChange={(e) => setEmail(e.target.value)}
                type="email" />

                <Input placeholder="password"
                value={password}
                minLength={5}
                mt={5}
                onChange={(e) => setPassword(e.target.value)}
                type="password" />

                {error && (
                    <FormErrorMessage>
                        {error}
                    </FormErrorMessage>
                )}

                <Center flexDir={"column"}>
                    <Button
                        mt={10}
                        onClick={handleSignUp}>Sign up</Button>
                    <Text 
                    mt={5}
                    as={"p"}>Do you have an account? <Link href={"/login"} color={"blue"}>log in</Link></Text>

                </Center>
                

            
                
            </FormControl>
        </Box>
    )

}