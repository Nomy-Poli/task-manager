import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from 'src/app/services/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  trigger,
  style,
  animate,
  transition,
  state,  
} from '@angular/animations';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('highlightCompleted', [
      state('false', style({ backgroundColor: 'white' })),
      state('true', style({ backgroundColor: '#fff8c4' })),
      transition('false <=> true', [
        animate('500ms ease-in-out')
      ])
    ]),
    trigger('fadeInText', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ]),    
  ]
})

export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    public  taskService: TaskService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => this.tasks = data,
      error: (err) => {
        console.error(err);
        this.snackBar.open('שגיאה בטעינת המשימות', 'סגור', { duration: 3000 });
      }
    });
  }
  searchText: string = '';

  get filteredTasks(): Task[] {
    return this.tasks
      .filter(task => {
        // סינון לפי טקסט
        return task.title.toLowerCase().includes(this.searchText.toLowerCase());
      })
      .filter(task => {
        // סינון לפי סטטוס
        if (this.filterStatus === 'completed') return task.completed;
        if (this.filterStatus === 'pending') return !task.completed;
        return true;
      });
  }
  
  isOverdue(date: Date | string): boolean {
    const due = new Date(date);
    const today = new Date();
    due.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return due < today;
  }
  toggleComplete(task: Task): void {
    task.completed = !task.completed;
    this.taskService.updateTask(task.id!, task).subscribe();
  }
  filterStatus: 'all' | 'completed' | 'pending' = 'all';



  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.snackBar.open('✅ המשימה נמחקה', 'סגור', { duration: 3000 });
        this.loadTasks(); // טען מחדש
      },
      error: (err) => {
        console.error(err);
        this.snackBar.open('❌ שגיאה במחיקה', 'סגור', { duration: 3000 });
      }
    });
  }
  
}
