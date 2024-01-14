'use client'

import { Box } from "@chakra-ui/react";
import Posts from "./components/posts";
import OutNav from "./components/noUserNav";

export default function Home() {
    return (
        <Box>
            <OutNav />
            <Box margin={"auto"} mt={"6%"} maxWidth={"960px"} border={"1px solid"}>
                <Posts />
            </Box>
        </Box>
    )
}