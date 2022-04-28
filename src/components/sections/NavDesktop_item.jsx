import React from "react";
import { Link } from "react-router-dom";
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export const NavDesktop = () => {
	const navValues = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

	return (
		<Box
			as="nav"
			display={{ lg: "block", md: "block", base: "none" }}
			height="inherit"
		>
			<UnorderedList
				bg="rgba(255, 255, 255, 0.04)"
				backdropFilter="blur(81.5485px)"
				width="65vw"
				fontWeight="400"
				listStyleType="none"
				px={{ lg: "4rem", md: "0", base: "0" }}
				ml="-2rem"
				height="inherit"
				display="flex"
				color="#D0D6F9"
				fontSize="1rem"
				lineHeight="19px"
				justifyContent="space-around"
				alignItems="center"
				letterSpacing="2.7px"
			>
				{navValues.map((value, i) => (
					<ListItem key={i}>
						<Link to={`/${value.toLocaleLowerCase()}`}>
							<Text
								as="strong"
								color="white"
								display={{ lg: "inline", md: "none", base: "none" }}
							>
								0{i}
							</Text>{" "}
							{value}
						</Link>
					</ListItem>
				))}
			</UnorderedList>
		</Box>
	);
};
