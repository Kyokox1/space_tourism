import React from "react";
import { Link } from "react-router-dom";
import { Button, Box, Flex, Text } from "@chakra-ui/react";

import { Header } from "../sections/Header";

import bgHome from "../../assets/background-home-desktop.jpg";

export const Home = () => {
	return (
		<>
			<Box
				bgImg={bgHome}
				bgSize="cover"
				color="white"
				height="100vh"
				pt="2.5rem"
				overflowY="hidden"
			>
				<Header />
				<Flex
					as="section"
					justifyContent="space-between"
					width="5xl"
					m="9.5rem auto 0 auto"
					fontWeight="300"
					color="#D0D6F9"
				>
					<Box width="md">
						<Text
							as="h3"
							fontFamily="Barlow Condensed"
							fontSize="2xl"
							letterSpacing={5}
						>
							SO, YOU WANT TO TRAVEL TO
						</Text>
						<Text
							as="h1"
							fontSize="9xl"
							fontFamily="Bellefair"
							textAlign="center"
							letterSpacing={7}
							color="#FFFFFF"
						>
							SPACE
						</Text>
						<Text as="p" fontFamily="Barlow" fontSize="md" mt="-1rem">
							Let’s face it; if you want to go to space, you might as well
							genuinely go to outer space and not hover kind of on the edge
							of it. Well sit back, and relax because we’ll give you a
							truly out of this world experience!
						</Text>
					</Box>
					<Link to="/destination">
						<Button
							borderRadius="50%"
							width="274px"
							height="274px"
							color="#0B0D17"
							fontFamily="Bellefair"
							fontSize="3xl"
							alignSelf="flex-end"
							fontWeight="400"
							transition="all .4s ease-out"
							_hover={{
								transform: "scale(0.70)",
								outline: "60px #FFFFFF30 solid",
								outlineOffset: "0px"
							}}
						>
							EXPLORE
						</Button>
					</Link>
				</Flex>
			</Box>
		</>
	);
};
