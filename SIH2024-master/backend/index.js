const express = require('express');
const colors = require('colors');
const cookieParser = require('cookie-parser');

const dotenv = require('dotenv');
const clgDev =require('./utils/clgDev')
const connectDB =require('./config/database')
const Auth = require('./routes/Auth')
const User = require('./routes/User')
const PDA = require('./routes/PDA')
const cors =require('cors')

dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth",Auth)
app.use('/api/v1/users', User);
app.use('/api/v1/pda', PDA);


app.get("/",(req,res)=>{
    res.send("Hello");
})

app.listen(PORT, (err) => {
    if (err) {
      clgDev('Error occurred creating server');
      process.exit();
    }
    clgDev(`Server in running on ${PORT}`.yellow.underline.bold);
  });
  