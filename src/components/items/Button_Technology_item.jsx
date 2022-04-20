import React from "react";
import { Box } from "@chakra-ui/react";

export const ButtonTechnologyItem = ({
	number,
	slideTechnology,
	index
}) => {
	return (
		<Box
			as="button"
			autoFocus={index === 0 && true}
			onClick={slideTechnology}
			variant="outline"
			boxSize={{ lg: "5rem", md: "4rem", base: "4rem" }}
			fontFamily="Bellefair"
			transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
			border="1px"
			borderRadius="50%"
			fontSize="3xl"
			fontWeight="light"
			borderColor="#FFFFFF40"
			color="#FFFFFF"
			_hover={{ borderColor: "#FFFFFF" }}
			_active={{
				bg: "#dddfe2",
				transform: "scale(0.90)",
				borderColor: "#bec3c9"
			}}
			_focus={{
				background: "#FFFFFF",
				color: "black"
			}}
		>
			{number}
		</Box>
	);
};
