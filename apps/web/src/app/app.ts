import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService, TaskSocketService } from '@cleaners-workspace/tasks';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.html',
})
export class App {
  private tasksApi = inject(TaskService);
  private tasksSocket = inject(TaskSocketService);
  date=new Date().toLocaleDateString();
  tasks = signal<any[]>([]);
  newTitle = signal('');

  constructor() {
    this.load();
    
    this.tasksSocket.onTasksChanged(() => {
      this.load();
    });
  }

  load() {
    console.log('Loading tasks...');
    
    this.tasksApi.getAll().subscribe({
      next: (tasks) => {
      console.log('Tasks returned:', tasks);
      this.tasks.set(tasks);
    },
      error: (err) => {
        console.error('Task load failed:', err);
      }
    });
  }

  add() {
    if (!this.newTitle()) return;

    this.tasksApi.create(this.newTitle()).subscribe(() => {
      this.newTitle.set('');
      this.load();
    });
  }

  toggle(task: any) {
    this.tasksApi
      .update(task.id, { completed: !task.completed })
      .subscribe(() => this.load());
  }

  remove(id: number) {
    this.tasksApi.delete(id).subscribe(() => this.load());
  }
}