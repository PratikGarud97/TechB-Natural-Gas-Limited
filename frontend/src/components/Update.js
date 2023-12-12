import { useState} from "react"
import { useNavigate,useParams} from "react-router-dom"
import axios from "axios";

export default function Update() {

    const {id} = useParams();

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
        axios.put('http://localhost:8081/update/'+id,values)
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err))
    };


   return(
    <div className='d-flex justify-content-center'>
      <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Customer</h2><br/>
                <div className='mb-4'>
     <input type='text' placeholder='id' onChange={e => setValues({...values,id:e.target.value})} value={values.id}/>
                </div><br/>

                <div className='mb-4'>
     <input type='text' placeholder='Name' onChange={e => setValues({...values,name:e.target.value})} value={values.name}/>
                </div><br/>

                <div className='mb-4'>
    <input type='text' placeholder='Address' onChange={e => setValues({...values, address:e.target.value})} value={values.address}/>
                </div><br/>

                <div className='mb-4'>
    <input type='text' placeholder='Customer No' onChange={e => setValues({...values, customer_no:e.target.value})} value={values.customer_no}/>
                </div><br/>

                <div className='mb-4'>
    <input type='text' placeholder='Meter Serial No' onChange={e => setValues({...values, meter_serial_no:e.target.value})} value={values.meter_serial_no}/>
                </div><br/>
                <button className='btn btn-success'>Submit</button>
            </form>
      </div>
    </div>
  )
}
