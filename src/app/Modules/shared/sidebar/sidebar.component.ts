import { SidebarService } from './sidebar.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { faChartLine , faGraduationCap , faPersonChalkboard} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit , DoCheck{

  constructor(private sidebar : SidebarService ) { }
  dashboardIcon = faChartLine;

  isExpand : boolean;


  ngOnInit(): void {
  }

  ngDoCheck(): void {

    this.isExpand = this.sidebar.isExpand;
    
  }
}
