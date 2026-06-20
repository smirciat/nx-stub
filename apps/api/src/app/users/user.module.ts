import { Express } from 'express';
import { registerUserRoutes } from './user.controller';

export function registerUsers(app: Express) {
  app.use('/api/users', registerUserRoutes());
}