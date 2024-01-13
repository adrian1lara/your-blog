'use client'

import { Box } from "@chakra-ui/react";
import Posts from "./components/posts";

export default function Home() {
    return (
        <Box>
            <Box margin={"auto"} border={"1px solid"}>
                <Posts />
            </Box>
        </Box>
    )
}