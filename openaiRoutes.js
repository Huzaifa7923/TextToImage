const expess=require('express')
const {generateImage} =require('./openaiController')
const router=expess.Router();

router.post('/generateimage',generateImage);

module.exports=router;

