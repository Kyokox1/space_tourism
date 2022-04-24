import React from "react";
import { Text } from "@chakra-ui/react";

export const TitleItem = ({ number, title }) => {
	return (
		<Text
			as="h3"
			textAlign={{ lg: "initial", md: "center", base: "center" }}
			fontSize={{ lg: "3xl", md: "3xl", base: "xl" }}
			fontWeight="100"
			letterSpacing="4.75px"
			fontFamily="Barlow Condensed"
			m={{ lg: "2rem 0 1.6rem 10rem", md: "1.5rem 0 0 2rem" }}
		>
			<Text as="strong" color="#D0D6F990">
				{number}
			</Text>{" "}
			{title}
		</Text>
	);
};
