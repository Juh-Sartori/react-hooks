// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// <!--O extra esta aqui tbm-1-->

function Greeting({initialName = ''}) {
  //dessa forma vai iniciar o hello com oq for inserido
  // 💣 delete this variable declaration and replace it with a React.useState call
  // const name = ''
  const [name, setName] = React.useState(initialName)
  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
        {/* <input onChange={handleChange} id="name" /> */}
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
  //se quiser iniciar ja com um nome na caixa:=> return <Greeting initialName="Juliana" />
}

export default App
