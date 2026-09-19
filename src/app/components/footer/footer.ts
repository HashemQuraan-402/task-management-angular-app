import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {UiService} from '../../services/ui-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  constructor(private uiService: UiService, private router: Router) {}

  onAboutClick(): void {
    this.uiService.toggleRoute('/about'); 
  }

}
