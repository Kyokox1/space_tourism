import React, { useState, useEffect } from "react";
import {
	Box,
	Flex,
	Image,
	Radio,
	RadioGroup,
	Spinner,
	Stack,
	Text
} from "@chakra-ui/react";

import { Header } from "../sections/Header";
import { TitleItem } from "../items/Title_item";
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
			pt="2.5rem"
			overflowY="hidden"
			fontFamily="Bellefair"
		>
			<Header />
			<TitleItem title={"PICK YOUR CREW"} number={"02"} />

			{crew.length === 0 ? (
				<Text textAlign="center" fontFamily="Bellefair" fontSize="4xl">
					Cargando... <Spinner as="span" color="white.500" size="lg" />
				</Text>
			) : (
				<Flex
					width="5xl"
					height="25.5rem"
					m="0 auto"
					justifyContent="space-around"
				>
					<Flex flexDir="column" width="60%" justifyContent="space-evenly">
						<Flex justifyContent="center" gap="1rem" flexDir="column">
							<Text color="#D0D6F990" fontSize="3xl">
								{crew[crewValues].role.toUpperCase()}{" "}
							</Text>
							<Text fontSize="5xl">
								{crew[crewValues].name.toUpperCase()}
							</Text>
							<Text color="#D0D6F9" fontFamily="Barlow" width="75%">
								{crew[crewValues].bio}{" "}
							</Text>
						</Flex>

						<RadioGroup
							onChange={setCrewValues}
							value={crewValues}
							name="radio-form"
						>
							<Stack direction="row" spacing={4}>
								<Radio
									value="0"
									colorScheme="white"
									_hover={{
										background: "#FFFFFF60"
									}}
								/>
								<Radio
									value="1"
									colorScheme="white"
									_hover={{
										background: "#FFFFFF60"
									}}
								/>
								<Radio
									value="2"
									colorScheme="white"
									_hover={{
										background: "#FFFFFF60"
									}}
								/>
								<Radio
									value="3"
									colorScheme="white"
									_hover={{
										background: "#FFFFFF60"
									}}
								/>
							</Stack>
						</RadioGroup>
					</Flex>
					<Image
						src={crew[crewValues].images.png}
						objectFit="contain"
						mt="-5rem"
						width="50%"
						alt="crew"
					/>
				</Flex>
			)}
		</Box>
	);
};
