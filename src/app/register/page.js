'use client'

import { useState } from "react"

export default function Register() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

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

            } else {
                const errorData = await res.json()
                setError(errorData)
            }
            

        } catch (error) {
            console.error(error)
            setError(error.message)
        }
    }

    return (
        <div>
            <h1>sign up form</h1>

            <form >
                <input placeholder="username" 
                type="text"
                value={username}
                minLength={4}
                onChange={(e) => setUsername(e.target.value)} 
                maxLength={40} />

                <input placeholder="email@youremail.com"
                value={email}
                min={10}
                onChange={(e) => setEmail(e.target.value)}
                type="email" />

                <input placeholder="password"
                value={password}
                minLength={5}
                onChange={(e) => setPassword(e.target.value)}
                type="password" />

                <button
                onClick={handleSignUp}>Sign up</button>

                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    )

}