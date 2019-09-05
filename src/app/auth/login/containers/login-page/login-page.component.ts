import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../../auth/reducers';
import { LoginPageActions } from '../../actions';
import { Credentials } from 'src/app/auth/shared/models/credentials.model';

@Component({
  selector: 'mp-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
  error$ = this.store.pipe(select(fromAuth.getLoginPageError));

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}

  loginUser(event: FormGroup) {
    const { email, password } = event.value;
    const credentials: Credentials = { email, password };
    this.store.dispatch(LoginPageActions.login({ credentials }));
  }
}
