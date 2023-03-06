
module.exports = function(req,res,next){ // use for check url  //
    console.log("checked visitor url", req.originalUrl)

    next();
}