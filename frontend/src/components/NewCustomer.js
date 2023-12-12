import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NewCustomer() {

const [values, setValues] = useState({
    id: '',
    name: '',
    address: '',
    customer_no: '',
    meter_serial_no: ''
})

const navigate = useNavigate();

const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8081/customer',values)
    .then(res => {
        console.log(res)
        navigate('/')
    })
    .catch(err => console.log(err))
};


  return (
    <div className='d-flex justify-content-center'>
      <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Customer</h2><br/>
                <div className='mb-4'>
     <input type='text' placeholder='id' onChange={e => setValues({...values,id:e.target.value})}/>
                </div><br/>

                <div className='mb-4'>
     <input type='text' placeholder='Name' onChange={e => setValues({...values,name:e.target.value})}/>
                </div><br/>

                <div className='mb-4'>
    <input type='text' placeholder='Address' onChange={e => setValues({...values, address:e.target.value})}/>
                </div><br/>

                <div className='mb-4'>
    <input type='text' placeholder='Customer No' onChange={e => setValues({...values, customer_no:e.target.value})}/>
                </div><br/>

                <div className='mb-4'>
    <input type='text' placeholder='Meter Serial No' onChange={e => setValues({...values, meter_serial_no:e.target.value})}/>
                </div><br/>
                <button className='btn btn-success'>Submit</button>
            </form>
      </div>
    </div>
  )
}
