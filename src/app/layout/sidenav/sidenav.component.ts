import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  numCards = Array.from(Array(10).keys());
  loading = true;
  isSidebarOpen = true;
  isSettingsPanelOpen = false;
  isArrowOpen = false;
  isSidebarReduced = false;

  links = [
    {
      name: 'Tableau de bord',
      url: '',
      icon: 'dashboard',
      action: ''
    },

    {
      name: 'Categories',
      url: '',
      icon: 'category',
      action: true
    },
    {
      name: 'Produits',
      url: '',
      icon: 'qr_code',
      action: true
    },

    {
      name: 'Fournisseurs',
      url: '',
      icon: 'list',
      action: ''
    },
    {
      name: 'Clients',
      url: '',
      icon: 'contact_page',
      action: ''
    },
    {
      name: 'Dépenses',
      url: '',
      icon: 'fingerprint',
      action: ''
    },

    {
      name: 'Entrees Stock',
      url: '',
      icon: 'inventory',
      action: ''
    },
    {
      name: 'Rapports',
      url: '',
      icon: 'reporting',
      action: ''
    },
    // {
    //   name: 'Factures',
    //   url: '',
    //   icon: 'payment',
    //   action: 'bill()'
    // },
    {
      name: 'Utilisateurs',
      url: '',
      icon: 'people',
      action: ''
    },
    {
      name: 'Configuration',
      url: '',
      icon: 'admin_panel_settings',
      action: ''
    },


  ];
  constructor() {
   }

  ngOnInit(): void {

  }

  toggleSidebarMenu() {
    this.isSidebarOpen = !this.isSidebarOpen
  }
  // reduceSideMenu() {
  //   this.isSidebarReduced = !this.isSidebarReduced
  // }

/**
 * group
 */

  //
  // <button mat-button [matMenuTriggerFor]="animals">Menu</button>
//   <mat-menu #animals="matMenu">
//   <button mat-menu-item [matMenuTriggerFor]="vertebrates">Vertebrates</button>
//   <button mat-menu-item [matMenuTriggerFor]="invertebrates">Invertebrates</button>
// </mat-menu>

// <mat-menu #vertebrates="matMenu">
//   <button mat-menu-item [matMenuTriggerFor]="fish">Fishes</button>
//   <button mat-menu-item [matMenuTriggerFor]="amphibians">Amphibians</button>
//   <button mat-menu-item [matMenuTriggerFor]="reptiles">Reptiles</button>
//   <button mat-menu-item>Birds</button>
//   <button mat-menu-item>Mammals</button>
// </mat-menu>

// <mat-menu #invertebrates="matMenu">
//   <button mat-menu-item>Insects</button>
//   <button mat-menu-item>Molluscs</button>
//   <button mat-menu-item>Crustaceans</button>
//   <button mat-menu-item>Corals</button>
//   <button mat-menu-item>Arachnids</button>
//   <button mat-menu-item>Velvet worms</button>
//   <button mat-menu-item>Horseshoe crabs</button>
// </mat-menu>

// <mat-menu #fish="matMenu">
//   <button mat-menu-item>Baikal oilfish</button>
//   <button mat-menu-item>Bala shark</button>
//   <button mat-menu-item>Ballan wrasse</button>
//   <button mat-menu-item>Bamboo shark</button>
//   <button mat-menu-item>Banded killifish</button>
// </mat-menu>

// <mat-menu #amphibians="matMenu">
//   <button mat-menu-item>Sonoran desert toad</button>
//   <button mat-menu-item>Western toad</button>
//   <button mat-menu-item>Arroyo toad</button>
//   <button mat-menu-item>Yosemite toad</button>
// </mat-menu>

// <mat-menu #reptiles="matMenu">
//   <button mat-menu-item>Banded Day Gecko</button>
//   <button mat-menu-item>Banded Gila Monster</button>
//   <button mat-menu-item>Black Tree Monitor</button>
//   <button mat-menu-item>Blue Spiny Lizard</button>
//   <button mat-menu-item disabled>Velociraptor</button>
// </mat-menu>
}
