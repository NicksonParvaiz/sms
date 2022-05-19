import { SidebarService } from './../sidebar/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit , DoCheck{

  constructor(private sidebar: SidebarService) { }

  sideBarExpand: boolean;

  ngOnInit(): void {
  }
  
  ngDoCheck(): void {
    this.sideBarExpand = this.sidebar.isExpand;
  }


}
