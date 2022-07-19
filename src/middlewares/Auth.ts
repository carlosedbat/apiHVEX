import { Request, Response, NextFunction } from 'express'
import { User } from '../services/user.service'
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


export const Auth = {
    private: async (req: Request, res: Response, next: NextFunction) => {

        let sucess = false;
        //fazer verificacao de auth
        if (req.headers.authorization) {
            
            const [authType, token] = req.headers.authorization.split(' ');
            if (authType === 'Bearer') {
                try {
                    const decoded = JWT.verify(
                        token,
                        process.env.JWT_KEY as string
                    );
                    sucess= true;
                } catch (err) {
                    //faz nada e deixa seguir para nao autorizado
                }

            }
        }
        
        if (sucess) {
            next();
        } else {
            res.status(403); //Not autorized
            res.json({ error: 'Não autorizado.' });
        }
    }
}