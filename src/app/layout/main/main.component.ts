import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion/accordion';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
  // @ViewChild(MatAccordion) accordion!: MatAccordion;
  numCards = Array.from(Array(5).keys());


}
