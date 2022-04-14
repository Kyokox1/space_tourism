import React from "react";
import { Box } from "@chakra-ui/react";
import "@fontsource/barlow";
import "@fontsource/barlow-condensed";
import "@fontsource/bellefair";
import bg from "../assets/background-home-desktop.jpg";
import { Header } from "./Header";
import { Home } from "./pages/Home";

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
				<Header />
				{/* Body */}
				<Home />
			</Box>
		</>
	);
}

export default App;
