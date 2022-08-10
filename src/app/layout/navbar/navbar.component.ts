import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  isSidebarOpen = true;
  userLink = {
      name: 'Login',
      url: '/login',
      icon: 'account_circle',
      isOpen: false
  }
    @Output () toggleSideNav: EventEmitter<boolean> = new EventEmitter<boolean>();

    links = [

      {
        name: 'Login',
        url: '/login',
        icon: 'notifications',
        isOpen: false,

        sublinks: [
          {
            name: 'Pass',
            url: '/monUrl',
            icon: 'notifications',
            isOpen: false,

          },
          {
            name: 'Pass',
            url: '/monUrl',
            icon: 'people',
            isOpen: false,
          },

        ]

      },
      {
        name: 'Settings',
        url: '/login',
        icon: 'account_circle',
        isOpen: false,

        sublinks: [
          {
            name: 'Pass',
            url: '/monUrl',
            icon: 'manage_accounts',
            isOpen: false,

          },
          {
            name: 'Pass',
            url: '/monUrl',
            icon: 'people',
            isOpen: false,
          },

        ]

      },

    ]

    test() {
      console.log('Triggered from Navbar::::: ' + this.isSidebarOpen);

    }

}
