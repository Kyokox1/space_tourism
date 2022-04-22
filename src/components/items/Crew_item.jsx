import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

import { RadioCrewItem } from "./Radio_Crew_item";

export const CrewItem = ({
	role,
	name,
	bio,
	img,
	crewValues,
	setCrewValues
}) => {
	return (
		<Flex
			flexDir={{ lg: "row", md: "column", base: "column-reverse" }}
			alignItems="center"
			width={{ lg: "86%", md: "86%", base: "100%" }}
			height={{ lg: "60vh", md: "80vh", base: "100vh" }}
			m="0 auto"
			justifyContent="space-evenly"
		>
			<Flex
				flexDir={{ lg: "column", md: "column", base: "column-reverse" }}
				width={{ lg: "45%", md: "100%", base: "100%" }}
				textAlign={{ lg: "inherit", md: "center", base: "center" }}
				height={{ lg: "hidden", md: "hidden", base: "50%" }}
				justifyContent={{
					lg: "space-around",
					md: "space-evenly",
					base: "space-evenly"
				}}
			>
				<Flex justifyContent="center" gap="1rem" flexDir="column">
					<Text
						color="#D0D6F990"
						fontSize={{ lg: "3xl", md: "3xl", base: "xl" }}
					>
						{role.toUpperCase()}{" "}
					</Text>
					<Text fontSize={{ lg: "5xl", md: "5xl", base: "2xl" }}>
						{name.toUpperCase()}
					</Text>
					<Text
						color="#D0D6F9"
						fontFamily="Barlow"
						width="75%"
						m={{ lg: 0, md: "0 auto", base: "0 auto" }}
					>
						{bio}{" "}
					</Text>
				</Flex>
				{/* Componente para crear Radios */}
				<RadioCrewItem
					values={crewValues}
					setValues={setCrewValues}
					radios={4}
				/>
			</Flex>
			<Image
				borderBottom="1px #383B4B solid"
				alignSelf={{ lg: "self-end", md: "auto", base: "auto" }}
				src={img}
				objectFit="contain"
				mb="-5vh"
				// mb="-6vh"
				width={{ lg: "75vh", md: "100%", base: "100%" }}
				height={{ lg: "80vh", md: "45vh", base: "280px" }}
				alt="crew"
			/>
		</Flex>
	);
};
