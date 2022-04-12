import {
	Box,
	Flex,
	Heading,
	Image,
	Link,
	ListItem,
	UnorderedList
} from "@chakra-ui/react";
import bg from "../assets/background-home-desktop.jpg";
import logo from "../assets/shared/logo.svg";
import React, { useState } from "react";

function App() {
	return (
		<>
			<Box bgImage={bg} color="white" height="100vh" pt="2.5rem">
				<Heading as="header" ml="3.45rem" height="96px">
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
						<UnorderedList
							bg="rgba(255, 255, 255, 0.04)"
							backdropFilter="blur(81.5485px)"
							width="830px"
							fontWeight="light"
							listStyleType="none"
							px="4rem"
							ml="-2rem"
							height="inherit"
							display="flex"
							fontSize="1rem"
							justifyContent="space-around"
							alignItems="center"
							letterSpacing="2.7px"
						>
							<ListItem>
								<Link href="/">
									<strong>00</strong> HOME
								</Link>
							</ListItem>
							<ListItem>
								<Link href="/">
									<strong>01</strong> DESTINATION
								</Link>
							</ListItem>
							<ListItem>
								<Link href="/">
									<strong>02</strong><span>{" "}</span> CREW
								</Link>
							</ListItem>
							<ListItem>
								<Link href="/">
									<strong>03</strong> TECHNOLOGY
								</Link>
							</ListItem>
						</UnorderedList>
					</Flex>
				</Heading>
			</Box>
		</>
	);
}

export default App;
