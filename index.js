const express = require('express');
const app = express();
const cors =require('cors')
const port = process.env.PORT || 8080;
const contactRoutes = require('./routes/contactRoutes');
const database = require('./config/database');
app.use(cors())
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Home")
})
app.use('/contacts', contactRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
