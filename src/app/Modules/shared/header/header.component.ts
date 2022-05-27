import { Router } from '@angular/router';
import { AuthService } from './../../../Services/auth.service';
import { SidebarService } from './../sidebar/sidebar.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { faBell, faCaretDown, faBars, faAngleLeft, faEarListen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  constructor(private sidebar: SidebarService, private auth: AuthService ,private router: Router) { }
  notificationIcon = faBell;
  dropDownIcon = faCaretDown;
  menuIcon = faBars;
  loginUser: string;
  currentRoute : string;



  ngOnInit(): void {
    this.loginUser = this.auth.loginUser.username;

  }

  ngDoCheck(): void {
    if (this.sidebar.isExpand) {
      this.menuIcon = faAngleLeft;
    }
    else {
      this.menuIcon = faBars;
    }


    this.currentRoute = '/'+this.auth.loginUser.role +'/notification';

  }
  sidebarToggle() {
    this.sidebar.isExpand = !this.sidebar.isExpand;
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('login');
  }

}
