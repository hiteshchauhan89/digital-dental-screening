const express = require('express');
const app = express();

// Example route
app.get('/', (req, res) => {
  res.send('Digital Dental Screening System Backend Running');
});

// Listen on the port Cloud Run assigns
const port = process.env.PORT || 8080; // fallback for local testing
app.listen(port, () => console.log(`Server listening on port ${port}`));
