const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 

app.use(bodyParser.json()); // idicar que vai usar o bodyParser, para que aplicação entenda que vou mandar uma requisição em informações json.
app.use(bodyParser.urlencoded({ extended: false}));//é pra ele entender quando eu passar paramentros via URL

require('./controllers/authController')(app); // o app como se fosse um objeto que é definido uma vez, que vai ser necessario usar em outros arquivos
// require('./controllers/projectController')(app);

/*app.get('/', (req, res)=>{
    res.send('Ok');
});*/

app.listen(3000);