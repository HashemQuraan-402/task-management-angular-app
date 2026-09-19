import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiService } from '../../services/ui-service';
import { Button } from '../button/button';

@Component({
  selector: 'app-header',
  imports: [Button, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnDestroy {
  readonly title = 'Task Tracker';
  showAddTask = false;
  private readonly subscription: Subscription;

  constructor(public readonly uiService: UiService) {
    this.subscription = this.uiService.onToggleUI().subscribe(
      (value) => this.showAddTask = value,
    );
  }

  toggleAddTask(): void {
    this.uiService.toggleAddTask();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

