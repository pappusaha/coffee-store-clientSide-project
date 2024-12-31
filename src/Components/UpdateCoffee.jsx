import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee=useLoaderData()
    const {coffeeName,chef,details,taste,category,photo,company,supplier,quantity,_id}=coffee
    const handleUpdateCoffee=event => {
    event.preventDefault()
    const form=event.target
    const coffeeName=form.coffeeName.value
    const chef=form.chef.value
    const details=form.details.value
    const taste=form.taste.value
    const category=form.category.value
    const photo=form.photo.value
    const company=form.company.value
    const supplier=form.supplier.value
    const quantity=form.quantity.value
    const updatedCoffee={coffeeName,chef,details,taste,category,photo,company,supplier,quantity}
    console.log(updatedCoffee)


    fetch(`http://localhost:5000/coffee/${_id}`, {
        method:'PUT',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(updatedCoffee)
    })
    .then (res => res.json())
    .then (data => {
        console.log(data)
        alert('coffee updated  sucsessfully ')
    })
    .catch(error => {
        console.error('Error updating coffee:', error);
        alert('Failed to update coffee. Please try again.');
    });
}
    return (
        <div>
        <section className="p-6 bg-slate-200 py-24 text-gray-600">
   <form  onSubmit={handleUpdateCoffee} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
       <div>
           <h1 className='text-4xl text-center text-black font-extrabold'>Edit Coffee Name :{coffeeName}</h1>
       </div>
       <fieldset className="grid grid-cols-4 gap-6 p-6 border rounded-md shadow-lg bg-gray-50 ">
           
           <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4  ">
               <div className="col-span-full sm:col-span-3">
                   <label htmlFor="coffeeName" className="text-sm">Coffee Name</label>
                   <input id="coffeeName" name='coffeeName' type="text" defaultValue={coffeeName} className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
               </div>
               <div className="col-span-full sm:col-span-3">
                   <label htmlFor="Chef" className="text-sm">Chef</label>
                   <input id="chef" type="text" name='chef' defaultValue={chef} className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                   
               </div>
               
               <div className="col-span-full sm:col-span-3">
                   <label htmlFor="details" className="text-sm">Details</label>
                   <input id="details" name='details'  type="text" defaultValue={details} className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
               </div>
               <div className="col-span-full  sm:col-span-3">
                   <label htmlFor="taste" className="text-sm">Taste</label>
                   <input id="taste" name='taste' type="text" defaultValue={taste} className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                   </div>
                   <div className="col-span-full sm:col-span-3">
                   <label htmlFor="Category" className="text-sm">Category</label>
                   <input id="category" type="text" name='category' defaultValue={category} className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                   
               </div>
               <div className="col-span-full sm:col-span-3">
                   <label htmlFor="photo" className="text-sm">Photo URL</label>
                   <input id="photo" type="text" name='photo' defaultValue={photo} className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                   
               </div>
               <div className="col-span-full sm:col-span-2">
                   <label htmlFor="company" className="text-sm">Company</label>
                   <input id="company" name='company' type="text" defaultValue={company} className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
               </div>
               <div className="col-span-full sm:col-span-2">
                   <label htmlFor="supplier" className="text-sm">Supplier Name</label>
                   <input id="supplier" name='supplier' type="text" defaultValue={supplier} className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
               </div>
               <div className="col-span-full sm:col-span-2">
                   <label htmlFor="quantity" className="text-sm">Available Quantity</label>
                   <input id="quantity" type="text" name='quantity' defaultValue={quantity} className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
               </div>
           </div>
         <div className='col-span-full'>
         <input type="submit" value="Update Coffee"   className=' btn btn-block'/>
         </div>
        
       </fieldset>
       
   </form>
</section>
       </div>
    );
};

export default UpdateCoffee;