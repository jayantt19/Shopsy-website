require("dotenv").config();
const app=require('./src/app');
const connectDB=require('./src/configs/db')


connectDB();
const PORT=5000;

app.listen(5000,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})