const express = require('express');
const userRouter = require('./routes/user.routes')
const app = express();

//Dot env utilised
const dotenv = require('dotenv');
dotenv.config();

//Database Connection
const connectToDB = require('./config/db');
connectToDB();

//Cookie Parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const indexRouter = require('./routes/index.routes');

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRouter)
app.use('/',indexRouter);

const PORT = process.env.PORT || 3000 ;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})