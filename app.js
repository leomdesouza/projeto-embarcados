var express = require('express');

var app = express();

var port = Number(process.env.PORT || 3000);

var bookRouter = express.Router();

bookRouter.route('/ABC1010')
    .get(function(req,res){
        var responseJson = { 
            Ligar_lampada: true,
            Pisca_pisca:  false,
            pisca_delay: "10 ms"
        };
        res.json(responseJson);
    });

app.use('/api', bookRouter);

app.get('/', function(req, res){
    res.send('Projeto embarcados!!!');
});

app.listen(port, function(){
    console.log('Gulp is running my app on PORT: ' + port);
});