const express=require('express');
const router=express.Router();

const adminController=require('../controllers/admin');

router.get('/admin/profile',adminController.getAdminProfile)

router.post('/admin/profile',adminController.postAdminProfile)

router.get('/admindevices',adminController.getAllDevices)

module.exports=router;