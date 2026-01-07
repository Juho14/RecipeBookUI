import { Button, Drawer } from "@mui/material"
import { PAGES } from "../../constants/Pages"
import { useState } from "react"

const DrawerNav = () => {
    const drawerList = Object.keys(PAGES)
    const [isOpen, setIsOpen] = useState(false)
    console.log(drawerList)

    const handleOpen = () => {
        setIsOpen(true)
    }

    const closeDrawer = () => {
        setIsOpen(false)
    }
    return (
        <>
            <Button onClick={handleOpen}>Open drawer</Button>
            <Drawer open={isOpen} onClose={closeDrawer}>

            </Drawer></>
    )
}

export default DrawerNav