const { PrismaClient } = require('@prisma/client');

export default async function HomePage() {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany();
    const post = await prisma.post.findMany();
    console.log(users);

    return (
        <div className="flex px-4 py-4 space-x-5 bg-color-slate-500">
            {
                // eslint-disable-next-line react/jsx-key
                users.map((user)=> <Card title={user.email} description={user.name} checked={true}/>
            )}
        </div>
    )
function Card({title, description, checked}:ToDoItemProps){
        return <div className="flex flex-col center bg-slate-300 hover:bg-slate-600 w-1/6 h-60">
            <h2>Jméno</h2> <h2> {title} </h2>
            <label className="text-xs"> {description} </label>
        </div>
}

class ToDoItemProps
{
    title:string;
    description: string;
    checked: Boolean;
}

    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <div className="flex max-w-[980px] flex-col items-start gap-2">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                    Beautifully Todo App.
                </h1>
                <p className="max-w-[700px] text-lg text-muted-foreground">
                    Create your Todo list.
                </p>
            </div>
        </section>
        )
    }
