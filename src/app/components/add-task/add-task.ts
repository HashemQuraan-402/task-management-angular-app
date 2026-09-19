import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task } from '../../Task';
import { UiService } from '../../services/ui-service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  @Output() onAddTask = new EventEmitter<Task>();

  text = '';
  day = '';
  reminder = false;
  errorMessage = '';

  constructor(public readonly uiService: UiService) {}

  onSubmit(): void {
    const text = this.text.trim();
    const day = this.day.trim();

    if (!text || !day) {
      this.errorMessage = 'Enter both a task and a day or time.';
      return;
    }

    this.onAddTask.emit({ text, day, reminder: this.reminder });
    this.text = '';
    this.day = '';
    this.reminder = false;
    this.errorMessage = '';
  }
}

