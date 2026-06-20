import { Server } from 'socket.io';
import cors from 'cors';

export let io: Server;

export function initializeSocket(server: any) {
  io = new Server(server, {
    path: '/api/socket.io',
    cors: {
      origin: '*'
    }
  });
  
  io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);
  });
}