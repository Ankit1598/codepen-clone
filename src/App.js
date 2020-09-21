import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import EditorContainer from "./containers/EditorContainer";
import OutputContainer from "./containers/OutputContainer";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
	const [html, setHtml] = useLocalStorage("html", "");
	const [css, setCSS] = useLocalStorage("css", "");
	const [javascript, setJavascript] = useLocalStorage("javascript", "");
	const [srcDoc, setSrcDoc] = useState("");

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
        
      `);
		}, 500);

		return () => clearTimeout(timeOut);
	}, [html, css, javascript]);

	return (
		<>
			<Editor>
				<EditorContainer
					language='xml'
					displayName='HTML'
					value={html}
					onChange={setHtml}
				/>
				<EditorContainer
					language='css'
					displayName='CSS'
					value={css}
					onChange={setCSS}
				/>
				<EditorContainer
					language='javascript'
					displayName='Javascript'
					value={javascript}
					onChange={setJavascript}
				/>
			</Editor>
			<OutputContainer srcDoc={srcDoc} />
		</>
	);
}

export default App;
