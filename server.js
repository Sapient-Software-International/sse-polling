const express = require('express');
const cors = require('cors');
const posts = require('./dummyPosts.json');

const app = express();
app.use(cors());

const port = process.env.PORT || 3001;

let sentCount = 0;
let intervalId;

app.get('/', (req, res) => {
  res.status(200).json('API Active');
});

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');

  const sendEvent = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  function dataResponse() {
    if (sentCount === 12) {
      if (intervalId) clearInterval(intervalId);
      res.end();
      sentCount = 0;
      return;
    }

    sendEvent({
      message: `Hello from server! ${++sentCount}`,
      data: posts[sentCount],
    });
  }

  // Your event logic here, such as listening to database changes

  // Example: Send a message every 5 seconds
  intervalId = setInterval(dataResponse, 5000);

  // Clean up on client disconnect
  req.on('close', () => {
    clearInterval(intervalId);
    res.end();
  });
});

app.listen(port, () => console.log('SSE server running on port 3001'));
