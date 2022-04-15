import React, { useState, useEffect } from "react";

import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../Header";
import bgDestination from "../../assets/destination/background-destination-desktop.jpg";
import { fetchApi } from "../services/fetchAPI";

export const Destination = () => {
	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		fetchApi("destinations").then(setPlanets);
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
			<Flex></Flex>
		</Box>
	);
};
