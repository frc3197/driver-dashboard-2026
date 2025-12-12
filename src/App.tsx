import { useEffect, useState } from 'react';;
import ActionBar from './ActionBar';
import type { Alert, Tab } from './types';
import GeneralTab from './tabs/General';
import './index.css';
import { useEntry, useNt4 } from '@frc-web-components/react';
import HomeTab from './tabs/Home';
import ConnectionIndicator from './ConnectionIndicator';
import { enabledEntry, matchTimeEntry } from './entries';
import TeleTab from './tabs/Tele';

function App() {

  const [tab, setTab] = useState<Tab>('Home');

  const [alert, setAlert] = useState<Alert>('Disconnect');

  const { nt4Provider } = useNt4();
  const [connectedToRobot, setConnectedToRobot] = useState(false);
  const [enabled] = useEntry(enabledEntry, false);

  useEffect(() => {
    const interval = setInterval(async () => {
      setConnectedToRobot(nt4Provider ? await nt4Provider.isConnected() : false)
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  //const [timeRemaining] = useEntry(matchTimeEntry, 0.0);

  useEffect(() => {
    if (connectedToRobot && alert == 'Disconnect') {
      setAlert('Disable');
    }
    if (!connectedToRobot) {
      setAlert('Disconnect');
    }
  }, [connectedToRobot]);

  useEffect(() => {
    if (enabled && alert == 'Disable') {
      setAlert('None');
    }
    if (!enabled) {
      setAlert('Disable');
    }
  }, [enabled]);

  function getAlertAnimation(a: Alert): String {
    let animation = '';

    switch (a) {
      case 'Success':
        animation = 'animate-success-background';
        break;
      case 'Disconnect':
        animation = 'animate-disconnect-background';
        break;
      case 'Disable':
        animation = 'animate-disabled-background';
        break;
      case 'Error':
        animation = 'animate-error-background';
        break;
      case 'Endgame':
        animation = 'animate-error-background';
        break;
      default:
        animation = '';
        break;
    }
    return animation;
  }

  return (
    <>
      <div className={`bg-gray-100 ${getAlertAnimation(alert)} w-screen h-screen p-7 pb-20 overflow-none`}>
        <div className='animate-fade-in-scale bg-white w-full h-full overflow-none  inset-shadow-sm/25 rounded-xl'>
          {tab == 'Home' &&
            <HomeTab />
          }
          {tab == 'General' &&
            <GeneralTab />
          }
          {tab == 'Tele' &&
            <TeleTab setAlert={setAlert} alert={alert} />
          }
        </div>
        <ActionBar setTab={setTab} />
        <ConnectionIndicator connected={connectedToRobot} />
      </div>
    </>
  )
}

export default App
