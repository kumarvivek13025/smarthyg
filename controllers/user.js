const devices=require('../models/devices');
const User=require('../models/user');
exports.getDevices=(req,res,next)=>{
    const id=req.user._id.toString();
    console.log(id);
    const email=req.user.email
    devices.find()
    .then(devices => {
        res.render('user/devices',{
            path:'/devices',
            devices:devices,
            id:id
        });
    })
    .catch(err => console.log(err));
}
    

exports.getMailbox=(req,res,next)=>{
    res.render('user/mailbox',{
        path:'/mailbox'
    })
}


exports.getAddDevice=(req,res,next)=>{
    res.render('user/add-device',{
        path:'/add-devices'
    })
}

exports.postAddDevice=(req,res,next)=>{
    const deviceName=req.body.deviceName;
    const location=req.body.location;
    const userId=req.user;
    console.log('hey there')
    const device=new devices({
        deviceName:deviceName,
        location:location,
        userId:userId
    })

    device
    .save()
    .then(result=>{
        console.log("by");
        res.redirect('/devices')
    })
    .catch(err=>{
        console.log(err);
    })
    
    


}

exports.getDashBoard=(req,res,next)=>{
    const deviceId=req.params.deviceId;
    devices.findById(deviceId)
    .then(device => {
      res.render('user/dashboard', {
        device: device,
        path: '/devices',
        
      });
    })
    .catch(err => console.log(err));
}