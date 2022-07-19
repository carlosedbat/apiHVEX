import { Request, Response } from 'express';
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
    
                res.status(200).json({
                    token:token,
                    user:{id: user[0].id, name:user[0].name, email:user[0].email}
                })
                return
            }
        } catch(err){
            res.status(404).json({message:"Algo inesperado aconteceu. Tente novamente em alguns minutos."})
            return
        }
    }
    res.status(200).json({message:"Acesso negado. Verifique se o usuário e a senha são validos, e tente novamente."})
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
            message: "Criado com sucesso!"
        })
    }
};