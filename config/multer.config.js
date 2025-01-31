const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary.config'); // Import Cloudinary config


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'driveplus-uploads', 
    resource_type: 'auto',   
  },
});

const upload = multer({ storage });

module.exports = upload;