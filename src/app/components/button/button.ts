import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() text = '';
  @Input() color = '';

  @Output() readonly btnClick = new EventEmitter<void>();

  onClick(): void {
    this.btnClick.emit();
  }
}
