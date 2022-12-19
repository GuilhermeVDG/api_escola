/* eslint-disable camelcase */
import multer from 'multer';
import { extname } from 'path';
import fs from 'fs';
import crypto from 'crypto';
import uploadConfig from '../config/multer';

const upload = multer(uploadConfig.upload('./uploads')).single('file');

export default (req, res, next) => upload(req, res, async (err) => {
  const { file, originalname, student_id } = req.body;
  let base64Data = '';
  if (file.substring(11, 14) === 'jpg') {
    base64Data = file.replace(/^data:image\/jpg;base64,/, '');
  }
  if (file.substring(11, 14) === 'jpe') {
    base64Data = file.replace(/^data:image\/jpeg;base64,/, '');
  }
  if (file.substring(11, 14) === 'png') {
    base64Data = file.replace(/^data:image\/png;base64,/, '');
  }

  const filename = originalname.substring(0, 4) + crypto.randomBytes(16).toString('hex') + extname(originalname);
  req.body = { filename, originalname, student_id };
  fs.writeFile(`uploads/${filename}`, base64Data, 'base64', (error) => {
    if (error) {
      return res.json({ Error: error, Message: 'Erro ao fazer upload de imagem' });
    }
    return '';
  });
  if (err) {
    return res.status(400).json({ errors: [err] });
  }

  return next();
});
