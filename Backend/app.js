const express = require('express')
const mysql2 = require('mysql2')
const cors = require('cors')


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "techb"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


app.get('/', (req,res) =>{
    res.send("All Data");
    const sql = "SELECT * FROM customer";
    db.query(sql,(err,result) =>{
        if(err) return res.json({Message:"Error inside Sever"});
        return res.json(result);
    })
});

app.post('/customer', (req,res) =>{ 
    res.send("All Customer");
    const sql = "INSERT INTO customer (`id`,`name`,`address`,`customer_no`,`meter_serial_no`) VALUES (?)";
    console.log(req.body)
    const values = [
        req.body.id,
        req.body.name,
        req.body.address,
        req.body.customer_no,
        req.body.meter_serial_no,
    ]
    db.query(sql, [values], (err,result) => {
        if(err) return res.json(err)
        return res.json(result);
    })
});

app.put('/update/:id', (req,res) =>{
    res.send("Update Data");
    const sql = "UPDATE customer SET `id`=?, `name`=?, `address`=?, `customer_no`=?, `meter_serial_no`=? WHERE id=?";
    const id = req.params.id;
    db.query(sql, [req.body.id,req.body.name,req.body.address,req.body.customer_no,req.body.meter_serial_no, id], (err,result)=>{
            if(err) return res.json({Message: "Error inside server"})
            return res.json(result);
    })
});

app.delete('/delete/:id', (req,res) =>{
    res.send("Delete Data")
    const sql = "DELETE FROM customer WHERE id=?";
    const id = req.params.id;
    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({Message: "error inside Sever"})
        return res.json(result);    
    })
})

app.listen(8081, ()=>{
    console.log("Server is running")
});