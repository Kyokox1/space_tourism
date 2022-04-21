import React from "react";
import { Heading, Image, Flex, Box } from "@chakra-ui/react";

import { NavMobile } from "./NavMobile_item";
import { NavDesktop } from "./NavDesktop_item";

import logo from "../../assets/shared/logo.svg";

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
