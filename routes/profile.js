const {Router} = require('express')
const auth = require('../middleware/auth')
const router = Router()

router.get('/', async (req, res) => {
	res.render('profile', {
		title: 'Профиль пользователя',
		isProfile: true,
		user: req.user.toObject()
	})
})


module.exports = router