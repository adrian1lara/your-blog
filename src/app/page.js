'use client'

import { Box } from "@chakra-ui/react";
import Posts from "./components/posts";
import OutNav from "./components/noUserNav";
import LogNav from "./components/userNav";
import { useEffect, useState } from "react";

export default function Home() {
    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        setAccessToken(token);
      }, []);

    return (
        <Box>
            {accessToken ? <LogNav /> : <OutNav />}
            <Box margin={"auto"} mt={"10%"} maxWidth={"960px"} >
                <Posts />
            </Box>
        </Box>
    )
}