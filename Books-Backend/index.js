const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const mysql=require("mysql");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


const db=mysql.createPool({
host: "localhost",
user: "root",
password: "1234",
database: "bookscatologue",
port: 3306,
});

app.get("/api/getDetails",(req,res)=>{
    const sqlSelect="select * from my_table";
    db.query(sqlSelect,(error,result)=>{
        res.send(result);
        console.log(error);
    });
});
app.post("/api/getspecificDetails",(req,res)=>{
    const bookid=req.body.booki;
    const mySql="select * from my_table where bookid=?";
    db.query(mySql,[bookid],(error,response)=>{
        res.send(response);
        console.log(error);
    });
});
app.post("/api/update",(req,res)=>{
    const bookid=req.body.bookid;
    const status=req.body.status;
    const rating=req.body.rating;
    const notes=req.body.notes;
    const readgain=req.body.readgain;
    const pagefinsh=req.body.pagefinsh;
    const mySql="update my_table set status=?,rating=?,notes=?,readgain=?,pagefinsh=? where bookid=?";
    db.query(mySql,[status,rating,notes,readgain,pagefinsh,bookid],(error,response)=>{
        res.send(response);
        console.log(error);
    });
});
app.post("/api/insert",(req,res)=>{
    //const bookid=req.body.bookid;
    const bookname=req.body.bookname;
    const bookdes=req.body.bookd;
    const bookauthor=req.body.bookauthor;
    const bookthumb=req.body.booktumbnail;

    console.log(bookname+" "+bookauthor+" "+bookdes+" "+bookthumb);
    const sqlInsert="insert into my_Table(bookname,bookdes,bookauthor,bookthumb) values(?,?,?,?)";
    db.query(sqlInsert,[bookname,bookdes,bookauthor,bookthumb],(error,result) =>{
        res.send(result);
    });
})
app.listen(3001,()=>{
    console.log("Started at locolhost 3001");
});