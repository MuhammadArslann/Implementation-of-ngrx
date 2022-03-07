import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { UserService } from './services/user.service';
import { User } from './shareable/user.model';
import * as userActions from './user.actions';


@Injectable()
export class UserEffects {
  
  constructor(private actions$: Actions, private userService: UserService) {}

loadUsers$ = createEffect(() => this.actions$.pipe(
  ofType(userActions.UserActionTypes.LoadUsers),
  mergeMap(
    action => this.userService.getUsers().pipe(
      map((user: User[]) => (new userActions.LoadUsersSuccess({data: user})))
    )
  )
)
)


}
