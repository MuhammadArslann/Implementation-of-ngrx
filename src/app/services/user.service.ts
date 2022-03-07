import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { User } from '../shareable/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'assets/user.json';

  //   user: Observable<User[]> | any = [
  //     {
  //     name: 'Arslan',
  //     city: 'Fsd',
  //     contact: 123
  //   },
  //    {
  //     name: 'Usman',
  //     city: 'Isb',
  //     contact: 456
  //   },
  //   {
  //     name: 'Arham',
  //     city: 'Lhr',
  //     contact: 789
  //   }
  // ];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data)))
      )}

}