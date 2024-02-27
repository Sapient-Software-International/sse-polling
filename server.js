const express = require('express');
const cors = require('cors');
const posts = require('./dummyPosts.json');

const app = express();
app.use(cors());

const port = process.env.PORT || 3001;

let sentCount = 0;

app.get('/', (req, res) => {
  res.status(200).json('API Active');
});

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');

  const sendEvent = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  // Your event logic here, such as listening to database changes

  // Example: Send a message every 5 seconds
  const interval = setInterval(() => {
    if (sentCount === 12) {
      clearInterval(interval);
      res.end();
      sentCount = 0;
      return;
    }

    sendEvent({
      message: `Hello from server! ${++sentCount}`,
      data: posts[sentCount],
    });
  }, 5000);

  // Clean up on client disconnect
  req.on('close', () => {
    clearInterval(interval);
    res.end();
  });
});

app.listen(port, () => console.log('SSE server running on port 3001'));
