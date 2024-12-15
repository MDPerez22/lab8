//const express = require('express');
//const cors = require('cors'); 
//const app = express();
//const port = 3000;
// allow requests from anywhere
//app.use(cors());
// define our api route
// add, sub, div, mult, power, root, square
//app.get('/sub', (req, res) => {
 //const a = parseFloat(req.query.a);
 //const b = parseFloat(req.query.b);
 //const result = a - b;
 //return res.json({ result: result});
//}); 
//app.listen(port,() => {console.log('Server running on http://localhost:'+port)});

export default function handler(req, res) {
    if (req.method === 'GET') {
      const a = parseFloat(req.query.a);
      const b = parseFloat(req.query.b);
  
      if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid input. Please provide numbers for a and b.' });
      }
  
      const result = a - b;
      return res.status(200).json({ result });
    } else {
      return res.status(405).json({ error: 'Method not allowed. Use GET.' });
    }
  }