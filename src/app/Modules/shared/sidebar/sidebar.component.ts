import { SidebarService } from './sidebar.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { faChartLine , faGraduationCap , faPersonChalkboard  } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit , DoCheck{

  constructor(private sidebar : SidebarService , private auth : AuthService) { }
  progressIcon =  faChartLine;

  isExpand : boolean;
  loggedInUserRole : string;

  ngOnInit(): void {
    this.loggedInUserRole = this.auth.loginUser.role;
  }

  ngDoCheck(): void {

    this.isExpand = this.sidebar.isExpand;
    
  }
}
