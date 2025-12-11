import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ActionBar from './ActionBar'
import type { Tab } from './types'
import GeneralTab from './tabs/General'

function App() {

  const [tab, setTab] = useState<Tab>('General');

  return (
    <>
      <div className='bg-gray-100 w-screen h-screen p-8 pb-20 overflow-none'>
        <div className='bg-white w-full h-full overflow-none shadow-xl rounded-xl'>
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
