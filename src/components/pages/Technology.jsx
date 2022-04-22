import React, { useState, useEffect } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";

import { Header } from "../sections/Header";
import { TitleItem } from "../items/Title_item";
import { TechnologyItem } from "../items/Technology_item";
import { fetchApi } from "../../services/fetchAPI";

import bgTechnology from "/assets/technology/background-technology-desktop.jpg";

export const Technology = () => {
	const [technology, setTechnology] = useState([]);
	const [technologyValues, setTechnologyValues] = useState(0);

	const key = "technology";

	useEffect(() => {
		fetchApi(key).then(setTechnology);
	}, []);

	return (
		<Box
			bgImg={bgTechnology}
			bgSize="cover"
			color="white"
			height="100vh"
			pt={{ lg: "2.5rem", md: "0", base: "0" }}
			overflowY={{ lg: "hidden", md: "hidden", base: "auto" }}
			fontFamily="Bellefair"
		>
			<Header />
			<TitleItem title="SPACE LAUNCH 101" number="03" />

			{technology.length === 0 ? (
				<Text textAlign="center" fontFamily="Bellefair" fontSize="4xl">
					Cargando... <Spinner as="span" color="white.500" size="lg" />
				</Text>
			) : (
				<TechnologyItem
					name={technology[technologyValues].name}
					description={technology[technologyValues].description}
					imgLandscape={technology[technologyValues].images.landscape}
					imgPortrait={technology[technologyValues].images.portrait}
					setTechnologyValues={setTechnologyValues}
				/>
			)}
		</Box>
	);
};
