import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  numCards = Array.from(Array(10).keys());

  isSidebarOpen = true;
  isSettingsPanelOpen = false;
  // isSearchBoxOpen = false;
  isSidebarReduced = false;

  @Output () toggleSideNav: EventEmitter<boolean> = new EventEmitter<boolean>();


  links = [

    {
      name: 'Categories',
      url: 'category',
      icon: 'bi bi-arrow-through-heart',
      action: ''
    },
    {
      name: 'Produits',
      url: 'produit',
      icon: 'bi bi-arrow-through-heart',
      action: ''
    },

    {
      name: 'Fournisseurs',
      url: 'fournisseur',
      icon: 'bi bi-arrow-through-heart',
      action: ''
    },
    {
      name: 'Clients',
      url: 'client',
      icon: 'bi bi-arrow-through-heartle',
      action: ''
    },
    {
      name: 'Dépenses',
      url: 'spendings',
      icon: 'bi bi-arrow-through-heart',
      action: ''
    },

    {
      name: 'Entrees Stock',
      url: 'appro',
      icon: 'bi bi-arrow-through-heart',
      action: ''
    },
    {
      name: 'Rapports',
      url: 'rapport',
      icon: 'bi bi-arrow-through-heart',
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
      url: 'user',
      icon: 'bi bi-arrow-through-heart',
      action: ''
    },
    {
      name: 'Configuration',
      url: 'company',
      icon: 'bi bi-arrow-through-heart',
      action: ''
    }, {
      name: 'Tableau de bord',
      url: 'dash',
      icon: 'bi bi-arrow-through-heart',
      action: ''
    }

  ];
  constructor() {
   }


  ngOnInit(): void {}
  toggleSidebarMenu($event: any) {
    this.isSidebarOpen = $event;
  }

  toggleSidebarReduce($event: any) {
    this.isSidebarReduced = $event;
  }
  toggleSettingsMenu($event: any) {
    this.isSettingsPanelOpen = $event;
  }


}
