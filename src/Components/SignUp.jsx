import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {

const {createUser}=useContext(AuthContext)

const handleSignup=event => {
    event.preventDefault()
    const form=event.target
    const name=form.name.value
    const email=form.email.value
    const password=form.password.value
    
    createUser(email,password)
    .then(result => {
        const createdTime=result.user.metadata.creationTime

        console.log(result.user)
        const user ={email,createdTime :createdTime}

        fetch('http://localhost:5000/user', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
           if(data.insertedId){
            alert('the data is sent to mongodb')
           }
        })
     
    })
    .catch((error) => {
        console.error(error)
    })
}


    return (
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm text-gray-400">Sign in to access your account</p>
	</div>
	<form onSubmit={handleSignup} noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
        <div>
				<label htmlFor="name" className="block mb-2 text-sm">Your name</label>
				<input type="text" name="name" id="name" placeholder="Your name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center text-gray-400">Don't have an account yet?
				<a rel="noopener noreferrer" href="#" className="hover:underline text-violet-400">Sign up</a>.
			</p>
		</div>
	</form>
</div>
    );
};

export default SignUp;