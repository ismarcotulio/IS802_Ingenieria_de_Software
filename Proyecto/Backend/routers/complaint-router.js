import {ComplaintController} from '../controllers/complaintController.mjs'
import express, { Router } from 'express'
import base64url from 'base64url'
const Router5 = express.Router()

class ComplaintRouter{

    constructor(database){
        this.complaintController = new ComplaintController(database)

        Router5.post('/remove',this.removeComplaint)
        Router5.get('/getcomplaints',this.getComplaints)
    }

    getComplaints = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
            if(typeof bearerHeader !== 'undefined'){
                this.complaintController.getComplaints(req,res)
            }
    }

    removeComplaint = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
            if(typeof bearerHeader !== 'undefined'){
                this.complaintController.removeComplaint(req,res)
            }
    }



}

export {Router5}
export {ComplaintRouter}