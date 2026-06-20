import { Express } from 'express';
import { registerTaskRoutes } from './task.controller';

export function registerTasks(app: Express) {
  app.use('/api/tasks', registerTaskRoutes());
}