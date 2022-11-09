const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

// -------middleware
app.use(cors());
app.use(express.json());


// user : reviewServer
// pass : nJpWSCJbeVupeHmS


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ixkdtuw.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    const serviceCollection = client.db('reviewServer').collection('services');
    try {

    }
    finally {

    }
}
run().catch(err => console.log(err));







app.get('/', (req, res) => {
    res.send('review server is run')
});
app.listen(port, () => {
    console.log(`my server is run on ${port}`);
});