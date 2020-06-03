const form = document.querySelector('.form');
const input = document.querySelector('#imageUploadInput');

const imageName = document.querySelector('.image-name');
const image = document.querySelector('.image');

const loadingWrapper = document.querySelector('.loading-wrapper');
const loadingBar = document.querySelector('.loading-bar');
const loadingNumber = document.querySelector('.loading-number');


let imageData;
input.addEventListener('change', e => {
    if (e.target.files.length) {
        imageData = e.target.files[0];
        imageName.style.display = 'block';
        imageName.innerText = imageData.name;
    }
});

// Form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Link
    const api_link = '...';
    // Data
    const formData = new FormData();
    formData.append('image', imageData);
    // Config
    const config = {
        // Show Loading Bar while uploading
        onUploadProgress: progressEvent => {
            const { loaded, total } = progressEvent;
            const persentege = Math.round((loaded * 100) / total)
            loadingWrapper.style.display = "block";
            loadingBar.style.width = persentege + '%';
            loadingNumber.innerText = persentege + '%';
        },
        // Telling the server what type of content we send
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }
    // Request
    axios.patch(api_link, formData, config).then(res => {
        // Show Image after uploading
        image.style.display = 'block';
        image.setAttribute('src', res.data.user.newAvatar);
        // Hide progress bar after uploading
        loadingWrapper.style.display = 'none';
    });
});