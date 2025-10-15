import multer from 'multer'
// this middleware will handle file uploads using multer
// files will be stored in the 'public/temp' directory temporarily
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

export const upload = multer({ storage: storage })