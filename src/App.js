import React , { useState } from 'react'
import NotList from './NotList'
import Search from './Search'
import Header from './Header'
const App = () => {

  const [search,setsearch] = useState('');
  const [mode,setmode] = useState('');
  return (
    <div className={`app ${mode ?  'dark': ""}`}>
      <Header mode={mode} setmode={setmode} />
      <Search 
      search={search}
      setsearch={setsearch}
      />
       <NotList search={search} /> 
    </div>
  )
}

export default App