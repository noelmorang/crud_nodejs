const controller={};

//metodo get a la db
controller.list=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT*FROM customer',(err,clientes)=>{
            if(err){
                res.json(err);
            }
            /**console.log(clientes);//viendo en consola*/
            res.render('customers',{
                data:clientes
            });
        })
    });
};

//metodo post a la db
controller.insert=(req,res)=>{
   //console.log(req.body);
    const data=req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO customer set ?',[data],(err,clientes)=>{
            //console.log(clientes);
            res.redirect('/');
        })
    });
};

//metodo getbyid par edit de la db
controller.edit=(req,res)=>{
    const {id}=req.params;//otra forma = const id=req.params.id;
    req.getConnection((err,conn)=>{
        conn.query('SELECT*FROM customer WHERE id= ?',[id],(err,clientes)=>{
            //console.log(clientes);
            res.render('customer_edit',{
                data:clientes[0]
            });
        })
    });
 };

 //metodo update de la db
controller.update=(req,res)=>{
    const {id}=req.params;//otra forma = const id=req.params.id;
    const data=req.body;//datos que vienen del formulario
    req.getConnection((err,conn)=>{
        conn.query('UPDATE customer SET ? WHERE id= ?',[data,id],(err,clientes)=>{
            res.redirect('/');
        })
    });
 };

//metodo delete a la db
controller.delete=(req,res)=>{
    const {id}=req.params;//otra forma = const id=req.params.id;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM customer WHERE id= ?',[id],(err,clientes)=>{
            //console.log(clientes);
            res.redirect('/');
        })
    });
 };


//importando 
module.exports=controller;