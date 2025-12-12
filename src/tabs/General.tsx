import { useEffect, useState } from "react";
import type { ConnectionStrategy, IPAddress } from "../types";
import { IP_ADDRESS_ID } from "../localstorage";

const strategyToIP = (strat: ConnectionStrategy): IPAddress => {
    switch (strat) {
        case '3197': return '10.31.97.2';
        case '9997': return '10.99.97.2';
        case 'Simulator': return '127.0.0.1';
        default: return '10.31.97.2';
    }
};

const ipToStrategy = (ip: IPAddress): ConnectionStrategy => {
    switch (ip) {
        case '10.31.97.2': return '3197';
        case '10.99.97.2': return '9997';
        case '127.0.0.1': return 'Simulator';
        default: return '3197';
    }
};

const GeneralTab = () => {

    const [connectionStrat, setConnectionStrat] = useState<ConnectionStrategy>(() => {
        // Initialize from localStorage on mount
        const stored = localStorage.getItem(IP_ADDRESS_ID) as IPAddress | null;
        return stored ? ipToStrategy(stored) : '3197';
    });

    const handleStrategyChange = (newStrat: ConnectionStrategy) => {
        const newIP = strategyToIP(newStrat);
        const currentIP = localStorage.getItem(IP_ADDRESS_ID);
        
        // Only update and reload if actually changed
        if (currentIP !== newIP) {
            localStorage.setItem(IP_ADDRESS_ID, newIP);
            window.location.reload();
        }
    };

    return (
        <div className="w-full h-full bg-transparent p-5 flex flex-col items-center gap-10">
            <h1 className="text-7xl">General</h1>

            <div>
                <label className="text-2xl mr-5" htmlFor="connection-setting">Connection:</label>
                <select value={connectionStrat} onChange={(value) => handleStrategyChange(value.target.value as ConnectionStrategy)} className="text-xl bg-orange-500/5 hover:shadow-md/27 hover:bg-orange-100/75 hover:scale-105 duration-300 ring-2 cursor-pointer transition ring-gray-500 hover:ring-gray-700 font-semibold text-gray-800 rounded-md px-2 py-1" id="connection-setting">
                    <option>3197</option>
                    <option>9997</option>
                    <option>Simulator</option>
                </select>
            </div>
        </div>
    )
}

export default GeneralTab;