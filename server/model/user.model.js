const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const bcrypt = require('bcrypt')
let uri = process.env.URI

mongoose.connect(uri)
.then((response) => {
    console.log("Database connected successfully");
})
.catch((err) => {
    console.error(err)
})

let studentSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Corrected typo
});

studentSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        console.log(hash);
        this.password = hash
        next()
    })
})

let studentModel = mongoose.model("students", studentSchema)
module.exports = studentModel