import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ActionBar from './ActionBar'
import type { Alert, Tab } from './types'
import GeneralTab from './tabs/General'
import './index.css';

function App() {

  const [tab, setTab] = useState<Tab>('General');

  const [alert, setAlert] = useState<Alert>('Disable');

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
          {tab == 'General' &&
            <GeneralTab />
          }
        </div>
        <ActionBar />
      </div>
    </>
  )
}

export default App
