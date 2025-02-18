import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';


const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());







app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/editor', (req, res) => {

    res.render('editor');
});


app.post('/preview', (req, res) =>{
    
    const content = req.body;

    console.log(content)
      
        res.send(content)        
})

app.post('/draft', (req, res) =>{
    
    const content = req.body;

    console.log(content)
      
        res.send(content)        
})

app.get('/donate', (req, res) =>{
    res.render('donate');
})
app.post('/mpesa', (req, res) =>{
    console.log(req.body);
})
app.post('/paypal', (req, res) =>{
    console.log(req.body);
})
app.get('/contributor', (req, res) =>{
    res.render('contributor');
})
app.get('/join', (req, res) =>{
    res.render("signup")
})


app.listen(port, ()=>{
    console.log(`Working at port: ${port}`);
});
