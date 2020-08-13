import multer from 'multer';
import path from 'path';
import crypto from 'crypto'; // used to generate a random name

export default {
  storage: multer.diskStorage({
    // onde o arquivo vai ser salvo
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(request, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex'); // gera caracteres aleatórios
    
      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName); // primeiro parametros é o erro e o segundo é o nome do arquivo
    }
  })
};