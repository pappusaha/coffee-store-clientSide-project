
import { useLoaderData } from 'react-router-dom';
import './index.css';
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {

const loadedCoffee=useLoaderData()
const [coffees, setCoffees]=useState(loadedCoffee)
  return (
    <div className='px-10 mx-auto bg-slate-50'>
      
       
      <h1 className='text-amber-800 text-center text-4xl'>Vite {loadedCoffee.length}1</h1>

    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
    {
        loadedCoffee.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}>  </CoffeeCard> )
      }
    </div>
      
   
    </div>
  )
}

export default App
