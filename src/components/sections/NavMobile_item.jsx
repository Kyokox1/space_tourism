import React, { useRef } from "react";
import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	Text,
	useDisclosure
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavMobile = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	const wordsNavBar = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

	return (
		<Box
			as="nav"
			mr="1.5rem"
			display={{ lg: "none", md: "none", base: "block" }}
		>
			<Box
				as="button"
				fontSize="3.2rem"
				h="50px"
				variant="link"
				color="#FFFFFF"
				ref={btnRef}
				onClick={onOpen}
			>
				<FaBars />
			</Box>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent
					bg="rgba(255, 255, 255, 0.04)"
					backdropFilter="blur(81.5485px)"
					display="flex"
				>
					<Button
						color="white"
						p="0"
						m="5px"
						alignSelf="flex-end"
						w="60px"
						h="60px"
						variant="ghost"
						fontSize="2.5rem"
						onClick={onClose}
					>
						<FaTimes />
					</Button>
					<DrawerBody
						display="flex"
						flexDir="column"
						gap={3}
						fontFamily="Barlow Condensed"
						fontSize="lg"
						color="#FFFFFF"
					>
						{wordsNavBar.map((el, i) => (
							<Link to={`/${el.toLowerCase()}`} key={el}>
								<Box
									as="button"
									width="100%"
									h="60px"
									textAlign="initial"
									letterSpacing="4.75px"
								>
									<Text as="span" fontWeight="bold">
										0{i}
									</Text>{" "}
									{el}
								</Box>
							</Link>
						))}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
};
