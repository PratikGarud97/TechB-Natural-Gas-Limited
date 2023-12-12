import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link } from 'react-router-dom';

function Home() {

  const [data, setData] = useState([])


    useEffect(() =>{
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, []);

    const handleDelete = (id) =>{
      axios.delete('http://localhost:8081/delete/'+id)
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.log(err))
    }


  return (
    <div className='d-flex bd-highlight'>
      <div className='w-50 bg-white rounded p-3'>
            <h1>Customer List</h1>
            <div className='d-flex justify-content-end'>
              <Link to="/create" className='btn btn-success'>Create Customer</Link>
            </div>
          <table className='table'>
              <thead>
                    <tr>
                      <th>Id</th><br></br><br/>
                      <th>Name</th><br></br><br/>
                      <th>Address</th><br/><br/>
                      <th>Customer No</th><br/><br/>
                      <th>Meter Serial No</th><br/><br/>
                      <th>Action</th>
                    </tr>
              </thead>
                <tbody>
                    {data.map((customer,index) =>{
                      return <tr key={index}>
                      <td>{customer.id}</td><br/><br/>
                      <td>{customer.name}</td><br/><br/>
                      <td>{customer.address}</td><br/><br/>
                      <td>{customer.customer_no}</td><br/><br/>
                      <td>{customer.meter_serial_no}</td><br/><br/>
                      <td><br/>
                        <Link to={`/update/${customer.id}`} className='btn btn-sm btn-primary mx-2'>Update</Link>
                        <button onClick={ () => handleDelete(customer.id)} className='btn btn-sm btn-danger'>Delete</button>
                      </td>
                      </tr>
                    })}
                </tbody>
          </table>
      </div>
    </div>
  )
}

export default Home;
