import React from "react";
import { Link } from "react-router-dom";
import {
	Heading,
	Image,
	ListItem,
	Flex,
	Box,
	Text,
	UnorderedList
} from "@chakra-ui/react";

import logo from "../../assets/shared/logo.svg";
// Todo abstraer el nabvar y agregar hover y active

export const Header = () => {
	return (
		<Heading
			as="header"
			ml="3.45rem"
			height="96px"
			fontFamily="Barlow Condensed"
		>
			<Flex alignItems="center" height="inherit">
				<Image src={logo} width={12} />
				<Box
					height="1px"
					width="30rem"
					zIndex="900"
					bg="#ffffff"
					opacity=".25"
					ml="100px"
					justifyContent="space-around"
				></Box>
				<Box as="nav" height="inherit">
					<UnorderedList
						bg="rgba(255, 255, 255, 0.04)"
						backdropFilter="blur(81.5485px)"
						width="830px"
						fontWeight="400"
						listStyleType="none"
						px="4rem"
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
						<ListItem>
							<Link to="/">
								<Text as="strong" color="white">
									00
								</Text>{" "}
								HOME
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/destination">
								<Text as="strong" color="#FFFFFF">
									01
								</Text>{" "}
								DESTINATION
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/crew">
								<Text as="strong" color="#FFFFFF">
									02
								</Text>{" "}
								CREW
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/technology">
								<Text as="strong" color="#FFFFFF">
									03
								</Text>{" "}
								TECHNOLOGY
							</Link>
						</ListItem>
					</UnorderedList>
				</Box>
			</Flex>
		</Heading>
	);
};
