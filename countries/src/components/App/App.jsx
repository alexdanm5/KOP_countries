import { useState } from 'react'

import WidgetsLayout from '../WidgetsLayout/WidgetsLayout'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <WidgetsLayout />
    </div>
  )
}

export default App
