import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {UiService} from '../../services/ui-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  constructor(private uiService: UiService, private router: Router) {}

  onGoBackClick(){
    this.uiService.toggleRoute('/');
  }

}
