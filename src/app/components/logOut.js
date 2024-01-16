import { Button } from "@chakra-ui/react";

 

 export default function LogOutButton() {

    const handleLogOut=()=> {
        localStorage.clear()

        window.location.reload()
    }


    return (
        <Button onClick={handleLogOut} borderRadius={"3xl"}
        bg={"#203033"} color={"white"} 
        _hover={{bgColor: "#C53030"}}>Log out</Button>
    )
 }