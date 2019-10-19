import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jurika';
  isOpen = false;

  onClick(e: Event): void {
    this.isOpen = !this.isOpen;
  }
}
