const mongoose =  require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

mongoose.connect("mongodb://localhost:27017/danny", {useNewUrlParser: true});

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    email: String
});

const User = mongoose.model("user", userSchema);

const createUser = async (userData) => {
    try {
        const user = new User({
            username: userData.username,
            password: userData.password,
            email: userData.email
        });
        const docs = await user.save();
        console.log("User inserted:", docs);
    } catch (error) {
        console.log("Error saving user:", error);
    }
}

//createUser({username:"1", password:"2", email:"3"})

module.exports = {
    createUser
}