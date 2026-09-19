import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {

  @Input({required : true}) task!:Task;
  faTimes = faTimes;

  @Output() OnDeleteTask :EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder :EventEmitter<Task> = new EventEmitter();

OnDelete(task:Task){
  this.OnDeleteTask.emit(task);
}


onToggle(task:Task){
  this.onToggleReminder.emit(task);
}

}
