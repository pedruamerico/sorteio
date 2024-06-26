const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/sorteio', (req, res) => {
  const { names } = req.body;
  const randomIndex = Math.floor(Math.random() * names.length);
  const winner = names[randomIndex];
  res.json({ winner });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
