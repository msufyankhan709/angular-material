import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

const Small_Width_Breakpoint=720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public isScreenSmall: boolean=true;

  users: Observable<User[]> | undefined;

  constructor(private breakpointObserver:BreakpointObserver,
    private userService:UserService,
    private router:Router
  ) { }

  @ViewChild(MatSidenav) sidenav:MatSidenav | undefined;

  ngOnInit(): void {
    this.breakpointObserver
    .observe([`(max-width: ${Small_Width_Breakpoint}px)`])
    .subscribe((state:BreakpointState)=>{
      this.isScreenSmall=state.matches;
    });
    this.users=this.userService.users;
    this.userService.loadAll();


    this.router.events.subscribe(()=>{
      if(this.isScreenSmall){
        
      }
    });
  }

  

}
