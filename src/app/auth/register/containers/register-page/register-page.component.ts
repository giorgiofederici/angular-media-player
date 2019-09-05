import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../../auth/reducers';
import { RegisterPageActions } from '../../actions';
import { Credentials } from 'src/app/auth/shared/models/credentials.model';

@Component({
  selector: 'mp-register',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  pending$ = this.store.pipe(select(fromAuth.getRegisterPagePending));
  error$ = this.store.pipe(select(fromAuth.getRegisterPageError));

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}

  registerUser(event: FormGroup) {
    const { email, password } = event.value;
    const credentials: Credentials = { email, password };
    this.store.dispatch(RegisterPageActions.register({ credentials }));
  }
}
