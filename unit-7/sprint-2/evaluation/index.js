const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const url = 'mongodb+srv://viveksonitech:8564910720@cluster0.z7gof.mongodb.net/backend';

const con = async () => {
  try {
    await mongoose.connect(url);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error while connecting to the database', error);
  }
};
con();

app.use(express.json());

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  phone_no: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('Users', userSchema);

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  warranty: { type: String, required: true },
  origin: { type: String, enum: ['India', 'China'], required: true },
});

const Product = mongoose.model('Product', productSchema);

const loggerMiddleware = (req, res, next) => {
  const startTime = new Date();
  const { method, url } = req;
   res.on('finish', () => {
    const endTime = new Date();
    const elapsedTime = endTime - startTime;
    const logMessage = `${method} ${url} ${endTime} ${elapsedTime}ms\n`;

    require('fs').appendFile('logs.txt', logMessage, (err) => {
      if (err) console.error(err);
    });
  });


  next();
};

const guardMiddleware = (req, res, next) => {
  if (req.query.secrettoken === 'secret1410') {
    next();
  } else {
    res.status(401).json({ error: 'Not Authorized' });
  }
};

app.use(loggerMiddleware);

// {"name":"vivek","age":22,"email":"vivek@example.com","city":"New York","phone_no":"1234567890","password":"merekonahipata"}
app.post('/signup', async (req, res) => {
    try {
      const { name, age, email, city, phone_no, password} = req.body;
      const newUser = new User({ name, age, email, city, phone_no, password});
    //  await User.collection.insertOne(newUser);
      await newUser.save(); 
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

//   {"email":"vivek@example.com","password":"merekonahipata"}
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ secrettoken: 'secret1410', message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Login failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/products', guardMiddleware, async (req, res) => {
  try {
    const products = await Product.find(req.query);
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// {"name": "mobile", "category": "Electronics", "price": 49999, "warranty": "1 year", "origin": "India"}
app.post('/products/create', guardMiddleware, async (req, res) => {
  try {
    const { name, category, price, warranty, origin } = req.body;
    const newProduct = new Product({ name, category, price, warranty, origin });
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//65ae9845d7f899e092d7a856
// {"name": "mobile", "category": "Electronics", "price": 599.99, "warranty": "1 years", "origin": "China"}
app.put('/products/:productID', guardMiddleware, async (req, res) => {
  try {
    const { productID } = req.params;
    await Product.findByIdAndUpdate(productID, req.body);
    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/products/:productID', guardMiddleware, async (req, res) => {
  try {
    const { productID } = req.params;
    await Product.findByIdAndDelete(productID);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
