
const express = require('express');
const multer = require('multer');
const app = express();
const port = 8080;

// Set up storage using multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Root route that says "Hello"
app.get('/', (req, res) => {
  res.send('Hello');
});

// File upload route
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  console.log('Uploaded file name:', req.file.originalname);

  // Check if the name can be found (for simplicity, always returns true in this example)
  res.status(200).send('File uploaded successfully.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
