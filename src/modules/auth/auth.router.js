import  Router  from "express";
import * as authcontroller from './controller/auth.controller.js'
const router = Router();



router.get('/', (req,res)=>{
    res.json({message:"auth module"})
})

router.post('/signup',authcontroller.signup);
router.get('/confirmEmail/:token',authcontroller.confirmEmail);
router.get('/signin',authcontroller.signin);


export default router;  