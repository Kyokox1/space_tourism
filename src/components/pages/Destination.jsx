import React, { useState, useEffect } from "react";
import {
	Box,
	Button,
	Flex,
	Image,
	Spinner,
	Text,
	keyframes
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Header } from "../sections/Header";
import { fetchApi } from "../../services/fetchAPI";

import bgDestination from "../../assets/destination/background-destination-desktop.jpg";

export const Destination = () => {
	const [planets, setPlanets] = useState([]);
	const [planetValues, setPlanetValues] = useState(0);

	const key = "destinations";

	useEffect(() => {
		fetchApi(key).then(setPlanets);
	}, []);

	// *Animacion de rotacion

	const animationKeyframes = keyframes`
		0% { transform: scale(1) rotate(0) }
		100% { transform: scale(1) rotate(360deg) }
	`;

	const animation = `${animationKeyframes} 50s infinite linear`;

	return (
		<Box
			bgImg={bgDestination}
			bgSize="cover"
			color="white"
			height="100vh"
			pt="2.5rem"
			overflowY="hidden"
		>
			<Header />
			<Text
				as="h3"
				fontSize="3xl"
				fontWeight="100"
				letterSpacing="4.75px"
				fontFamily="Barlow Condensed"
				m="3rem 0 1.9rem 10rem"
			>
				<Text as="strong" color="#D0D6F990">
					01
				</Text>{" "}
				PICK YOUR DESTINATION
			</Text>
			{planets.length === 0 ? (
				<Text
					textAlign="center"
					fontFamily="Bellefair"
					fontSize="4xl"
				>
					Cargando... <Spinner color="white.500" size="lg" />
				</Text>
			) : (
				<Flex boxSize="5xl" m="0 auto" justifyContent="space-around">
					<Image
						as={motion.img}
						src={planets[planetValues].images.png}
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
							{planets[planetValues].name.toUpperCase()}
						</Text>
						<Text
							fontFamily="Barlow"
							color="#D0D6F9"
							width="400px"
							pb="2rem"
							borderBottom="1px #383B4B solid"
						>
							{planets[planetValues].description}
						</Text>
						<Flex
							width="sm"
							justifyContent="space-between"
							mt=".5rem"
						>
							<Box>
								<Text color="#D0D6F9" fontFamily="Barlow Condensed">
									AVG. DISTANCE
								</Text>
								<Text fontSize="3xl" fontFamily="Bellefair">
									{planets[planetValues].distance.toUpperCase()}
								</Text>
							</Box>
							<Box>
								<Text color="#D0D6F9" fontFamily="Barlow Condensed">
									EST. TRAVEL TIME
								</Text>
								<Text fontSize="3xl" fontFamily="Bellefair">
									{planets[planetValues].travel.toUpperCase()}
								</Text>
							</Box>
						</Flex>
					</Box>
				</Flex>
			)}
		</Box>
	);
};