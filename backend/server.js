import express from 'express';


// dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Routes

app.get('/', (req, res) => {
  res.send('🎓 Welcome to the Charity Education Server!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
