import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const DestinationItem = ({
	img,
	name,
	description,
	distance,
	travel
}) => {
	return (
		<Flex>
			<Image src={img} />
			<Box>
				<Text as="h2">{name}</Text>
				<Text>{description}</Text>
				<Flex>
					<Box>{distance}</Box>
					<Box>{travel}</Box>
				</Flex>
			</Box>
		</Flex>
	);
};
