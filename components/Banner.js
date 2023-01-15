import React from 'react'
import { Flex, Box } from '@chakra-ui/react';
import { Image } from 'next/image';

const Banner = ({ purpose }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
     <Image src={imageUrl} width={500} height={300} alt="banner">
    <Box>
    <Text>
    {purpose}

    </Text>

        
    </Box>
    
     </Image>
    </Flex>
  )
}

export default Banner