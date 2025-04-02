import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskService, Task } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm!: FormGroup;
  today: Date = new Date();
  tomorrow: Date = new Date();


  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.tomorrow.setDate(this.tomorrow.getDate() + 1); // קובע את המינימום למחר
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const formValue = this.taskForm.value;

      const task: Task = {
        title: formValue.title,
        description: formValue.description,
        dueDate: new Date(formValue.dueDate).toISOString() // הפורמט המדויק שהשרת רוצה
      };

      this.taskService.addTask(task).subscribe({
        next: () => {
          this.snackBar.open('✅ משימה נוספה בהצלחה!', 'סגור', { duration: 3000 });
          this.taskForm.reset();
        },
        error: (err) => {
          this.snackBar.open('❌ שגיאה בעת הוספת המשימה', 'סגור', { duration: 3000 });
          console.error(err);
        }
      });
    }
  }
}
