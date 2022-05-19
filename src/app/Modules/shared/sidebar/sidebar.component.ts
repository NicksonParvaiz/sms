import { Component, OnInit } from '@angular/core';
import { faChartLine , faGraduationCap , faPersonChalkboard} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  dashboardIcon = faChartLine;

  ngOnInit(): void {
  }

}
