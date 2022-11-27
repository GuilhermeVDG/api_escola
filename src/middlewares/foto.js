import multer from 'multer';
import uploadConfig from '../config/multer';

const upload = multer(uploadConfig.upload('./uploads')).single('file');

export default (req, res, next) => upload(req, res, (error) => {
  if (error) {
    return res.status(400).json({
      error: error.code,
    });
  }

  return next();
});
