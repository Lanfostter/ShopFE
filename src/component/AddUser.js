import axios from "axios";
import { useState } from "react";

export function AddUser() {
    // hàm hook
    let [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        gender: "",
        birthday: "",
        roles: ""
    });
    const addNew = async () => {
        var config = {
            method: 'POST',
            url: "http://localhost:2316/ShopClothes/api/add/user",
            headers: {
                'Content-Type': 'application/json'
            },
            data: user
        };
        try {
            let response = await axios(config)
            let result = response.data;
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    // function handleChange(e) {
    //     {
    //         setUser({
    //             ...user,
    //             [e.target.name]: e.target.value
    //         })
    //     }
    // }
    const handleChange = (e) => setUser({
        ...user,
        [e.target.name]: e.target.value
    })
    return (
        <div className='row border'>
            <h2 className="h1">Create User</h2>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input className='form-control' onChange={handleChange} name="name" value={user.name}/>
            </div >
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input className='form-control' onChange={handleChange} name="email" value={user.email}/>
            </div >
            <div className="mb-3">
                <label className="form-label">UserName</label>
                <input className='form-control' onChange={handleChange} name="username" value={user.username}/>
            </div >
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input className='form-control' onChange={handleChange} name="password" value={user.password}/>
            </div >
            <div className="mb-3">
                <label className="form-label">Gender</label>
                <input className='form-control' onChange={handleChange} name="gender" value={user.gender}/>
            </div >
            <div className="mb-3">
                <label className="form-label">Birthday</label>
                <input className='form-control' type="date" onChange={handleChange} name="birthday" value={user.birthday}/>
            </div >
            <div className="mb-3">
                <label className="form-label">Roles</label>
                <input className='form-control' onChange={handleChange} name="roles" value={user.roles}/>
            </div >
            <div className="mb-3">
                <button className="btn btn-danger" type='button' onClick={addNew}>Create</button>
            </div>
        </div>
    )
}