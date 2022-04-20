import React from "react";
import { Text } from "@chakra-ui/react";

export const TitleItem = ({ number, title }) => {
	return (
		<Text
			as="h3"
			fontSize="3xl"
			fontWeight="100"
			letterSpacing="4.75px"
			fontFamily="Barlow Condensed"
			m={{ lg: "3rem 0 1.7rem 10rem", md: "2rem 0 0 2rem" }}
		>
			<Text as="strong" color="#D0D6F990">
				{number}
			</Text>{" "}
			{title}
		</Text>
	);
};
