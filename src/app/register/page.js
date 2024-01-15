"use client"

import { useEffect, useState } from "react"
import axios from "axios"

export default function Register() { 

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        axios.post("http://localhost:5670/api/auth/register",{
            name:name,
            email:email,
            password:password,
            role:"user"
        },{
            headers:"application/json"
        })

        //setName("")
        //setEmail("")
        //setPassword("")
    }

    return (<div style={{ height:"100vh", padding: 20}}>
        <div>
            <label> Name </label><br></br>
            <input type="text" name="name" 
                onChange={(e) => setName(e.target.value)} />
            {name}
        </div>
        <div>
            <label>email</label><br></br>
            <input type="email" name="email"
                 onChange={(e) => setEmail(e.target.value)}
            />
            {email}
        </div>
        <div>
            <label> Password </label><br></br>
            <input type="password" name="password" 
             onChange={(e) => setPassword(e.target.value)}/>
             {password}
        </div>
        <div>
            <button onClick={handleSubmit}> Submit </button>
        </div>
    </div>)
}