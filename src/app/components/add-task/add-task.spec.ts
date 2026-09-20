import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task } from '../../Task';
import { AddTask } from './add-task';

describe('AddTask', () => {
  let component: AddTask;
  let fixture: ComponentFixture<AddTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTask],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require both task text and a day or time', () => {
    component.onSubmit();

    expect(component.errorMessage).toBe('Enter both a task and a day or time.');
  });

  it('should emit a trimmed task and reset the form', () => {
    let emittedTask: Task | undefined;

    component.onAddTask.subscribe((task) => {
      emittedTask = task;
    });

    component.text = '  Prepare portfolio  ';
    component.day = '  Friday at 2:00 PM  ';
    component.reminder = true;

    component.onSubmit();

    expect(emittedTask).toEqual({
      text: 'Prepare portfolio',
      day: 'Friday at 2:00 PM',
      reminder: true,
    });

    expect(component.text).toBe('');
    expect(component.day).toBe('');
    expect(component.reminder).toBe(false);
    expect(component.errorMessage).toBe('');
  });
});
