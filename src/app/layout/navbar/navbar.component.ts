import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isSidebarOpen = true;
  open = false
  @Output () toggleSideNav: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebarMenu() {
    this.isSidebarOpen = !this.isSidebarOpen
    this.toggleSideNav.emit(this.isSidebarOpen);

    console.log(this.isSidebarOpen);

  }

  menuOpen() {
    this.open = !this.open
  }
}
