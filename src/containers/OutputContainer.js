import React from "react";
import Output from "../components/Output";

function OutputContainer({ srcDoc }) {
	return (
		<Output>
			<iframe
				srcDoc={srcDoc}
				title='output'
				sandbox='allow-scripts'
				frameBorder='0'
				width='100%'
				height='100%'
			></iframe>
		</Output>
	);
}

export default OutputContainer;
