const express=require('express')
const dotenv=require('dotenv')
const path=require('path')

dotenv.config()

const port=process.env.PORT||5000;
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use('/openai',require('./openaiRoutes'));

app.use(express.static(path.join(__dirname,'public')))

if(process.env.NODE_ENV==='production'){
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
      });
}else{
    app.get('/api', (req, res) => {
        res.send('API is running');
      });
}


app.listen(port,()=>console.log(`listening on port ${port}`));

