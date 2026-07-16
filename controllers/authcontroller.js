const jwt=require("jsonwebtoken");

const authenticateToken=(req,res,next)=>{
    const authHeaders=req.header("Authorization");
    const token=authHeaders.split(" ")[1];
    if(!token){
        res.status(401).json({message:"Access Denied"});
    }
   const payload= jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
        if(err){
            const msg="TokenExpiredEroor"?"Token Expired":"Invalid Token";
            return(res.status(err.message=="TokenExpiredError"?401:403).json({message:msg}));
        }
    });
    req.user=payload;
    next();

}

module.exports={authenticateToken};