import { ArrowRight } from "lucide-react";

const HomeTab = () => {
    return (
        <div className="w-full h-full bg-transparent p-5 flex flex-col items-center gap-5">
            <h1 className="text-4xl">Home - Hexhound Driver Dashboard</h1>

            <div onClick={() => alert('You clicked this. It is for good luck. Luck meter: OFF THE CHARTS')} className="flex flex-row items-center gap-2 select-none cursor-pointer transition duration-350 border-transparent ring-0 ring-gray-500 hover:scale-105 hover:ring-4 hover:shadow-lg rounded-xl px-5">
                <h2 className="text-lg">Team logo</h2>
                <ArrowRight className="mr-5"/>
                <img className="w-50 h-50 object-contain" src="./public/logo.png" />
            </div>
        </div>
    )
}

export default HomeTab;