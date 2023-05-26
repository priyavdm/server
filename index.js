const express = require("express");
var mysql      = require('mysql');
var cors = require("cors")
app=express()
app.use(express.json())
app.use(cors())

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Password123',
  database : 'contact'
});
 
connection.connect();



//  var usersList=[{id:1,name:'priya',age:22},
//             {id:2,name:'rajiv',age:23},
//             {id:3,name:'uma',age:24}]
// *************************** getall datas ************************
app.get('/getall/',(req,res)=>{
    // app.get('/',(req,res)=>{
    // console.log("i am inside get", `SELECT * from contactme where id=${req.params.id}`)
    connection.query('SELECT * from contactme', function (error, results) {
    // connection.query(`SELECT * from contactme where id=${req.params.id}`, function (error, results) {
        if (error);
        console.log('The solution is: ', results);
        res.json(results)
    
      });
    });
// });

// ******************** get names ******************
    // app.get('/:Cname',(req,res)=>{
    //     connection.query(`select * from contactme where Cname=${req.params.Cname}`,function(error,results){
    //         if(error){
    //             console.log(error);
    //         }
    //         res.json(results)
    //     });
    // })

    // 
    
    // **************** using put method to update the datas **************
    app.put('/update',((req,res)=>{
        connection.query(`update contactme set Cname='${req.body.Cname}' where Cname="pd"`,function(error,results){
            if(error){
                console.log(error);
            }
            console.log(results);
            res.json(results)
        });
    }))

    // ***************** correct syntax for put method *************

    // app.put('/update',(req,res)=>{

    //     connection.query('update contactdetails set contactname=? where id=?',[req.body.contactname,req.body.id],function (error, results) {
        
    //     if (error) {
    //             console.log(error);       
    //     }        
    //     res.json(results)
    //     });
        
    //     })

    // ******************* correct syntax for post method****************

    // app.post('/',(req,res)=>{
    //     connection.query('insert into contactdetails (contactname,email,message) values(?,?,?)',[req.body.Cname,req.body.email,req.body.message],function (error, results) {
    //      if (error) {
    //     console.log(error);
    // }
        
    //      res.json(results)
    //  });
    // });


    app.post('/insert',(req,res)=>{
        connection.query(`insert into contactdetails (contactname,email,message) values ('${req.body.Cname}','${req.body.email}','${req.body.message}')`, function (error, results) {
         if (error) {
        console.log(error);
    }
        
         res.json(results)
     });
    });

    // ************** using get method to find names ***********

//     app.get('/:Cname',(req,res)=>{
//         console.log("i am inside get", `SELECT * from contactme where Cname=${req.params.Cname}`)
//         // connection.query('SELECT * from contactme', function (error, results) {
//         connection.query(`SELECT * from contactme where Cname=${req.params.Cname}`, function (error, results) {
//             if (error){
//                 console.log(error);
//             }
//             // console.log('The solution is: ', results);
//             res.json(results)
        
//           });
      
    
//         // res.json(usersList)
//     // console.log(req.query['name'])
//     // console.log("i am inside get")
//     // res.send('hi welcome'+ 'my name is' + req.query['name']+ 'and age is'+req.query["age"])

//     // res.json([{name:req.query['name']},{age:req.query['age']}])
//     // connection.end();
// })

// app.get('/:id',(req,res)=>{
//     // console.log(res)
// //    let user=usersList.filter(e=>e.id==req.params.id)
//     res.json(usersList.filter(e=>e.id==req.params.id))
// })
// app.get('/myapi',()=>{
//     console.log("i am inside myapi")
// })
app.listen(3000,()=>{
    console.log("Listening on port 3000");
})