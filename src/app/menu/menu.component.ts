import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.isOpen = !this.isOpen;
  }
}
