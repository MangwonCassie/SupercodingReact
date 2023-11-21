const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");


dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
    )
    .then(() => console.log("DBConnection Success"))
    .catch((err => {
            console.log(err);
            console.log("연결에러")
        }));

/*이거 주소 항상 복수여야한다고했음. */
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log("backend server is running");
})






