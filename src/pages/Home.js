import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Home() {

    const [users,setUsers] = useState([])

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result =await axios.get("http://localhost:8080/getUser")
        setUsers(result.data);
    }


    return (
        <div className='container'>
            <div className='py-4'>
                
            <Link className='btn btn-primary btn-lg btn-lg mb-2' type='submit' to='/adduser'> Add User </Link>

                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        users.map((user,index)=>(
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className='btn btn-primary mx-2 btn-sm'>View</button>
                                <button className='btn btn-outline-primary mx-2 btn-sm'>Edit</button>
                                <button className='btn btn-danger mx-2 btn-sm'>delete</button>
                            </td>
                        </tr>
                        ))
                    }


                       
                        
                    </tbody>
                </table>



            </div>
        </div>
    )
}
