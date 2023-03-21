import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Todo, User } from '../todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {
  users: User[] = [];
  todos: Todo[] = [];
  user?: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe((user) => (this.user = user));
  }
}
