import React from "react";
import {
	Box,
	Flex,
	Image,
	Text,
	keyframes,
	Button
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

export const DestinationItem = ({
	img,
	name,
	description,
	distance,
	travel,
	setPlanetValues
}) => {
	// *Animacion de rotacion
	const animationKeyframes = keyframes`
		0% { transform: scale(1) rotate(0) }
		100% { transform: scale(1) rotate(360deg) }
	`;

	const animation = `${animationKeyframes} 50s infinite linear`;

	const planets = ["MOON", "MARS", "EUROPE", "TITAN"];

	return (
		<Flex
			width="100vw"
			height={{ lg: "auto", md: "85vh", base: "85vh" }}
			justifyContent="space-evenly"
			alignItems={{ lg: "normal", md: "center", base: "center" }}
			flexDir={{ lg: "row", md: "column", base: "column" }}
			textAlign={{ lg: "inherit", md: "center", base: "center" }}
		>
			<AnimatePresence>
				<Image
					as={motion.img}
					key={img}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition="all .5s ease-in-out"
					src={img}
					boxSize={{ lg: "sm", md: "sm", base: "xs" }}
					animation={animation}
					alt="destination"
				/>
			</AnimatePresence>
			<Box
				w={{ lg: "md", md: "xl", base: "100%" }}
				h={{ lg: "auto", md: "45%", base: "45%" }}
			>
				<Box
					fontFamily="Barlow"
					width="xs"
					boxSizing="border-box"
					display="flex"
					justifyContent="space-between"
					m={{ lg: "initial", md: "0 auto", base: "0 auto" }}
				>
					{planets.map((planet, i) => (
						<Button
							key={i}
							onClick={() => setPlanetValues(i)}
							autoFocus={i === 0}
							color="#D0D6F9"
							letterSpacing="4px"
							fontWeight="400"
							colorScheme="transparent"
							padding="0"
							_hover={{
								borderBottom: "#FFFFFF60 solid 2px"
							}}
							_focus={{
								borderBottom: "#FFFFFF solid 2px",
								color: "#FFFFFF"
							}}
						>
							{planet}
						</Button>
					))}
				</Box>
				<Text as="h2" fontFamily="Bellefair" fontSize="7xl">
					{name.toUpperCase()}
				</Text>
				<Text
					fontFamily="Barlow"
					color="#D0D6F9"
					m={{ lg: "initial", md: "0 auto", base: "0 auto" }}
					w={{ lg: "400px", md: "100%", base: "90%" }}
					pb="2rem"
					borderBottom="1px #383B4B solid"
				>
					{description}
				</Text>
				<Flex
					width="sm"
					h={{ lg: "auto", md: "auto", base: "10rem" }}
					flexDir={{ lg: "row", md: "row", base: "column" }}
					justifyContent={{
						lg: "space-between",
						md: "space-between",
						base: "space-around"
					}}
					m={{ lg: ".5rem 0 0 0", md: ".5rem auto", base: ".5rem auto" }}
				>
					<Box>
						<Text color="#D0D6F9" fontFamily="Barlow Condensed">
							AVG. DISTANCE
						</Text>
						<Text fontSize="3xl" fontFamily="Bellefair">
							{distance.toUpperCase()}
						</Text>
					</Box>
					<Box>
						<Text color="#D0D6F9" fontFamily="Barlow Condensed">
							EST. TRAVEL TIME
						</Text>
						<Text fontSize="3xl" fontFamily="Bellefair">
							{travel.toUpperCase()}
						</Text>
					</Box>
				</Flex>
			</Box>
		</Flex>
	);
};
