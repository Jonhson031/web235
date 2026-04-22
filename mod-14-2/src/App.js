import React from 'react'
import CharOrgs from './CharOrgs'
import CharCom from './CharCom'

const charitableComponents = CharOrgs.map(item => <CharCom key={item.id} CharOrgs={item} />)


export default function App() {
  return (
    <div className="App">
      {charitableComponents}
    </div>
  )
}