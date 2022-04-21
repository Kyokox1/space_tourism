import React from "react";
import { Link } from "react-router-dom";
import { Button, Box, Flex, Text } from "@chakra-ui/react";

import { Header } from "../sections/Header";

import bgHome from "../../assets/background-home-desktop.jpg";
import bgHomeTablet from "../../assets/background-home-tablet.jpg";
import bgHomeMobile from "../../assets/background-home-mobile.jpg";

export const Home = () => {
	return (
		<>
			<Box
				bgImg={{ lg: bgHome, md: bgHomeTablet, base: bgHomeMobile }}
				bgSize="cover"
				color="white"
				height="100vh"
				pt={{ lg: "2.5rem", md: "0", base: "0" }}
				overflowY="hidden"
			>
				<Header />
				<Flex
					as="section"
					justifyContent="space-evenly"
					flexDir={{ md: "column", lg: "row", base: "column" }}
					alignItems={{ md: "center", base: "center" }}
					h={{ lg: "auto", md: "4xl", base: "xl" }}
					w="100%"
					m={{ lg: "9.5rem auto 0 auto", md: "1rem auto", base: "0" }}
					fontWeight="300"
					color="#D0D6F9"
					textAlign={{ lg: "initial", md: "center", base: "center" }}
				>
					<Box w={{ lg: "md", md: "md", base: "90%" }}>
						<Text
							as="h3"
							fontFamily="Barlow Condensed"
							fontSize={{ lg: "2xl", md: "2xl", base: "lg" }}
							letterSpacing={5}
						>
							SO, YOU WANT TO TRAVEL TO
						</Text>
						<Text
							as="h1"
							fontSize={{ lg: "9xl", md: "9xl", base: "8xl" }}
							fontFamily="Bellefair"
							textAlign="center"
							letterSpacing={7}
							color="#FFFFFF"
						>
							SPACE
						</Text>
						<Text
							as="p"
							fontFamily="Barlow"
							fontSize={{ lg: "lg", md: "xl", base: "md" }}
							mt="-1rem"
						>
							Let’s face it; if you want to go to space, you might as well
							genuinely go to outer space and not hover kind of on the edge
							of it. Well sit back, and relax because we’ll give you a
							truly out of this world experience!
						</Text>
					</Box>
					<Link to="/destination">
						<Button
							borderRadius="50%"
							boxSize={{ lg: "274px", md: "274px", base: "200px" }}
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
