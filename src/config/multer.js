import multer from 'multer';
import { resolve, extname } from 'path';
import crypto from 'crypto';

export default {
  upload(folder) {
    return {
      fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg') {
          return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE'));
        }

        return cb(null, true);
      },

      storage: multer.diskStorage({
        destination: (req, file, cb) => cb(null, resolve(__dirname, '..', '..', folder)),
        filename: (req, file, cb) => cb(null, `${crypto.randomBytes(16).toString('hex')}${extname(file.originalname)}`),
      }),
    };
  },
};
