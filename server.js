import express from "express";
import bodyParser from "body-parser";

const app = express(); 
const port = 4000; 

app.use(bodyParser.urlencoded({ extended: false })); 

app.get('/', (req, res) => {
    res.send('Some text...'); 
});

app.listen(port, () => {
    console.log(`Server is available on http://localhost:${port}`)
}); 

