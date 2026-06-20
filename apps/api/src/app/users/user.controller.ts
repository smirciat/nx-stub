import { Router } from 'express';
import { UserService } from './user.service';

const router = Router();
const service = new UserService();

router.get('/', async (_req, res) => {
  res.json(await service.getAll());
});

router.get('/:id', async (req, res) => {
  const user = await service.getById(Number(req.params.id));
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.json(user);
});

router.post('/', async (req, res) => {
  const user = await service.create(req.body);
  res.status(201).json(user);
});

router.put('/:id', async (req, res) => {
  const updated = await service.update(Number(req.params.id), req.body);
  if (!updated) return res.status(404).json({ message: 'Not found' });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  const ok = await service.remove(Number(req.params.id));
  if (!ok) return res.status(404).json({ message: 'Not found' });
  res.status(204).send();
});

export function registerUserRoutes() {
  return router;
}