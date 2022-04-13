import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Link,
	ListItem,
	Text,
	UnorderedList
} from "@chakra-ui/react";
import "@fontsource/barlow";
import "@fontsource/barlow-condensed";
import "@fontsource/bellefair";
import bg from "../assets/background-home-desktop.jpg";
import logo from "../assets/shared/logo.svg";
import React, { useState } from "react";

function App() {
	return (
		<>
			<Box
				bgImg={bg}
				bgSize="cover"
				color="white"
				height="100vh"
				pt="2.5rem"
			>
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
									<Link href="/">
										<Text as="strong" color="white">
											00
										</Text>
										HOME
									</Link>
								</ListItem>
								<ListItem>
									<Link href="/">
										<Text as="strong" color="#FFFFFF">
											01
										</Text>
										DESTINATION
									</Link>
								</ListItem>
								<ListItem>
									<Link href="/">
										<Text as="strong" color="#FFFFFF">
											02
										</Text>
										CREW
									</Link>
								</ListItem>
								<ListItem>
									<Link href="/">
										<Text as="strong" color="#FFFFFF">
											03
										</Text>
										TECHNOLOGY
									</Link>
								</ListItem>
							</UnorderedList>
						</Box>
					</Flex>
				</Heading>
				{/* Body */}
				<Flex
					as="section"
					justifyContent="space-between"
					width="5xl"
					m="9.5rem auto 0 auto"
					fontWeight="300"
					color="#D0D6F9"
				>
					<Box width="md">
						<Text
							as="h3"
							fontFamily="Barlow Condensed"
							fontSize="2xl"
							letterSpacing={5}
						>
							SO, YOU WANT TO TRAVEL TO
						</Text>
						<Text
							as="h1"
							fontSize="9xl"
							fontFamily="Bellefair"
							textAlign="center"
							letterSpacing={7}
							color="#FFFFFF"
						>
							SPACE
						</Text>
						<Text as="p" fontFamily="Barlow" fontSize="md" mt="-1rem">
							Let’s face it; if you want to go to space, you might as
							well genuinely go to outer space and not hover kind of
							on the edge of it. Well sit back, and relax because
							we’ll give you a truly out of this world experience!
						</Text>
					</Box>
					<Button
						borderRadius="50%"
						width="274px"
						height="274px"
						color="#0B0D17"
						fontFamily="Bellefair"
						fontSize="3xl"
						alignSelf="flex-end"
						fontWeight="400"
					>
						EXPLORE
					</Button>
				</Flex>
			</Box>
		</>
	);
}

export default App;
