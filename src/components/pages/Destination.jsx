import React, { useState, useEffect } from "react";

import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Header } from "../sections/Header";
import { fetchApi } from "../../services/fetchAPI";
// import { DestinationItem } from "../Destination_item";

import bgDestination from "../../assets/destination/background-destination-desktop.jpg";

export const Destination = () => {
	const [planets, setPlanets] = useState([]);

	const key = "destinations";

	useEffect(() => {
		fetchApi(key).then(setPlanets);
	}, []);

	console.log(planets);
	return (
		<Box
			bgImg={bgDestination}
			bgSize="cover"
			color="white"
			height="100vh"
			pt="2.5rem"
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

			{planets.map((planet) => {
				return (
					<Flex
						key={planet.name}
						boxSize="5xl"
						m="0 auto"
						justifyContent="space-around"
					>
						<Image
							src={planet.images.png}
							animation=" rotate .4 infinite"
							boxSize="sm"
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
									color="#D0D6F9"
									letterSpacing="4px"
									fontWeight="400"
									colorScheme={"transparent"}
									_hover={{
										borderBottom: "#FFFFFF60 solid 2px"
									}}
									_focus={{
										borderBottom: "#FFFFFF solid 2px",
										color: "#FFFFFF"
									}}
									padding="0px"
								>
									MOON
								</Button>
								<Button
									color="#D0D6F9"
									letterSpacing="4px"
									border
									fontWeight="400"
									colorScheme={"transparent"}
									_hover={{
										borderBottom: "#FFFFFF60 solid 2px"
									}}
									_focus={{
										borderBottom: "#FFFFFF solid 2px",
										color: "#FFFFFF"
									}}
									padding="0px"
								>
									MARS
								</Button>
								<Button
									color="#D0D6F9"
									letterSpacing="4px"
									fontWeight="400"
									colorScheme={"transparent"}
									_hover={{
										borderBottom: "#FFFFFF60 solid 2px"
									}}
									_focus={{
										borderBottom: "#FFFFFF solid 2px",
										color: "#FFFFFF"
									}}
									padding="0px"
								>
									EUROPA
								</Button>
								<Button
									color="#D0D6F9"
									letterSpacing="4px"
									fontWeight="400"
									colorScheme={"transparent"}
									_hover={{
										borderBottom: "#FFFFFF60 solid 2px"
									}}
									_focus={{
										borderBottom: "#FFFFFF solid 2px",
										color: "#FFFFFF"
									}}
									padding="0px"
								>
									TITAN
								</Button>
							</Box>
							<Text as="h2" fontFamily="Bellefair" fontSize="7xl">
								{planet.name.toUpperCase()}
							</Text>
							<Text
								fontFamily="Barlow"
								color="#D0D6F9"
								width="400px"
								pb="2rem"
								borderBottom="1px #383B4B solid"
							>
								{planet.description}
							</Text>
							<Flex
								width="xs"
								justifyContent="space-between"
								mt=".5rem"
							>
								<Box>
									<Text color="#D0D6F9" fontFamily="Barlow Condensed">
										AVG. DISTANCE
									</Text>
									<Text fontSize="3xl" fontFamily="Bellefair">
										{planet.distance.toUpperCase()}
									</Text>
								</Box>
								<Box>
									<Text color="#D0D6F9" fontFamily="Barlow Condensed">
										EST. TRAVEL TIME
									</Text>
									<Text fontSize="3xl" fontFamily="Bellefair">
										{planet.travel.toUpperCase()}
									</Text>
								</Box>
							</Flex>
						</Box>
					</Flex>
				);
			})}
		</Box>
	);
};
