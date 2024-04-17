import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

function PageLayout({children}) {
  return (
    <Flex>
        {/* sidebar on the left */}

        {/* page content on right */}
        <Box>
            {children}
        </Box>
    </Flex>
  )
}

export default PageLayout