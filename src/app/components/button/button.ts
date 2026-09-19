import { CommonModule } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

  @Input() text:string = '';
  @Input() color:string = '';
  @Output() btnClick = new EventEmitter(); 

  OnClick(){
    this.btnClick.emit();
  }

}
