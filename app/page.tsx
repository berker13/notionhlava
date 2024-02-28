export default function HomePage() {
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
