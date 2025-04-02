import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { HomeComponent } from './pages/home/home.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddTaskComponent },
  { path: 'list', component: TaskListComponent },
  { path: 'edit/:id', component: EditTaskComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
