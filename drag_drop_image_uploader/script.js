const dropzone = document.querySelector('.dropzone');

// Hover the zone
dropzone.addEventListener('dragover', (e) => {
	e.preventDefault();
	dropzone.setAttribute('class', 'dropzone hover');
	dropzone.innerText = 'Drop an image here to upload';
});

// Leave the zone
dropzone.addEventListener('dragleave', () => {
	dropzone.classList.remove('hover');
});

// Drop
dropzone.addEventListener('drop', (e) => {
	e.preventDefault();
	const image = e.dataTransfer.files[0];
	// Test if valid image
	const imgRegex = /\.(gif|jpe?g|tiff|png|webp|bmp)$/i;
	if (!imgRegex.test(image.name)) {
		dropzone.innerText = 'Invalid image format. Please drop a valid image.';
		dropzone.setAttribute('class', 'dropzone invalidImage');
		return false;
	}
	return uploadImage(image);
});

// Upload valid image
const uploadImage = (image) => {
	dropzone.innerText = "Added '" + image.name + "'";
	dropzone.setAttribute('class', 'dropzone validImage');

	const btn = document.createElement('button');
	btn.classList.add('uploadBtn');
	btn.innerText = 'Upload';
	dropzone.appendChild(btn);

	btn.addEventListener('click', () => {
		dropzone.innerHTML = 'Uploaded! 😊';
		// Send POST Request
	});
};
