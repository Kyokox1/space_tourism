import React, { useState, useEffect } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";

import { Header } from "../sections/Header";
import { TitleItem } from "../items/Title_item";
import { CrewItem } from "../items/Crew_item";
import { fetchApi } from "../../services/fetchAPI";

import bgCrew from "../../assets/crew/background-crew-desktop.jpg";

export const Crew = () => {
	const [crew, setCrew] = useState([]);
	const [crewValues, setCrewValues] = useState("0");

	const key = "crew";

	useEffect(() => {
		fetchApi(key).then(setCrew);
	}, []);

	return (
		<Box
			bgImg={bgCrew}
			bgSize="cover"
			color="white"
			height="100vh"
			pt={{ lg: "2.5rem", md: "0", base: "0" }}
			overflowY="hidden"
			fontFamily="Bellefair"
		>
			<Header />
			<TitleItem title={"MEET YOUR CREW"} number={"02"} />

			{crew.length === 0 ? (
				<Text textAlign="center" fontFamily="Bellefair" fontSize="4xl">
					Cargando... <Spinner as="span" color="white.500" size="lg" />
				</Text>
			) : (
				<CrewItem
					name={crew[crewValues].name}
					role={crew[crewValues].role}
					bio={crew[crewValues].bio}
					img={crew[crewValues].images.png}
					setCrewValues={setCrewValues}
					crewValues={crewValues}
				/>
			)}
		</Box>
	);
};
