let express = require('express');
let router = express.Router();
let userRouter = require('./users/userRouter');
router.use('/users',userRouter);
module.exports = router ;