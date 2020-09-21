import React from "react";
import { Container } from "./styles/output";

export default function Output({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}
