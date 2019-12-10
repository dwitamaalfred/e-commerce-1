const router = require('express').Router()
const transactionController = require('../controllers/transactionController')
const {authentication} = require('../middlewares/authentication')

router.use(authentication)

router.get('/',transactionController.showTransaction)
router.delete('/:id',transactionController.deleteTransaction)
router.post('/checkout',transactionController.checkOut)



module.exports = router