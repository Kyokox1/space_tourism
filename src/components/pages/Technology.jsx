import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";

import { Header } from "../sections/Header";
import { TitleItem } from "../Title_item";
import { ButtonTechnologyItem } from "../Button_Technology_item";
import { fetchApi } from "../../services/fetchAPI";

import bgTechnology from "../../assets/technology/background-technology-desktop.jpg";

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
			pt="2.5rem"
			overflowY="hidden"
			fontFamily="Bellefair"
		>
			<Header />
			<TitleItem title="SPACE LAUNCH 101" number="03" />

			{technology.length === 0 ? (
				<Text
					textAlign="center"
					fontFamily="Bellefair"
					fontSize="4xl"
				>
					Cargando...{" "}
					<Spinner as="span" color="white.500" size="lg" />
				</Text>
			) : (
				<Flex
					width="5xl"
					height="25.5rem"
					m="0 auto"
					justifyContent="space-around"
				>
					<Flex
						display="flex"
						flexDir="column"
						gap={7}
						justifyContent="center"
					>
						{Array(3)
							.fill("null")
							.map((_, i) => (
								<ButtonTechnologyItem
									key={i}
									number={i + 1}
									slideTechnology={() => setTechnologyValues(i)}
								/>
							))}
					</Flex>

					<Box>
						<Text
							letterSpacing="4.75px"
							fontFamily="Barlow Condensed"
						>
							THE TERMINOLOGY...
						</Text>
						<Text fontSize="5xl">
							{technology[technologyValues].name.toUpperCase()}
						</Text>
						<Text fontFamily="Barlow">
							{technology[technologyValues].description}
						</Text>
					</Box>
					<Image
						src={technology[technologyValues].images.portrait}
						alt="techcology"
						objectFit="contain"
					/>
				</Flex>
			)}
		</Box>
	);
};
