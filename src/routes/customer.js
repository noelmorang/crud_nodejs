const express=require('express');
const router=express.Router();

const customerController=require('../controllers/customerController');


router.get('/',customerController.list);
router.post('/insert',customerController.insert);
router.get('/delete/:id',customerController.delete);
router.get('/update/:id',customerController.edit);
router.post('/update/:id',customerController.update);

///Exportando la ruta
module.exports=router;