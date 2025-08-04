import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; // Import fileURLToPath to convert URL to file path

const app = express();

// Use import.meta.url to get the current module's URL
const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Convert URL to file path

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(8000, () => {
  console.log('Server running on port 8000');
});

