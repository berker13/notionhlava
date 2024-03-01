const { PrismaClient } = require('@prisma/client');

export default async function HomePage() {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany({});
    const post = await prisma.post.findMany({});
    console.log(users);

    return (
        <div className="flex px-4 py-4 space-x-5 bg-color-slate-500">
            {
                users.map((user)=><Card title={user.firstName} description={user.lastName} checked={true}/>
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
            <main className="px-4 py-8">
                <div className="w-72 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-2">Úloha 1</h2>
                        <p className="text-gray-700 mb-4">Toto je první úloha, můžete ji upravit nebo smazat</p>
                        <div className="flex justify-between">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Upravit</button>
                            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">Smazat</button>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
