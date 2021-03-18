import { Request, Response } from "express";
import { format } from "node:path";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../Repository/UserRepository";
import {hash} from 'bcryptjs'

class UserController{
    async create(req: Request, res: Response){

    const {username, password} = req.body;

    const passwordHash = await hash(password, 8)

    const Repository = getCustomRepository(UserRepository);

    const user = Repository.create({username, password: passwordHash});

    await Repository.save(user);

    return res.json(user);
}
}

export default new UserController()