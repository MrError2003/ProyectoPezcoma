// jdzapatamar
// CWmHcFk2aqmBYDmZ

const mongoose = require('mongoose');
const uri = "mongodb+srv://jdzapatamar:CWmHcFk2aqmBYDmZ@cluster0.js4q4fv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
 };


async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    console.log("Conexion exitosa a MongoDB");

    // Realizar datos para realizar la prueba de conexión
    const User = mongoose.model('users', { name: String, email: String, password: String });
    const users = await User.find();

    const Post = mongoose.model('posts', { idUser: String, title: String, content: String, image: String, createdAt: Date, updatedAt: Date});
    const posts = await Post.find();

    console.log("datos obtenidos: ", users, posts);
    } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}

run().catch(console.dir);
