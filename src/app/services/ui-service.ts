import { Injectable } from '@angular/core';
import{ Observable,BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class UiService {

    private showAddTask = new BehaviorSubject<any>(false);

    toggleAddTask(): void{
        this.showAddTask.next(!this.showAddTask.value);
    }

    onToggleUI():Observable<any>{
        return this.showAddTask.asObservable();
    }


    private isHomePage!: BehaviorSubject<any>;

    constructor(private router: Router) {
        this.isHomePage = new BehaviorSubject<any>(this.router.url === '/');
    }

    

    toggleRoute(url: string): void{
        this.isHomePage.next(url === '/');
    }
    
    onToggleRoute():Observable<any>{
        return this.isHomePage.asObservable();
    }

}
