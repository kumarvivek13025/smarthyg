const Admin=require('../models/admin');
const devices=require('../models/devices');
exports.getAdminProfile=(req,res,next)=>{
    res.render('admin/profile',{
        path:'/admin/profile'
    })
}

exports.postAdminProfile=(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;

    Admin.findOne({email:email})
    .then(admin=>{
        if(!admin){
            res.redirect('/');
        }

        else{
            if(admin.password===password){
                res.redirect('/admin/profile');
            }
            else{
                res.redirect('/');
            }
        }
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.getAllDevices=(req,res,next)=>{
    devices.find()
    .then(devices => {
        res.render('admin/devices',{
            path:'/admindevices',
            devices:devices,
        });
    })
    .catch(err=>{
        console.log(err);
    })
}