import React from 'react'
import {
    Box,
    Text,
    SimpleGrid,
    Flex,
    Link
} from '@chakra-ui/core'

// importing static assets 
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'


const Footer = props => {

    return <>
        <Box p={10} style={{ marginTop: '120px', height:'150px'    }} bg="tomato" color="white">
            <SimpleGrid columns={2} spacing={1}>
                <Box>
                    <Text>@2020 Tech_Phantoms</Text>
                </Box>

                <Box style={{ alignContent: 'end' }}>
                    <Flex>
                        <Flex flexGrow={1} />

                        <Flex>
                            <SimpleGrid columns={2} spacing={4}>

                                <Box>
                                    <Link target="blank" href="https://github.com/Ninja-Developers">
                                        <img src={github} alt="" width="25px" />
                                    </Link>
                                </Box>
                                <Box>
                                    <Link>
                                        <img src={linkedin} alt="" width="25px" />
                                    </Link>
                                </Box>

                            </SimpleGrid>
                        </Flex>

                    </Flex>
                </Box>

            </SimpleGrid>
        </Box>
    </>
}

export default Footer