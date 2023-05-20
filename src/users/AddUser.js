import React from 'react'

export default function AddUser() {
    return (
//         <div>

//             <div className='container'>
//                 <div className='row'>

//                     <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' >
//                         <h2 className='text-center m-4'>Register User </h2>
//                         <div className="mb-3">
//                             <label htmlFor="Name" className='form-label'>
//                                 Name
//                             </label>
//                             <br />
//                             <input

//                                 type={"text"}
//                                 className="form-label"
//                                 placeholder="Enter your name"
//                                 name="name"
//                             />

//                         </div>

//                     </div>
//                 </div>

//             </div>


//         </div>
//     )
// }


<div className=" d-flex justify-content-center py-4">

<div className="border border-primary brd w-40 p-5">
<h2 className="d-flex justify-content-center mb-4"> Add User</h2>

    <form>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                
            />
            <small id="emailHelp" className="form-text text-muted">

            </small>
        </div>
        <div className="form-group mt-1">
            <label htmlFor="exampleInputPassword1">Username</label>
            <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Username"
                
            />
        </div>

        <div className="form-group mt-1">
            <label htmlFor="exampleInputPassword1">Email</label>
            <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Email Address"
                
            />
        </div>



        <div className="mt-2">
        <button type="submit" className="btn btn-success btn-sm" >
            Save
        </button>
        <button type="reset" className="btn btn-danger btn-sm m-2">Cancel</button>
        </div>
    </form>
    
    </div>

</div>

)


}
