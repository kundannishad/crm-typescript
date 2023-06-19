import { Request,Response } from "express";

import AuthModel from './../../models/auth' 

 export  class AuthApiController {

    async details(req: Request, res: Response): Promise<void> {
        try {
          const id: number = parseInt(req.params.id, 10);
          console.log("adsaf",id)
          const result = await AuthModel.getById(id);
          
          // Handle the result as needed
          res.json(result);
        } catch (error) {
          // Handle the error appropriately
          res.status(500).json({ error: 'An error occurred' });
        }
      }
      
      
    
  }

  
  //module.exports = new AuthModel();


  