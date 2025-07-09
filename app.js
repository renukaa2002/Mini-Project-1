const express = require('express');
const app = express();
const PORT = 3000;

// ✅ Load JSON
const items = require('./data/items.json');

// ✅ Middleware
app.use(express.static('public'));

// ✅ Route to send JSON
app.get('/items', (req, res) => {
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
