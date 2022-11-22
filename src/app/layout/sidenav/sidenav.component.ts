import { MenuNode } from './../../shared/menu-node';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ActivatedRoute, Router } from '@angular/router';

// const MENU_DATA: MenuNode [] = [
//   {
//     name: 'Dashboard',
//     url: '',
//     icon: 'speed',
//     action: false
//   },
//   {
//     name: 'Categories',
//     url: '',
//     icon: 'category',
//     action: false,
//     children: [
//       {
//         name: 'Categories',
//         url: '',
//         icon: 'category',
//         action: false
//       },
//       {
//         name: 'Produits',
//         url: '',
//         icon: 'qr_code',
//         action: false
//       },

//       {
//         name: 'Fournisseurs',
//         url: '',
//         icon: 'list',
//         action: false
//       },
//       {
//         name: 'Clients',
//         url: '',
//         icon: 'contact_page',
//         action: false
//       },
//     ]
//   },
//   {
//     name: 'Produits',
//     url: '',
//     icon: 'qr_code',
//     action: false,
//     children: [
//       {
//         name: 'Fournisseurs',
//         url: '',
//         icon: 'list',
//         action: false
//       },
//       {
//         name: 'Clients',
//         url: '',
//         icon: 'contact_page',
//         action: false
//       },
//       {
//         name: 'Dépenses',
//         url: '',
//         icon: 'fingerprint',
//         action: false,
//         children: [
//           {
//             name: 'Clients',
//             url: '',
//             icon: 'contact_page',
//             action: false
//           },
//           {
//             name: 'Dépenses',
//             url: '',
//             icon: 'fingerprint',
//             action: false
//           },
//         ]
//       },

//       {
//         name: 'Entrees Stock',
//         url: '',
//         icon: 'inventory',
//         action: false
//       },
//       {
//         name: 'Rapports',
//         url: '',
//         icon: 'reporting',
//         action: false
//       },
//     ]
//   },
//   {
//     name: 'Utilisateurs',
//     url: '',
//     icon: 'people',
//     action: false
//   },
//   {
//     name: 'Configuration',
//     url: '',
//     icon: 'admin_panel_settings',
//     action: false
//   },
// ]

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{

  // cards template to display the  dashboard on cards
  numCards = Array.from(Array(5).keys());
  // creating input and output variable for sidebar reduction
  @Input() isSidebarReduced = false;
  @Output () toggleSidebarReduce: EventEmitter<boolean> = new EventEmitter<boolean>();

  // creating input variable to toglle sidebar close/open
  @Input() isSidebarOpen = true;

  // variable sidebar links
  links: MenuNode[] = [
    {
      name: 'Dashboard',
      url: 'main',
      icon: 'speed',
      action: false,
      expandable: false
    },

    {
      name: 'Categories',
      url: 'profile',
      icon: 'category',
      action: false,
      expandable: true,
      children: [
        {
          name: 'Analytics',
          url: 'analytics',
          icon: 'contact_page',
          action: false
        },
        {
          name: 'Outlook',
          url: 'outlook',
          icon: 'fingerprint',
          action: false
        },
      ]
    },
    {
      name: 'Produits',
      url: 'dash2',
      icon: 'qr_code',
      action: false
    },

    {
      name: 'DashboardUI',
      url: 'dash-ui',
      icon: 'list',
      action: false
    },
    {
      name: 'ColorDashboard',
      url: 'color-dash',
      icon: 'contact_page',
      action: false
    },
    {
      name: 'Dépenses',
      url: 'bookmark',
      icon: 'fingerprint',
      action: false,
      expandable: true,
      children: [
        {
          name: 'Clients',
          url: 'profile',
          icon: 'contact_page',
          action: false
        },
        {
          name: 'Dépenses',
          url: '',
          icon: 'fingerprint',
          action: false
        },
      ]
    },

    {
      name: 'Entrees Stock',
      url: 'main',
      icon: 'inventory',
      action: false
    },
    {
      name: 'Rapports',
      url: 'main',
      icon: 'reporting',
      action: false
    },
    // {
    //   name: 'Factures',
    //   url: '',
    //   icon: 'payment',
    //   action: 'bill()'
    // },
    {
      name: 'Utilisateurs',
      url: 'main',
      icon: 'people',
      action: false
    },
    {
      name: 'Configuration',
      url: 'home',
      icon: 'admin_panel_settings',
      action: false,
      expandable: true,
      children: [
        {
          name: 'Colors',
          url: 'analytics',
          icon: 'contact_page',
          action: false
        },
        {
          name: 'Side Panel',
          url: 'app1',
          icon: 'fingerprint',
          action: false
        },
      ]
    },


  ];

  constructor(private localRouter: ActivatedRoute) {}

  ngOnInit(): void {

  }
  // component property to check if a menu has children
   hasChild = ( menu:MenuNode) => !!menu.children && menu.children.length > 0;

  // get the list of menus of any menu item
   getListofMenu(myAray: MenuNode[]): string[] {
      let output: string[] = [];
      myAray.forEach((element) => {
        output.push(element.name)
    });
    return output;
   }

}
