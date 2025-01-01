import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

    const loadData=useLoaderData()
    const [users, setUsers]=useState(loadData)


    const handleDelete=id => {
        console.log(id)
        fetch(`http://localhost:5000/user/${id}`, {
            method:'DELETE',
        })
        .then (res=> res.json())
        .then(data => {
            if(data.deletedCount> 0){
                alert('deleted successfully')
             const remaining=users.filter(rData => rData._id !== id)
             setUsers(remaining)
            }
        })
        .catch((error) => {
            alert('something is going to wrong ')
        }
    )
    }
    return (
        <div>
            <h1>{loadData.length}</h1>

            {
                users.map(lData => <div key={lData._id} className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th></th>
                          <th>Email</th>
                          <th>Created AT </th>
                          <th> last Logged In  </th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                          <th></th>
                          <td>{lData.email}</td>
                          <td>{lData.createdTime}</td>
                          <td>  {lData.lastLogin}</td>
                          <td><button onClick={() =>handleDelete(lData._id)}  className='btn'> X</button></td>
                        </tr>
                      
                    
                     
                        
                      </tbody>
                    </table>
                  </div>)
            }
        </div>
    );
};

export default Users;