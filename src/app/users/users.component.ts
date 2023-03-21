import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../todo';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  dataSource = this.users;
  displayedColumns: string[] = ['userName','totalTodos'];

  constructor(private userService: UserService, private location: Location) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  goBack(): void {
    this.location.back();
  }
}
