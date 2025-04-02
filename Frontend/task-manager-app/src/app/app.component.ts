import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public router: Router) {}

  get isHomePage(): boolean {
    return this.router.url === '/';
  }
  title = 'task-manager-app';

}
