import { TestBed } from '@angular/core/testing';

import { UiService } from './ui-service';

describe('UiService', () => {
  let service: UiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle the add-task form', () => {
    const values: boolean[] = [];
    const subscription = service.onToggleUI().subscribe((value) => {
      values.push(value);
    });

    service.toggleAddTask();
    service.toggleAddTask();

    expect(values).toEqual([false, true, false]);
    subscription.unsubscribe();
  });

  it('should track whether the current route is the home page', () => {
    const values: boolean[] = [];
    const subscription = service.onToggleRoute().subscribe((value) => {
      values.push(value);
    });

    service.toggleRoute('/about');
    service.toggleRoute('/?filter=all');

    expect(values).toEqual([true, false, true]);
    subscription.unsubscribe();
  });
});
