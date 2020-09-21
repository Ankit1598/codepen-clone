import React, { useState } from "react";
import Editor from "../components/Editor";
import { IconButton } from "@material-ui/core";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import UnfoldLessIcon from "@material-ui/icons/UnfoldLess";

function EditorContainer(props) {
	const { language, displayName, value, onChange } = props;

	const [open, setOpen] = useState(true);

	const handleOpen = () => {
		setOpen(!open);
	};

	const handleChange = (editor, data, value) => {
		onChange(value);
	};

	return (
		<Editor.Wrapper className={open ? "" : "collapsed"}>
			<Editor.Title>
				{displayName}
				<IconButton onClick={handleOpen}>
					{open ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
				</IconButton>
			</Editor.Title>
			<Editor.Controller
				onBeforeChange={handleChange}
				value={value}
				options={{
					lineWrapping: true,
					lint: true,
					mode: language,
					lineNumbers: true,
					theme: "material",
				}}
			/>
		</Editor.Wrapper>
	);
}

export default EditorContainer;
