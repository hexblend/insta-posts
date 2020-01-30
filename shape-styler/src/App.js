import React, { useState } from 'react';
import Styler from './components/Styler';

function App() {
	// Width
	const [width, setWidth] = useState(100);
	// Height
	const [height, setHeight] = useState(100);
	// Background color
	const [backgroundRed, setBackgroundRed] = useState(0);
	const [backgroundGreen, setBackgroundGreen] = useState(0);
	const [backgroundBlue, setBackgroundBlue] = useState(0);
	// Border Thickness
	const [borderThickness, setBorderThickness] = useState(0);
	// Border radius
	const [borderRadius, setBorderRadius] = useState(0);
	// Border color
	const [borderRed, setBorderRed] = useState(0);
	const [borderGreen, setBorderGreen] = useState(0);
	const [borderBlue, setBorderBlue] = useState(0);
	// Show code
	const [showCode, setShowCode] = useState(false);

	const divStyle = {
		width: `${width}px`,
		height: `${height}px`,
		background: `rgb(${backgroundRed}, ${backgroundGreen}, ${backgroundBlue})`,
		border: `${borderThickness}px solid rgb(${borderRed}, ${borderGreen}, ${borderBlue})`,
		borderRadius: `${borderRadius}px`
	};

	return (
		<div className="App">
			<Styler
				// Width
				width={width}
				onChangeWidth={setWidth}
				// Height
				height={height}
				onChangeHeight={setHeight}
				// Background color
				backgroundRed={backgroundRed}
				onChangeBackgroundRed={setBackgroundRed}
				backgroundGreen={backgroundGreen}
				onChangeBackgroundGreen={setBackgroundGreen}
				backgroundBlue={backgroundBlue}
				onChangeBackgroundBlue={setBackgroundBlue}
				// Border radius
				borderRadius={borderRadius}
				onChangeBorderRadius={setBorderRadius}
				// Border thickness
				borderThickness={borderThickness}
				onChangeBorderThickness={setBorderThickness}
				// Border color
				borderRed={borderRed}
				onChangeBorderRed={setBorderRed}
				borderGreen={borderGreen}
				onChangeBorderGreen={setBorderGreen}
				borderBlue={borderBlue}
				onChangeBorderBlue={setBorderBlue}
				// Show code
				showCode={showCode}
				onShowCode={setShowCode}
			/>

			<div style={divStyle}></div>
			{showCode && (
				<pre className="code-box">
					<code>{`.custom-shape { 
    width: ${divStyle.width};
    height: ${divStyle.height};
    background: ${divStyle.background};
    border: ${divStyle.border};
}`}</code>
				</pre>
			)}
		</div>
	);
}

export default App;
