import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private readonly showAddTask = new BehaviorSubject<boolean>(false);
  private readonly isHomePage = new BehaviorSubject<boolean>(true);

  toggleAddTask(): void {
    this.showAddTask.next(!this.showAddTask.value);
  }

  onToggleUI(): Observable<boolean> {
    return this.showAddTask.asObservable();
  }

  toggleRoute(url: string): void {
    const path = url.split(/[?#]/)[0];
    this.isHomePage.next(path === '/');
  }

  onToggleRoute(): Observable<boolean> {
    return this.isHomePage.asObservable();
  }
}
