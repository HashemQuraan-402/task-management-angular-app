import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { UiService } from './services/ui-service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnDestroy {
  private readonly routerSubscription: Subscription;

  constructor(
    private readonly router: Router,
    private readonly uiService: UiService,
  ) {
    this.uiService.toggleRoute(this.router.url);
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.uiService.toggleRoute(event.urlAfterRedirects);
      }
    });
  }

  getUrl(route: string): boolean {
    return this.router.url === route;
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}

