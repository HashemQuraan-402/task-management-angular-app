import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Task } from '../Task';
import { TaskService } from './task-service';

describe('TaskService', () => {
  let service: TaskService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(TaskService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load tasks from the API', () => {
    const tasks: Task[] = [
      {
        id: '1',
        text: 'Review pull request',
        day: 'Today at 4:00 PM',
        reminder: true,
      },
    ];

    service.getTasks().subscribe((result) => {
      expect(result).toEqual(tasks);
    });

    const request = httpTesting.expectOne('http://localhost:5000/tasks');

    expect(request.request.method).toBe('GET');
    request.flush(tasks);
  });

  it('should create a task through the API', () => {
    const newTask: Task = {
      text: 'Prepare sprint demo',
      day: 'Tomorrow at 10:30 AM',
      reminder: false,
    };

    const savedTask: Task = {
      ...newTask,
      id: '2',
    };

    service.createTask(newTask).subscribe((result) => {
      expect(result).toEqual(savedTask);
    });

    const request = httpTesting.expectOne('http://localhost:5000/tasks');

    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(newTask);
    request.flush(savedTask);
  });

  it('should update a task reminder through the API', () => {
    const updatedTask: Task = {
      id: '2',
      text: 'Prepare sprint demo',
      day: 'Tomorrow at 10:30 AM',
      reminder: true,
    };

    service.updateReminder(updatedTask).subscribe((result) => {
      expect(result).toEqual(updatedTask);
    });

    const request = httpTesting.expectOne('http://localhost:5000/tasks/2');

    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(updatedTask);
    request.flush(updatedTask);
  });

  it('should delete a task through the API', () => {
    const task: Task = {
      id: '2',
      text: 'Prepare sprint demo',
      day: 'Tomorrow at 10:30 AM',
      reminder: false,
    };

    service.deleteTask(task).subscribe();

    const request = httpTesting.expectOne('http://localhost:5000/tasks/2');

    expect(request.request.method).toBe('DELETE');
    request.flush(null);
  });
});
