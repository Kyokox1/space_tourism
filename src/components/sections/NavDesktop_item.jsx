import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export const NavDesktop = () => {
	// const [active, setActive] = useState(""); //*NO es necesario con el Pathname.

	const { pathname } = useLocation();
	console.log(pathname);

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
					<ListItem
						key={i}
						// onClick={e=>setActive(e.target.textContent.slice(3))} //*No es necesario con el Pathname, pero si es otra forma.
						borderBottom={
							`/${value.toLocaleLowerCase()}` === pathname ||
							`${pathname}home` === `/${value.toLocaleLowerCase()}`
								? "3px #FFFFFF solid"
								: "3px transparent solid"
						}
						_hover={
							`/${value.toLocaleLowerCase()}` !== pathname &&
							`${pathname}home` !== `/${value.toLocaleLowerCase()}`
								? {
										borderBottom: "3px #979797 solid"
								  }
								: null
						}
					>
						<Link to={`/${value.toLocaleLowerCase()}`}>
							<Box
								as="button"
								height="96px"
								display="flex"
								alignItems="center"
								justifyContent="center"
								gap="7px"
								letterSpacing="3.5px"
							>
								<Text
									as="strong"
									color="white"
									display={{ lg: "inline", md: "none", base: "none" }}
								>
									0{i}
								</Text>{" "}
								{value}
							</Box>
						</Link>
					</ListItem>
				))}
			</UnorderedList>
		</Box>
	);
};
