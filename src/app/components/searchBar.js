import { Search2Icon } from "@chakra-ui/icons";
import { Box, Divider, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalContent, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SearchBar(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [originalData, setOriginalData] = useState([]);
    const [filterData, setFilteredData] = useState([])

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = async() => {

        try {
            const res = await fetch("http://localhost:3000/blog-api/posts/allPosts")
            const dataResponse = await res.json()

            if(res.ok) {
                setOriginalData(dataResponse)
                setFilteredData(dataResponse)
            } else {
                console.error(dataResponse.message)
                setOriginalData([])
                setFilteredData([])
            }
            
        } catch (error) {
            console.error(error)
            setFilteredData([])
        }
    }

    const filterBySearch = (e) => {

        const query = e.target.value

        if (query.trim() === "") {
            
            setFilteredData(originalData);
        } else {

            let updateList = [...filterData]

            updateList = updateList.filter((post) => {
                return post.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
            })
    
            setFilteredData(updateList)
        }
       
    }

    return (
        <Box>
            <InputGroup width={"xl"}>
                <Input onClick={onOpen} placeholder="Search in bloggy..." /> 
                <InputLeftElement>
                    <Search2Icon  color={"white"}/>
                </InputLeftElement>
            </InputGroup>
            

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent bg={"#111618"}>
                <ModalBody>
                    <InputGroup>
                    <Input onChange={filterBySearch} color={"white"} placeholder="Search in bloggy..."/>
                    <InputLeftElement>
                        <Search2Icon color={"white"}/>
                    </InputLeftElement>
                    </InputGroup> 
                    <Box mt={2} p={4}>
                    {filterData.map((post) => (
                        <Link key={post._id}  href={`/posts/${post._id}`} 
                        _hover={{textDecoration: "none"}}>
                            <Text _hover={{ bg: "#33464C"}} borderRadius={5} margin={1} color={"white"} p={1}>{post.title}</Text>
                        </Link>
                    ))}
                    </Box>
                </ModalBody>     
                </ModalContent>
               
            </Modal>
        </Box>
    )
}