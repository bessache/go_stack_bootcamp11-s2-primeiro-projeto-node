import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello GoStack' }));

app.listen(3333, () => {
  console.log('Server start on port 333!');
});
