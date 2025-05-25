import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import Coffecard from './componants/Coffecard'

function App() {

  const loadedcoffees = useLoaderData();
  const [coffes, setcoffes] = useState(loadedcoffees);

  return (
    <>
      <h1 className='text-3xl text-cyan-600'>Total coffee : {coffes.length}</h1>

      {
        loadedcoffees.map(coffe => <Coffecard
          key={coffe._id}
          coffe={coffe}
          coffes={coffes}
          setcoffes={setcoffes}
        ></Coffecard>)
      }
    </>
  )
}

export default App
