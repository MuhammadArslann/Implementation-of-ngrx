import { Component, OnInit } from '@angular/core';
import { User } from '../shareable/user.model';
import { UserService } from '../services/user.service';
import { select, Store } from '@ngrx/store';
import * as UserActions from '../user.actions';
import * as formUser from '../user.selectors';
import { State } from '../reducers';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService, private store: Store<State>) { }
  users!: User[];
  errorMessage?: string;
  ngOnInit(): void {
    this.store.dispatch(new UserActions.LoadUsers());
    this.store.pipe(select(formUser.getUzer)).subscribe(
      usrs => {this.users = usrs}
    )
    this.store.pipe(select(formUser.getError)).subscribe(
      err => { this.errorMessage = err}     
    )


    // this.users = this.userService.getUsers();
    // console.log(this.users);
  }

}
