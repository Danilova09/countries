import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="alert alert-danger">
      Page is not found!
    </div>
  `,
  styles: [`
    .alert {
      width: 700px;
      display: block;
      margin: 70px auto;
    }
  `],
})
export class NotFoundComponent {}

