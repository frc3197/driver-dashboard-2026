

const ActionBar = () => {
    return (
        <div className="animate-fade-in-scale fixed bottom-0 left-0 h-17 w-screen flex flex-row justify-center px-20">
            <div className="bg-orange-200 border-orange-300/50 border-x-3 border-t-3 pb-1 hover:bg-orange-300 shadow-orange-800 shadow-lg/100 transition w-full h-full rounded-t-lg flex flex-row items-center justify-between px-8">
                <div className="flex gap-10 text-xl *:bg-orange-500/5 *:hover:shadow-lg/50 *:hover:bg-orange-100/75 *:hover:scale-110 *:duration-300 *:ring-0 *:hover:ring-3 *:cursor-pointer *:transition *:hover:ring-gray-700 *:ring-transparent font-semibold text-gray-800 *:px-5 *:py-1 *:rounded-xl">
                    <button>Home</button>
                    <button>General</button>
                    <button>Auto</button>
                    <button>Tele</button>
                </div>
                <h1 className="text-xl font-light select-none transition duration-500 hover:-translate-x-5">
                    Hexhound Driver Dashboard
                </h1>
            </div>
        </div>
    )
}

export default ActionBar;