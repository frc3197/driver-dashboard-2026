import { useEntry, useNt4 } from '@frc-web-components/react';
import { matchTimeEntry, networkAlertEntry } from '../entries';
import type { Alert } from '../types';
import { useEffect, useRef } from 'react';

function getCountdownColor(time: number) {
    if (time < 0)
        return;
    if (time < 10)
        return 'text-red-500 text-shadow-red-500/50 text-shadow-lg';
    if (time < 20)
        return 'text-orange-500 text-shadow-orange-500/50 text-shadow-lg';
    if (time < 30)
        return 'text-yellow-500 text-shadow-yellow-500/50 text-shadow-lg';
    if (time < 45)
        return 'text-green-500 text-green-yellow-500/50 text-shadow-lg';
}

const TeleTab = ({ setAlert, alert }: { setAlert: (a: Alert) => void, alert: Alert }) => {

    const [timeRemaining] = useEntry(matchTimeEntry, 0.0);
    const [networkAlertList] = useEntry(networkAlertEntry, {});

    const isEndgameRef = useRef(false);

    useEffect(() => {
        const inEndgame = timeRemaining < 15 && timeRemaining > 0;

        if (inEndgame ) {
            setAlert('Endgame');
            isEndgameRef.current = true;
        } else if (!inEndgame && isEndgameRef.current) {
            setAlert('None');
            isEndgameRef.current = false;
        }
    }, [timeRemaining, isEndgameRef]);

    return (
        <div className="w-full h-full p-5 pt-10 flex flex-col overflow-hidden items-center gap-10">
            <h1 className={`text-9xl select-none text-left w-65 scale-150 ${timeRemaining == -1 ? 'animate-pulse' : ''} ${getCountdownColor(timeRemaining)}`}>{timeRemaining == -1 ? '00.0' : timeRemaining.toFixed(1)}</h1>
            <div className='mt-10 grid-cols-3 grid gap-5 flex-1 flex-1 overflow-y-auto pb-5 overflow-x-hidden'>
                <div className='border-3 rounded-xl border-gray-700 min-h-25 px-5 py-3 overflow-y-auto shadow-lg/33'>
                    {
                        networkAlertList.errors?.map((e:string, i:number) => {
                            return (<p className='text-2xl break-words font-bold text-red-500' key={i}>{e}</p>);
                        })
                    }
                    {
                        networkAlertList.warnings?.map((e:string, i:number) => {
                            return (<p className='text-xl break-words font-bold text-yellow-600' key={i}>{e}</p>);
                        })
                    }
                    {
                        networkAlertList.infos?.map((e:string, i:number) => {
                            return (<p className='text-xl break-words font-bold text-gray-800' key={i}>{e}</p>);
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TeleTab;