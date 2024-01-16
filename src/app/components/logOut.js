import { Button } from "@chakra-ui/react";

 

 export default function LogOutButton() {

    const handleLogOut=()=> {
        localStorage.clear()

        window.location.reload()
    }


    return (
        <Button onClick={handleLogOut}>Log out</Button>
    )
 }