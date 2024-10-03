const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
require("dotenv").config();
var jwt = require("jsonwebtoken");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://auth-master.netlify.app"],
    credentials: true,
  })
);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.o4eqbyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const verifyToken = (req, res, next) => {
  // console.log('inside = ', req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Forbidden-Access" });
  }
  const token = req.headers.authorization.split(" ")[1];
  // console.log(token)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
    if (err) {
      return res.status(401).send({ message: "Forbidden-Access" });
    }
    req.decoded = decoded;
    //console.log("decoded value = ", decoded);

    next();
  });
};

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //await client.connect();

    const roomsCollection = client.db("airbnb").collection("rooms");

    // Get all rooms from db
    app.get("/rooms", async (req, res) => {
      const category = req.query.category;
      console.log(category);
      let query = {};
      if (category && category !== "null") query = { category };
      const result = await roomsCollection.find(query).toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("server!");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
