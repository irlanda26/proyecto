const express=require('express');
const app=express();
const mysql=require('mysql');
const cors=require('cors');

app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'base'
    
});
app.post('/create',(req,res)=>{
    const grupo=req.body.grupo;
    const integrante=req.body.integrante;
    const album=req.body.album;
    const imagen=req.body.imagen
    db.query('INSERT INTO fotocartas(grupo, integrante, album, imagen) VALUES (?,?,?,?)',[grupo, integrante, album, imagen],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send('photocard registrada');
        }
    })
})
app.put('/update',(req,res)=>{
    const grupo=req.body.grupo;
    const integrante=req.body.integrante;
    const album=req.body.album;
    const imagen=req.body.imagen;
    const id=req.body.id;
    db.query('UPDATE fotocartas SET grupo=?, integrante=?, album=?, imagen=? where id=?', [grupo, integrante, album, imagen, id],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send('datos actualizados');
        }
    })
})
app.get('/base', (req,res)=>{
    db.query('SELECT * FROM fotocartas',
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});
app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    db.query('DELETE FROM fotocartas WHERE id=?', id,
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send('photocard eliminada');
        }
    })
})
app.listen(3001,()=>{
    console.log('Corriendo en el puerto 3001');
})