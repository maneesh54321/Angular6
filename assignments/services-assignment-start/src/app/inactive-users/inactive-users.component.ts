import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  private users: string[];

  constructor(private userService:UserService){}

  ngOnInit(){    
    this.users=this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.OnSetToActive(id);
  }
}