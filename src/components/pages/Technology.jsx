import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";

import { Header } from "../sections/Header";
import { TitleItem } from "../items/Title_item";
import { ButtonTechnologyItem } from "../items/Button_Technology_item";
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
			pt={{ lg: "2.5rem", md: "0", base: "0" }}
			overflowY="hidden"
			fontFamily="Bellefair"
		>
			<Header />
			<TitleItem title="SPACE LAUNCH 101" number="03" />

			{technology.length === 0 ? (
				<Text textAlign="center" fontFamily="Bellefair" fontSize="4xl">
					Cargando... <Spinner as="span" color="white.500" size="lg" />
				</Text>
			) : (
				<Flex
					flexDir={{
						lg: "row",
						md: "column-reverse",
						base: "column-reverse"
					}}
					width="100vw"
					height={{ lg: "24rem", md: "80vh", base: "80vh" }}
					m="0 auto"
					justifyContent="space-around"
				>
					<Box
						display="flex"
						justifyContent="space-evenly"
						flexDir={{ lg: "row", md: "column", base: "column" }}
						h={{ lg: "auto", md: "50%" }}
					>
						<Flex
							display="flex"
							flexDir={{ lg: "column", md: "row", base: "row" }}
							gap={7}
							justifyContent="center"
						>
							{Array(3)
								.fill(null)
								.map((_, i) => (
									<ButtonTechnologyItem
										key={i}
										number={i + 1}
										slideTechnology={() => setTechnologyValues(i)}
										index={i}
									/>
								))}
						</Flex>

						<Box
							display="flex"
							flexDir="column"
							justifyContent={{
								lg: "center",
								md: "space-evenly",
								base: "space-evenly"
							}}
							h={{ lg: "auto", md: "60%" }}
							m={{ lg: "0", md: "0 auto", base: "0 auto" }}
							textAlign={{ lg: "initial", md: "center", base: "center" }}
							w={{ lg: "50%", md: "80%", base: "80%" }}
						>
							<Text
								letterSpacing="4.75px"
								fontFamily="Barlow Condensed"
								color="#D0D6F9"
							>
								THE TERMINOLOGY...
							</Text>
							<Text fontSize="5xl">
								{technology[technologyValues].name.toUpperCase()}
							</Text>
							<Text fontFamily="Barlow" color="#D0D6F9">
								{technology[technologyValues].description}
							</Text>
						</Box>
					</Box>
					{/* Picture se puede utilizar como MediaQuery */}
					<Box
						as="picture"
						h={{ lg: "inherit", md: "30%", base: "30%" }}
						w={{ lg: "70%", md: "inherit", base: "inherit" }}
					>
						<source
							srcSet={technology[technologyValues].images.landscape}
							media="(max-width: 990px)"
						/>
						<Image
							src={technology[technologyValues].images.portrait}
							mt={{ lg: "-4rem", md: "0", base: "0" }}
							alt="techcology"
							objectFit="contain"
							m="0 auto"
						/>
					</Box>
				</Flex>
			)}
		</Box>
	);
};
