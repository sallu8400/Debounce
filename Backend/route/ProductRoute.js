import express from 'express'
import { AddProduct, getProducts } from '../controller/Productcontroller.js'



const router=express.Router()

router.get("/",getProducts)
router.post("/add",AddProduct)


export default router
