import React, { useState, useEffect } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";

import { Header } from "../sections/Header";
import { TitleItem } from "../items/Title_item";
import { DestinationItem } from "../items/Destination_item";
import { fetchApi } from "../../services/fetchAPI";

import bgDestination from "/assets/destination/background-destination-desktop.jpg";

export const Destination = () => {
	const [planets, setPlanets] = useState([]);
	const [planetValues, setPlanetValues] = useState(0);

	const key = "destinations";

	useEffect(() => {
		fetchApi(key).then(setPlanets);
	}, []);

	return (
		<Box
			bgImg={bgDestination}
			bgSize="cover"
			color="white"
			height="100vh"
			pt={{ lg: "2rem", md: "0", base: "0" }}
			overflowY={{ lg: "auto", md: "auto", base: "auto" }}
			overflowX="hidden"
		>
			<Header />
			<TitleItem title={"PICK YOUR DESTINATION"} number={"01"} />
			{planets?.length === 0 ? (
				<Text textAlign="center" fontFamily="Bellefair" fontSize="4xl">
					Cargando... <Spinner as="span" color="white.500" size="lg" />
				</Text>
			) : (
				<DestinationItem
					name={planets[planetValues].name}
					img={planets[planetValues].images.png}
					description={planets[planetValues].description}
					travel={planets[planetValues].travel}
					distance={planets[planetValues].distance}
					setPlanetValues={setPlanetValues}
				/>
			)}
		</Box>
	);
};
