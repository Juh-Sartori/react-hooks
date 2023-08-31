// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// function Name({name, onNameChange}) {
const Name = () => {
  const [name, setName] = React.useState('')
  return (
    <div>
      <label htmlFor="name">Name: </label>
      {/* <input id="name" value={name} onChange={onNameChange} /> */}
      <input
        id="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal({animal, onAnimalChange}) {
  // 💣 delete this, it's now managed by the App
  // const [animal, setAnimal] = React.useState('')
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        // onChange={event => setAnimal(event.target.value)}
        onChange={onAnimalChange}
      />
    </div>
  )
}

// 🐨 uncomment this
// const Display = ({name, animal}) => {
//   return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
// }
const Display = ({animal}) => {
  return <div>{`Hey , your favorite animal is: ${animal}!`}</div>
}

// 💣 remove this component in favor of the new one
// function Display({name}) {
//   return <div>{`Hey ${name}, you are great!`}</div>
// }

function App() {
  // 🐨 add a useState for the animal
  // const [animal, setAnimal, name, setName] = React.useState('')
  const [animal, setAnimal] = React.useState('')
  return (
    <form>
      {/* <Name name={name} onNameChange={event => setName(event.target.value)} /> */}
      <Name />
      {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
      <FavoriteAnimal
        animal={animal}
        onAnimalChange={event => setAnimal(event.target.value)}
      />
      {/* 🐨 pass the animal prop here */}
      {/* <Display name={name} animal={animal} /> */}
      <Display animal={animal} />
    </form>
  )
}

export default App
