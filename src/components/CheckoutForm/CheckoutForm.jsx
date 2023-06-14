import { useState } from "react";

export const CheckoutForm = ({onConfirm}) =>{
const [client,setClient] = useState('')
const [phone,setPhone] = useState('')
const [email,setEmail] = useState('')

const confirmacion = () => {
   

    const userData = {
        client,phone,email
    }

    onConfirm(userData)
}

return (
    <div className="Container">
        <form onSubmit={confirmacion} className="Form">
            <label className="label">
                Nombre:
                <input type="text" value={client} className="input" onChange={()=> setClient}/>
            </label>
            <label className="label">
                Telefono:
                <input type="text" value={phone} className="input" onChange={()=> setPhone}/>
            </label>
            <label className="label">
                Email:
                <input type="email" value={email} className="input" onChange={()=> setEmail}/>
            </label>
        </form>
    </div>
)
}