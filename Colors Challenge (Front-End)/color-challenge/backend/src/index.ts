import express from 'express';
import cors from 'cors';
import { registerColorRoute } from './routes/color.route';

function main() {
  const port = 3001;
  const app = express();

  app.use(cors());

  registerColorRoute(app);

  app.listen(port, () => {
    console.log(`Start server at http://localhost:${port}`);
  });
}

main();