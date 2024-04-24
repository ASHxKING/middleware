export default function Customlogger(req,res,next){
    console.log(req.method)
    next();
  }
