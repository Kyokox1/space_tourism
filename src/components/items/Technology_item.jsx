import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { ButtonTechnologyItem } from "./Button_Technology_item";

export const TechnologyItem = ({
	name,
	description,
	imgLandscape,
	imgPortrait,
	setTechnologyValues
}) => {
	return (
		<Flex
			flexDir={{
				lg: "row",
				md: "column-reverse",
				base: "column-reverse"
			}}
			w="100vw"
			h={{ lg: "24rem", md: "80vh", base: "39rem" }}
			m="0 auto"
			justifyContent={{
				lg: "space-around",
				md: "space-around",
				base: "space-evenly"
			}}
		>
			<Box
				display="flex"
				justifyContent={{
					lg: "space-evenly",
					md: "space-evenly",
					base: "space-around"
				}}
				flexDir={{ lg: "row", md: "column", base: "column" }}
				h={{ lg: "auto", md: "50%", base: "55%" }}
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
					w={{ lg: "50%", md: "80%", base: "90%" }}
				>
					<Text
						letterSpacing="4.75px"
						fontFamily="Barlow Condensed"
						color="#D0D6F9"
					>
						THE TERMINOLOGY...
					</Text>
					<Text fontSize={{ lg: "5xl", md: "5xl", base: "4xl" }}>
						{name.toUpperCase()}
					</Text>
					<Text fontFamily="Barlow" color="#D0D6F9">
						{description}
					</Text>
				</Box>
			</Box>
			{/* Picture se puede utilizar como MediaQuery */}
			<Box
				as="picture"
				h={{ lg: "inherit", md: "30%", base: "20%" }}
				w={{ lg: "70%", md: "inherit", base: "inherit" }}
			>
				<source srcSet={imgLandscape} media="(max-width: 990px)" />
				<Image
					src={imgPortrait}
					mt={{ lg: "-4rem", md: "0", base: "0" }}
					alt="techcology"
					objectFit="contain"
					m="0 auto"
				/>
			</Box>
		</Flex>
	);
};
