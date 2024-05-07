import { Grid } from '@chakra-ui/react'
import React from 'react'
import ProfilePost from '../ProfilePost/ProfilePost'

function ProfilePosts() {
  return (
    <Grid templateColumns={{sm:"repeat(1, 1fr)", md:"repeat(3, 1fr)"}} gap={1} columnGap={1}>
        <>
            <ProfilePost img="./profile_img.jpg"/>
            <ProfilePost img="./profile_img2.jpg"/>
            <ProfilePost img="./profile_img.jpg"/>
            <ProfilePost img="./profile_img2.jpg"/>
            <ProfilePost img="./profile_img.jpg"/>
        </>
    </Grid>
  )
}

export default ProfilePosts