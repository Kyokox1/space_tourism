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
import { NavMobile } from "./NavMobile_item";
import { NavDesktop } from "./NavDesktop_item";
// Todo abstraer el nabvar y agregar hover y active

export const Header = () => {
	return (
		<Heading
			zIndex="900"
			as="header"
			ml={{ lg: "3.45rem", md: "2.5rem", base: "1.5rem" }}
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
					opacity={{ lg: ".25", md: "0", base: "0" }}
					ml="100px"
					justifyContent="space-around"
				></Box>
				<NavDesktop />
				<NavMobile />
			</Flex>
		</Heading>
	);
};
