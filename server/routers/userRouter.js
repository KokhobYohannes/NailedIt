const router = require("express").Router();

router.post("/", (req,res)=>{
    //res.send("req.body");
    try {

    const {email, password, passwordVerify}= req.body;

    
        //validation
    if (!email || !password || !passwordVerify){
            return res
                .status(400)
                .json({errorMessage: "please enter all required field"});
    }



    } catch(err){
        console.err(err);
        res.status(500).send();
    }
});

module.exports = router