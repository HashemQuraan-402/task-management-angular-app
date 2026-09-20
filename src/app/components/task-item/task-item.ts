import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  @Input({ required: true }) task!: Task;

  @Output() readonly deleteTask = new EventEmitter<Task>();
  @Output() readonly toggleReminder = new EventEmitter<Task>();

  readonly faTimes = faTimes;

  onDelete(): void {
    this.deleteTask.emit(this.task);
  }

  onToggleReminder(): void {
    this.toggleReminder.emit(this.task);
  }
}
