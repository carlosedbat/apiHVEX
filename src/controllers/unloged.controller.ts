import { Request, Response, Router } from 'express';
import JWT from 'jsonwebtoken';
import { User } from '../services/user.service';

export const login = async(req:Request, res:Response)=>{
    if(req.body.email && req.body.password){
        let email: string = req.body.email as string;
        let password:string = req.body.password as string;
        let user = await User.findOneUser(email,password);
        //let users = await User.findAll()
        try {
            if(user[0].id){
                const token = JWT.sign(
                    {id:user[0].id,name:user[0].name, email:user[0].email},
                    process.env.JWT_KEY as string,
                    {expiresIn:'2h'}
                );
    
                res.json({
                    token:token,
                    user:{id: user[0].id, name:user[0].name, email:user[0].email}
                })
                return
    
                // res.json({status:true, token: token, userLog: user[0].name});
                // return
            }
        } catch(err){
            res.json({acesso:false})
            return
        }
        
    }
    res.json({status:false})
}

export const register = async (req: Request, res: Response) => {
    let email: string = req.body.email as string;
    let password: string = req.body.password as string;
    let name: string = req.body.name as string;

    let hasUser = await User.findOne(email)
    if(hasUser?.id){
        res.status(409).json({
            error: "E-mail indisponivel para cadastro!"
        })
    } else {
        let newUser = await User.create(name,email,password)
        res.status(201).json({
            usuario: newUser.name,
            status: "Criado com sucesso!"
        })
    }
};