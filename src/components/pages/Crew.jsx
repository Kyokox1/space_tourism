import React from 'react'
import { Box } from '@chakra-ui/react'

import { Header } from '../sections/Header'

import bgCrew from '../../assets/crew/background-crew-desktop.jpg'

export const Crew = () => {
  return (
    <Box
			bgImg={bgCrew}
			bgSize="cover"
			color="white"
			height="100vh"
			pt="2.5rem"
			overflowY="hidden"
		>
        <Header />


        </Box>
    )}
