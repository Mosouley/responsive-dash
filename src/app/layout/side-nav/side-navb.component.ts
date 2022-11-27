
import { Component, OnInit, NgZone } from '@angular/core';



import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

const MAX_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-navb.component.html',
  styleUrls: ['./side-navb.component.scss']
})
export class SideNavbComponent implements OnInit {

  links = [

    {
      name: 'Categories',
      url: 'category',
      icon: 'view_list',
      action: ''
    },
    {
      name: 'Produits',
      url: 'produit',
      icon: 'category',
      action: ''
    },

    {
      name: 'Fournisseurs',
      url: 'fournisseur',
      icon: 'people_outline',
      action: ''
    },
    {
      name: 'Clients',
      url: 'client',
      icon: 'people',
      action: ''
    },
    {
      name: 'Dépenses',
      url: 'spendings',
      icon: 'money',
      action: ''
    },

    {
      name: 'Entrees Stock',
      url: 'appro',
      icon: 'add_shopping_cart',
      action: ''
    },
    {
      name: 'Rapports',
      url: 'rapport',
      icon: 'account_balance',
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
      icon: 'person',
      action: ''
    },
    {
      name: 'Configuration',
      url: 'company',
      icon: 'build',
      action: ''
    }, {
      name: 'Tableau de bord',
      url: 'dash',
      icon: 'dashboard',
      action: ''
    }

  ];


  constructor(zone: NgZone,

  ) {

  }

  ngOnInit() {

  }


}
