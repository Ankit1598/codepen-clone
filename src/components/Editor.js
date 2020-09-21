import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { Container, Wrapper, Title, Btn, Controller } from "./styles/editor";

export default function Editor({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Editor.Wrapper = function EditorWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Editor.Title = function EditorTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Editor.Btn = function EditorBtn({ children, ...restProps }) {
	return <Btn {...restProps}>{children}</Btn>;
};

Editor.Controller = function EditorController({ children, ...restProps }) {
	return (
		<Controller>
			<ControlledEditor {...restProps}>{children}</ControlledEditor>
		</Controller>
	);
};
