import express from 'express';
import path from 'path';
import routes from './server-routes';

const server = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
server.use(express.json());

// Serve static files from the React app
server.use(express.static(path.join(__dirname, '..', 'build')));

server.use(routes.router);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});