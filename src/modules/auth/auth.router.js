import  Router  from "express";
const router = Router();



router.get('/', (req,res)=>{
    res.json({message:"auth module"})
})


export default router;