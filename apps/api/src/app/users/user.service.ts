import { User } from './user.model';

export class UserService {
  async getAll() {
    return User.findAll();
  }

  async getById(id: number) {
    return User.findByPk(id);
  }

  async create(data: any) {
    return User.create({
      title: data.title,
    });
  }

  async update(id: number, data: any) {
    const user = await User.findByPk(id);
    if (!user) return null;

    await user.update(data);
    return user;
  }

  async remove(id: number) {
    const user = await User.findByPk(id);
    if (!user) return false;

    await user.destroy();
    return true;
  }
}