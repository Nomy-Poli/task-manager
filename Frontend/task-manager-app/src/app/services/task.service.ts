import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Task {
  id?: number;
  title: string;
  description?: string;
  dueDate: string;
  completed?: boolean; // חדש!

}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5292/api/tasks';

  constructor(private http: HttpClient) { }

  addTask(task: Task): Observable<Task> {
    const headers = new HttpHeaders({
      'Developer-Name': 'Nomy Hirsch'
    });

    return this.http.post<Task>(this.apiUrl, task, { headers });
  }
  getTasks(): Observable<Task[]> {
    const headers = new HttpHeaders({
      'Developer-Name': 'Nomy Hirsch'
    });

    return this.http.get<Task[]>(this.apiUrl, { headers });
  }

  deleteTask(id: number): Observable<void> {
    const headers = new HttpHeaders({
      'Developer-Name': 'Nomy Hirsch'
    });

    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }
  getTask(id: number): Observable<Task> {
    const headers = new HttpHeaders({ 'Developer-Name': 'Nomy Hirsch' });
    return this.http.get<Task>(`${this.apiUrl}/${id}`, { headers });
  }

  updateTask(id: number, task: Task): Observable<Task> {
    const headers = new HttpHeaders({
      'Developer-Name': 'Nomy Hirsch'
    });
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task, { headers });
  }
}
