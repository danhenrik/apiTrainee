const MediaTypeError = require('../errors/MediaTypeError');
const multer = require('multer');
const path = require('path');

const allowedExtensions = ['png', 'jpg', 'jpeg'];

function checkFileExtension(file, callback) {
  const extension = path.extname(file.originalname);
  const isValidExtension =
    allowedExtensions.indexOf(extension.substring(1).toLowerCase()) !== -1;

  const isValidMimeType =
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg';

  if (isValidExtension && isValidMimeType) {
    callback(null, true);
  } else {
    callback(
      new MediaTypeError(`A extensão ${extension} não é válida!`),
      false,
    );
  }
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const uploadFolder = path.resolve(__dirname, '../public/images');
    callback(null, uploadFolder);
  },
  filename: async (req, file, callback) => {
    const ext = path.extname(file.originalname);
    const rdmNumber = Math.floor(Math.random() * 10000);
    // Gambiarra
    const filename = Date.now() + rdmNumber + ext;
    callback(null, filename);
  },
});

const upload = () => {
  return multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
      checkFileExtension(file, callback);
    },
  }).array('images');
};

module.exports = {upload};
