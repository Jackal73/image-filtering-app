const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

// Add Filters and Effects
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {

        // Image Filters
        if (e.target.classList.contains('brightness-add')) {
            Caman('#canvas', img, function () {
                this.brightness(2).render();
            });
        } else if (e.target.classList.contains('brightness-remove')) {
            Caman('#canvas', img, function () {
                this.brightness(-2).render();
            });
        } else if (e.target.classList.contains('contrast-add')) {
            Caman('#canvas', img, function () {
                this.contrast(2).render();
            });
        } else if (e.target.classList.contains('contrast-remove')) {
            Caman('#canvas', img, function () {
                this.contrast(-2).render();
            });
        } else if (e.target.classList.contains('saturation-add')) {
            Caman('#canvas', img, function () {
                this.saturation(10).render();
            });
        } else if (e.target.classList.contains('saturation-remove')) {
            Caman('#canvas', img, function () {
                this.saturation(-10).render();
            });
        } else if (e.target.classList.contains('vibrance-add')) {
            Caman('#canvas', img, function () {
                this.vibrance(10).render();
            });
        } else if (e.target.classList.contains('vibrance-remove')) {
            Caman('#canvas', img, function () {
                this.vibrance(-10).render();
            });
        } else if (e.target.classList.contains('exposure-add')) {
            Caman('#canvas', img, function () {
                this.exposure(5).render();
            });
        } else if (e.target.classList.contains('exposure-remove')) {
            Caman('#canvas', img, function () {
                this.exposure(-5).render();
            });
        } else if (e.target.classList.contains('sepia-add')) {
            Caman('#canvas', img, function () {
                this.sepia(10).render();
            });
        } else if (e.target.classList.contains('sepia-remove')) {
            Caman('#canvas', img, function () {
                this.sepia(-10).render();
            });
        } else if (e.target.classList.contains('invert-add')) {
            Caman('#canvas', img, function () {
                this.invert().render();
            });
        } else if (e.target.classList.contains('greyscale-add')) {
            Caman('#canvas', img, function () {
                this.greyscale().render();
            });

        // Image Effects
        } else if (e.target.classList.contains('vintage-add')) {
            Caman('#canvas', img, function () {
                this.vintage().render();
            });
        } else if (e.target.classList.contains('lomo-add')) {
            Caman('#canvas', img, function () {
                this.lomo().render();
            });
        } else if (e.target.classList.contains('clarity-add')) {
            Caman('#canvas', img, function () {
                this.clarity().render();
            });
        } else if (e.target.classList.contains('sincity-add')) {
            Caman('#canvas', img, function () {
                this.sinCity().render();
            });
        } else if (e.target.classList.contains('crossprocess-add')) {
            Caman('#canvas', img, function () {
                this.crossProcess().render();
            });
        } else if (e.target.classList.contains('pinhole-add')) {
            Caman('#canvas', img, function () {
                this.pinhole().render();
            });
        } else if (e.target.classList.contains('nostalgia-add')) {
            Caman('#canvas', img, function () {
                this.nostalgia().render();
            });
        } else if (e.target.classList.contains('hermajesty-add')) {
            Caman('#canvas', img, function () {
                this.herMajesty().render();
            });
        }
    }
});

// Revert Image Filters and Effects
revertBtn.addEventListener('click', (e) => {
    Caman('#canvas', img, function() {
        this.revert();
    });
});

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
        };
    }, false);
});

// Download Event
downloadBtn.addEventListener('click', () => {
    //Get File Extension
    const fileExtension = fileName.slice(-4);

    // Initialize New Filename Extension
    let newFileName;

    // Check image Type
    if (fileExtension === '.jpg' || fileExtension === '.png') {
        newFileName = fileName.substring(0, fileName.length - 4) + '-edited.jpg';
    }

    // Call Download
    download(canvas, newFileName);
});

// Download Function
function download(canvas, fileName) {
    // Initialize Event
    let e;
    // Create Link
    const link = document.createElement('a');

    // Set Properties
    link.download = fileName;
    link.href = canvas.toDataURL('image/jpeg', 0.8);
    //Create New Mouse Event
    e = new MouseEvent('click');
    // Dispatch Event
    link.dispatchEvent(e);
}









