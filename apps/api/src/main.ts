import express from 'express';
import cors from 'cors';
import { sequelize } from './db';

import { registerTasks } from './app/tasks';
import { registerUsers } from './app/users';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// 🔥 feature modules
registerTasks(app);
// registerUsers(app);

async function bootstrap() {
  await sequelize.authenticate();
  await sequelize.sync();

  app.listen(8080, () => {
    console.log('[ ready ] http://localhost:8080');
  });
}

bootstrap();