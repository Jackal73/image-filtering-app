const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

// Upload File
uploadFile.addEventListener('change', (e) => {
    // Get File
    const file = document.getElementById('upload-file').files[0];
    // Initialize File Reader
    const reader = new FileReader();

    if (file) {
        // Set File Name
        fileName = file.name;
        // Read data as URL
        reader.readAsDataURL(file);
    }

    // Add Image To Canvas
    reader.addEventListener('load', () => {
        // Create Image
        img = new Image();
        // Set Source of Image
        img.src = reader.result;
        // On Image Load, Add To Canvas
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.removeAttribute('data-caman-id');
        }
    }, false);
});
