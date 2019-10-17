const express=require('express');
const router=express.Router();

const customerController=require('../controllers/customerController');


router.get('/',customerController.list);
router.post('/insert',customerController.insert);
router.get('/delete/:id',customerController.delete);

///Exportando la ruta
module.exports=router;