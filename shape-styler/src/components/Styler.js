import React from 'react';
import './Styler.css';

function Styler(props) {
	return (
		<div className="styler">
			<h2 className="styler-title">Shape styler</h2>
			{/* Width */}
			<div className="styler-prop">
				<p className="styler-propName">Width:</p>
				<div className="styler-row">
					<input
						type="range"
						className="styler-slider"
						defaultValue={props.width}
						onChange={e => props.onChangeWidth(e.target.value)}
						min="100"
						max="500"
					/>
					<p className="styler-propValue">{props.width}px</p>
				</div>
			</div>
			{/* Height */}
			<div className="styler-prop">
				<p className="styler-propName">Height:</p>
				<div className="styler-row">
					<input
						type="range"
						className="styler-slider"
						defaultValue={props.height}
						onChange={e => props.onChangeHeight(e.target.value)}
						min="100"
						max="500"
					/>
					<p className="styler-propValue">{props.height}px</p>
				</div>
			</div>
			{/* Background color */}
			<div className="styler-prop">
				<p className="styler-propName">Background color:</p>
				<div className="styler-row">
					<div className="prop-color red"></div>
					<input
						type="range"
						className="styler-slider"
						defaultValue={props.backgroundRed}
						onChange={e => props.onChangeBackgroundRed(e.target.value)}
						max="255"
					/>
					<p className="styler-propValue">{props.backgroundRed}</p>
				</div>
				<div className="styler-row">
					<div className="prop-color green"></div>
					<input
						type="range"
						className="styler-slider"
						defaultValue={props.backgroundGreen}
						onChange={e => props.onChangeBackgroundGreen(e.target.value)}
						max="255"
					/>
					<p className="styler-propValue">{props.backgroundGreen}</p>
				</div>
				<div className="styler-row">
					<div className="prop-color blue"></div>
					<input
						type="range"
						className="styler-slider"
						defaultValue={props.backgroundBlue}
						onChange={e => props.onChangeBackgroundBlue(e.target.value)}
						max="255"
					/>
					<p className="styler-propValue">{props.backgroundBlue}</p>
				</div>
			</div>

			{/* Border */}
			<div className="styler-prop">
				<p className="styler-propName">Border:</p>
				{/* Thickness */}
				<div className="styler-row">
					<p className="propName">Thickness</p>
					<input
						type="range"
						className="styler-slider"
						defaultValue={props.borderThickness}
						onChange={e => props.onChangeBorderThickness(e.target.value)}
						max="10"
					/>
					<p className="styler-propValue">{props.borderThickness}px</p>
				</div>
				{/* Radius */}
				<div className="styler-row">
					<p className="propName">Radius</p>
					<input
						type="range"
						className="styler-slider"
						defaultValue={props.borderRadius}
						onChange={e => props.onChangeBorderRadius(e.target.value)}
						max="20"
					/>
					<p className="styler-propValue">{props.borderRadius}px</p>
				</div>
				{/* Color */}
				<p className="propName">Color</p>
				<div className="styler-row">
					<div className="prop-color red"></div>
					<input
						type="range"
						className="styler-slider"
						defaultValue={props.borderRed}
						onChange={e => props.onChangeBorderRed(e.target.value)}
						max="255"
					/>
					<p className="styler-propValue">{props.borderRed}</p>
				</div>
				<div className="styler-row">
					<div className="prop-color green"></div>
					<input
						type="range"
						className="styler-slider"
						defaultValue={props.borderGreen}
						onChange={e => props.onChangeBorderGreen(e.target.value)}
						max="255"
					/>
					<p className="styler-propValue">{props.borderGreen}</p>
				</div>
				<div className="styler-row">
					<div className="prop-color blue"></div>
					<input
						type="range"
						className="styler-slider"
						defaultValue={props.borderBlue}
						onChange={e => props.onChangeBorderBlue(e.target.value)}
						max="255"
					/>
					<p className="styler-propValue">{props.borderBlue}</p>
				</div>
			</div>
			<button className="button" onClick={() => props.onShowCode(!props.showCode)}>
				Get CSS
			</button>
		</div>
	);
}

export default Styler;
