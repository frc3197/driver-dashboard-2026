import { useEffect, useState } from "react";
import type { ConnectionStrategy, IPAddress } from "../types";
import { IP_ADDRESS_ID } from "../localstorage";
import { SendableChooser, useEntry } from "@frc-web-components/react";
import { autoModeEntry } from "../entries";

const AutoTab = () => {

    const [recievedAuto] = useEntry(autoModeEntry, '');

    return (
        <div className="w-full h-full bg-transparent p-5 flex flex-col items-center gap-10">
            <h1 className="text-7xl">Auto</h1>

            <div>
                <SendableChooser className="text-xl bg-orange-500/5 hover:shadow-md/27 hover:bg-orange-100/75 scale-110 duration-300 ring-2 *:cursor-pointer transition ring-gray-500 hover:ring-gray-700 font-semibold text-gray-800 rounded-md px-2 py-1" source-key={autoModeEntry} style={{cursor: 'pointer'}} label='Auto Mode' />
            </div>

            <h3>Relax, you cannot control this anyway. But make sure to click the A-Stop, not the E-Stop.</h3>

        </div>
    )
}

export default AutoTab;