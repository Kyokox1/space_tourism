import React from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

export const RadioCrewItem = ({ values, setValues, radios }) => {
	return (
		<RadioGroup
			onChange={setValues}
			value={values}
			name="radio-form"
			m={{ lg: "0", md: "0 auto", base: "0 auto" }}
		>
			<Stack direction="row" spacing={6}>
				{Array(radios)
					.fill(null)
					.map((_, i) => (
						<Radio
							key={i}
							value={`${i}`}
							colorScheme="white"
							_hover={{
								background: "#FFFFFF60"
							}}
						/>
					))}
			</Stack>
		</RadioGroup>
	);
};
