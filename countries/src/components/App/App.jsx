import { useState } from 'react'

import CardList from '../CardList/CardList'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <CardList />
    </div>
  )
}

export default App
