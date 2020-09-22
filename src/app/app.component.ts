import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor(private ref: ChangeDetectorRef) {
    Auth.currentAuthenticatedUser().then((x) => console.log(x));
  }

  ngOnInit(): void {
      onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    });
  }

  ngOnDestroy(): any {
    return onAuthUIStateChange;
  }
}
