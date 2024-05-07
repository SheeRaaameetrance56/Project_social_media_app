import { Flex, GridItem, Image, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody } from '@chakra-ui/react'
import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'


function ProfilePost({img}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <GridItem cursor={'pointer'} borderRadius={4} overflow={"hidden"} border={"1px solid white"} position={"relative"} aspectRatio={1/1} onClick={onOpen}>
        <Flex opacity={0} _hover={{opacity:1}} position={"absolute"} top={0} left={0} right={0} bottom={0} bg={"blackAlpha.700"} transition={"all 0.3s ease"} zIndex={1} justifyContent={"center"}>
            <Flex alignItems={'center'} justifyContent={'center'} gap={50}>
                <Flex> <AiFillHeart size={20}/> <Text fontWeight={"bold"} ml={2}>7</Text> </Flex>
                <Flex> <FaComment size={20}/> <Text fontWeight={"bold"} ml={2}>7</Text> </Flex>
            </Flex>
        </Flex>
        <Image src={img} alt='Profile post'/>
      </GridItem>

      <Modal onClose={onClose} size={"sm"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            This is the modal
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfilePost