import { Container, Flex, VStack, Skeleton, SkeletonCircle, Box } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import FeedPost from './FeedPost'

function Feedposts() {

    const [isLoding, setIsLoding] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoding(false)
        }, 2000)
    }, [])

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
        {isLoding && [0,1,2,3].map((_,idx) => (
            <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                <Flex gap={2}>
                    <SkeletonCircle size='10' />
                    <VStack gap={2} alignItems={"flex-start"}>
                        <Skeleton height='20px' w={"200px"}/>
                        <Skeleton height='20px' w={"200px"}/>
                    </VStack>
                </Flex>
                <Skeleton w={"full"}>
                    <Box h={"500px"} >contents wrapped</Box>
                </Skeleton>
            </VStack>
        ))}
        {!isLoding && (
            <>
                <FeedPost
                username = "Sheeran"
                img = "/profile_img.jpg"
                avatar = "/profile_img.jpg" />
                <FeedPost
                username = "Tylor"
                img = "/profile_img2.jpg"
                avatar = "/profile_img2.jpg"/>
                </>
        )}
       
    </Container>
  )
}

export default Feedposts