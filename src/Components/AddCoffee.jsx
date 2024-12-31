import React from 'react';

const AddCoffee = () => {

const handleForm=event => {
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
    const user={coffeeName,chef,details,taste,category,photo,company,supplier,quantity}
    console.log(user)


    fetch('http://localhost:5000/coffee', {
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(user)
    })
    .then (res => res.json())
    .then (data => {
        console.log(data)
        alert('data sent sucsessfully ')
    })

}

    return (
        <div>
         <section className="p-6 bg-slate-200 py-24 text-gray-600">
	<form onSubmit={handleForm} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
        <div>
            <h1 className='text-4xl text-center text-black font-extrabold'>Add Coffee</h1>
        </div>
		<fieldset className="grid grid-cols-4 gap-6 p-6 border rounded-md shadow-lg bg-gray-50 ">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4  ">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="coffeeName" className="text-sm">Coffee Name</label>
					<input id="coffeeName" name='coffeeName' type="text" placeholder="Coffee Name" className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="Chef" className="text-sm">Chef</label>
					<input id="chef" type="text" name='chef' placeholder="Chef" className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                    
				</div>
				
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="details" className="text-sm">Details</label>
					<input id="details" name='details'  type="text" placeholder="Details" className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
                <div className="col-span-full  sm:col-span-3">
                    <label htmlFor="taste" className="text-sm">Taste</label>
					<input id="taste" name='taste' type="text" placeholder="Taste" className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
					<label htmlFor="Category" className="text-sm">Category</label>
					<input id="category" type="text" name='category' placeholder="Category" className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                    
				</div>
                <div className="col-span-full sm:col-span-3">
					<label htmlFor="photo" className="text-sm">Photo URL</label>
					<input id="photo" type="text" name='photo' placeholder="Photo URL" className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                    
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="company" className="text-sm">Company</label>
					<input id="company" name='company' type="text" placeholder="Company" className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="supplier" className="text-sm">Supplier Name</label>
					<input id="supplier" name='supplier' type="text" placeholder="Supplier Name" className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="quantity" className="text-sm">Available Quantity</label>
					<input id="quantity" type="text" name='quantity' placeholder="Available Quantity" className="w-full p-3 bg-slate-200 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
			</div>
          <div className='col-span-full'>
          <input type="submit" value="Add Coffee"   className=' btn btn-block'/>
          </div>
         
		</fieldset>
        
	</form>
</section>
        </div>
    );
};

export default AddCoffee;