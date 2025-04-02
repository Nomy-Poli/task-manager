import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService, Task } from 'src/app/services/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  taskForm!: FormGroup;
  taskId!: number;
  today: Date = new Date();
  tomorrow: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['', [Validators.required]]

      
    });

    this.taskService.getTask(this.taskId).subscribe(task => {
      this.taskForm.patchValue({
        title: task.title,
        description: task.description,
        dueDate: new Date(task.dueDate)
      });
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const updatedTask: Task = {
        id: this.taskId,
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        dueDate: new Date(this.taskForm.value.dueDate).toISOString()
      };

      this.taskService.updateTask(this.taskId, updatedTask).subscribe({
        next: () => {
          this.snackBar.open('✅ השינויים נשמרו בהצלחה!', 'סגור', { duration: 3000 });
          this.router.navigate(['/list']);
        },
        error: () => {
          this.snackBar.open('❌ שגיאה בעת שמירת השינויים', 'סגור', { duration: 3000 });
        }
      });
    }
  }
}
