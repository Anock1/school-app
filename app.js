import express from 'express';
import route from './routes/routes.js';
import connectDB from './db/db.js';
import 'dotenv/config' 
import session from 'express-session';
import e from 'express';

const app = express();
const PORT = process.env.PORT|| 3000;
app.set('views','./views');
app.set('view engine','ejs');

// start of session middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(
    session({
        secret:'my secret key',
        saveUninitialized:true,
        resave:false
    })
)
app.use((req,res,next)=>{
  res.locals.user = req.session.user;
  delete req.session.user;
  next();  
})
 // end of session middleware
// database connection
connectDB();

app.use('/',route)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})