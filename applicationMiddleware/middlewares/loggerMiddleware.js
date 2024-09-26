var myLogger = (req,res , next)=>{
    console.log('Logged 1')
    next();
}

module.exports = myLogger;