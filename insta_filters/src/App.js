import React, { useState } from 'react';
import './App.css';

function App() {
	const [image, setImage] = useState('');
	const [currentFilter, setCurrentFilter] = useState({
		background: '',
		opacity: 0.1
	});
	const filters = [
		{
			name: 'PurpleToGreen',
			value: 'linear-gradient(to bottom, #8360c3, #2ebf91)'
		},
		{
			name: 'BlueToYello',
			value: 'linear-gradient(to bottom, #544a7d, #ffd452)'
		},
		{
			name: 'BlueToWhie',
			value: 'linear-gradient(to bottom, #005AA7, #FFFDE4)'
		},
		{
			name: 'RedToGrey',
			value: 'linear-gradient(to bottom, #dd1818, #333333)'
		}
	];
	return (
		<div className="App">
			{/* Show Image */}
			<div className="image-container">
				<div
					className="filter"
					style={{
						background: currentFilter.background,
						opacity: currentFilter.opacity
					}}
				></div>
				<img src={image} className="image" />
			</div>

			{/* Upload Image */}
			<form className="uploadForm">
				<input
					type="file"
					onChange={e => setImage(URL.createObjectURL(e.target.files[0]))}
					className="uploadInput"
					angle="exif"
				/>
			</form>

			{/* Filters Opacity */}
			{currentFilter.background && (
				<div className="opacityPreview">
					<h3 className="opTitle">Opacity:</h3>
					<input
						type="range"
						className="opacityInput"
						value={currentFilter.opacity * 100}
						min="0"
						max="70"
						step="10"
						onChange={e =>
							setCurrentFilter({
								...currentFilter,
								opacity: e.target.value / 100
							})
						}
					></input>
				</div>
			)}

			{/* Filters Preview */}
			{image && (
				<div className="filtersPreview">
					<h3 className="filTitle">Filters:</h3>
					<div className="filsColors">
						{filters.map(filter => {
							return (
								<div
									key={filter.name}
									className="filterPreview"
									style={{ background: filter.value }}
									onClick={e =>
										setCurrentFilter({
											...currentFilter,
											background: e.target.style.background
										})
									}
								></div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
