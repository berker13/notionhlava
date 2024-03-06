import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from "../../db";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const todos = await prisma.todo.findMany();
        res.json(todos);

    } else if (req.method === 'POST') {
        const { title, content, published } = req.body;
        const todo = await prisma.todo.create({
            data: {
                title,
                content: content,
                published: published
            },
        });
        res.json(todo);
    }
}