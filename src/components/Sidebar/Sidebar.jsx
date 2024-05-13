import { Avatar, Box, Flex, Link, Tooltip, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo} from '../../assets/Constants'
import { RxAvatar } from "react-icons/rx"
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import React from 'react'
import { color } from 'framer-motion';
import useLogOut from '../../hooks/useLogOut';

function Sidebar() {

    const {handleLogout, isLoggingOut, error} = useLogOut();

    const sidebarItems = [
        {
            icon: <AiFillHome size ={25}/>,
            text: "Home",
            link: "/"
        },

        {
            icon: <SearchLogo/>,
            text: "Search"
        },

        { 
            icon: <NotificationsLogo/>,
            text: "Notifications"
        },

        {
            icon: <CreatePostLogo/>,
            text: "Create Post"
        },

        {
            icon: <RxAvatar size={25} name='Minisa'/>,
            text: "Profile",
            link: "/asaprogrammer"
        }

    ]
  return (
    <Box 
        height={"100vh"}
        borderRight={"1px solid"}
        borderColor={"whiteAlpha.300"}
        py={8}
        position={"sticky"}
        top={0}
        left={0}
        px={{base:2, md:4}}
    >

        <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
            <Link to={"/"} as={RouterLink} pl={2} display={{base:'none', md:'block'}} cursor={'pointer'}> 
                <InstagramLogo/>
            </Link>
            <Link to={"/"} as={RouterLink} padding={2} display={{base:'block', md:'none'}} borderRadius={6} _hover={{bg:"whiteAlpha.200"}} w={10} cursor={'pointer'}> 
                <InstagramMobileLogo/>
            </Link>

            <Flex direction={"column"} gap={5} cursor={'pointer'}>
                {sidebarItems.map((item,index) => (
                        <Tooltip key={index} hasArrow label={item.text} placement='right' ml={1} openDelay={500} display={{base:'block', md:'none'}}>
                            <Link display={'flex'} to={item.link || null} as={RouterLink} alignItems={'center'} gap={4} _hover={{bg:"whiteAlpha.400"}} borderRadius={6} p={2} w={{base:10, md:'full'}}>
                                {item.icon}
                                <Box display={{base:'none', md:'block'}}>{item.text}</Box>
                            </Link>
                        </Tooltip>
                    )
                )}
            </Flex>
            {/* Log out */}
            <Tooltip hasArrow label={"Log out"} placement='right' ml={1} openDelay={500} display={{base:'block', md:'none'}}>
                <Flex onClick={handleLogout} alignItems={'center'} gap={4} _hover={{bg:"whiteAlpha.400"}} borderRadius={6} p={2} w={{base:10, md:'full'}} mt={'auto'} justifyContent={{base:'center', md:'flex-start'}} cursor={'pointer'}>
                    <BiLogOut size={25}/>
                    <Button display={{base:'none', md:'block'}} isLoading={isLoggingOut} variant={"ghost"} _hover={{bg:"transparent"}}>Log out</Button>
                </Flex>
            </Tooltip>
        </Flex>

    </Box>
  )
}

export default Sidebar