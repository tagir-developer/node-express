const multer = require('multer')

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, 'images')
	},
	filename(req, file, cb) {
		// cb(null, new Date().toISOString() + '-' + file.originalname)
		// cb(null, Date.now() + '-' + file.originalname)
		cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
	}
})

const allowTypes = ['image/png', 'image/jpg', 'image/jpeg']

const fileFilter = (req, file, cb) => {
	if (allowTypes.includes(file.mimetype)) {
		cb(null, true)
	} else {
		cb(null, false)
	}
}

module.exports = multer({
	storage, fileFilter
})