// const fs = require('fs');
// let texto = process.argv[2];

// fs.writeFile('teste.txt', texto, (error) => {
//     if(error){
//         console.log('Houve um erro ao gravar o arquivo');
//     }else{
//         console.log('Gravei o arquivo');
//     }
// });

const bodyParser = require('body-parser');
const express = require('express');
const app = express(); 
const fs = require('fs');

app.use(bodyParser.json()); 
app.post('/', (req, res) => {
    fs.writeFile(req.body.titulo, req.body.texto, (error) => {
        if(error){
            res.send('Houve um erro ao gravar o arquivo');
        }else{
            res.send("arquivo gravado");
        }
    });
});



app.listen(3000);
