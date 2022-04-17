import React from "react";
import {
	Box,
	Flex,
	Image,
	Text,
	keyframes,
	Button
} from "@chakra-ui/react";
import { motion } from "framer-motion";

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

	return (
		<Flex boxSize="5xl" m="0 auto" justifyContent="space-around">
			<Image
				as={motion.img}
				src={img}
				boxSize="sm"
				animation={animation}
			/>
			<Box boxSize="md">
				<Box
					fontFamily="Barlow"
					width="xs"
					boxSizing="border-box"
					display="flex"
					justifyContent="space-between"
				>
					<Button
						onClick={() => setPlanetValues(0)}
						color="#D0D6F9"
						letterSpacing="4px"
						fontWeight="400"
						colorScheme={"transparent"}
						padding="0px"
						_hover={{
							borderBottom: "#FFFFFF60 solid 2px"
						}}
						_focus={{
							borderBottom: "#FFFFFF solid 2px",
							color: "#FFFFFF"
						}}
					>
						MOON
					</Button>
					<Button
						onClick={() => setPlanetValues(1)}
						color="#D0D6F9"
						letterSpacing="4px"
						border
						fontWeight="400"
						colorScheme={"transparent"}
						padding="0px"
						_hover={{
							borderBottom: "#FFFFFF60 solid 2px"
						}}
						_focus={{
							borderBottom: "#FFFFFF solid 2px",
							color: "#FFFFFF"
						}}
					>
						MARS
					</Button>
					<Button
						onClick={() => setPlanetValues(2)}
						color="#D0D6F9"
						letterSpacing="4px"
						fontWeight="400"
						colorScheme={"transparent"}
						padding="0px"
						_hover={{
							borderBottom: "#FFFFFF60 solid 2px"
						}}
						_focus={{
							borderBottom: "#FFFFFF solid 2px",
							color: "#FFFFFF"
						}}
					>
						EUROPA
					</Button>
					<Button
						onClick={() => setPlanetValues(3)}
						color="#D0D6F9"
						letterSpacing="4px"
						fontWeight="400"
						colorScheme={"transparent"}
						padding="0px"
						_hover={{
							borderBottom: "#FFFFFF60 solid 2px"
						}}
						_focus={{
							borderBottom: "#FFFFFF solid 2px",
							color: "#FFFFFF"
						}}
					>
						TITAN
					</Button>
				</Box>

				<Text as="h2" fontFamily="Bellefair" fontSize="7xl">
					{name.toUpperCase()}
				</Text>
				<Text
					fontFamily="Barlow"
					color="#D0D6F9"
					width="400px"
					pb="2rem"
					borderBottom="1px #383B4B solid"
				>
					{description}
				</Text>
				<Flex width="sm" justifyContent="space-between" mt=".5rem">
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
