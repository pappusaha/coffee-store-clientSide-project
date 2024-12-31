import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee,setCoffees,coffees}) => {

    const {coffeeName,chef,details,taste,category,photo,company,supplier,quantity,_id}=coffee

    const handleDelete=_id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
fetch(`http://localhost:5000/coffee/${_id}`, 
    {
        method: 'DELETE', 

    }
)
.then(res => res.json())
.then(data => {
    console.log(data)
    if(data.deletedCount >0){

        Swal.fire({
            title: "Deleted!",
            text: "Your coffee has been deleted.",
            icon: "success"
          });
          const remaining=coffees.filter(cof => cof._id !== _id)
            setCoffees(remaining)
          
    }
})
             
            }
      
          });
    }
    return (
        <div className="flex justify-between gap-3 p-6 shadow-xl bg-white">
        <figure className=''>
          <img
            src={photo}
            alt="Movie" className='w-full' />
        </figure>
        <div className="flex justify-between  w-full">
         <div className='space-y-3 text-black'>
            <h3 className='text-xl font-bold'>Name :{coffeeName}</h3>
            <p>{chef}</p>
            <p>{taste}</p>
            <p>{category}</p>
         </div>
         <div className='grid grid-rows-3'>
            <button className='btn btn-outline btn-accent'>View</button>
            <Link to={`updateCoffee/${_id}`}> <button className='btn btn-outline btn-accent'>Edit</button></Link>
            <button 
            onClick={() => handleDelete(_id)}
            className='btn btn-outline btn-accent'>x</button>
         </div>
        </div>
      </div>
    );
};

export default CoffeeCard;