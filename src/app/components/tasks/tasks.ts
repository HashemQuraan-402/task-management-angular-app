import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Task } from '../../Task';
import { TaskService } from '../../services/task-service';
import { AddTask } from '../add-task/add-task';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItem, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {
  tasks: Task[] = [];

  constructor(private readonly taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((item) => item.id !== task.id);
    });
  }

  toggleReminder(task: Task): void {
    const updatedTask = { ...task, reminder: !task.reminder };
    this.taskService.updateReminder(updatedTask).subscribe((savedTask) => {
      this.tasks = this.tasks.map((item) =>
        item.id === savedTask.id ? savedTask : item,
      );
    });
  }

  addTask(task: Task): void {
    this.taskService.createTask(task).subscribe((newTask) => {
      this.tasks = [...this.tasks, newTask];
    });
  }
}

