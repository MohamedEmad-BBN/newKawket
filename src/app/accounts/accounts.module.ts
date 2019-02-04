import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {AccountsRoutingModule} from './accounts-routing.module';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {AccountContainerComponent} from './account-container/account-container.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';

@NgModule({
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
  ],
  declarations: [
    SignUpComponent,
    LoginComponent,
    ForgetPasswordComponent,
    AccountContainerComponent,
    ResetPasswordComponent
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: () => new AuthServiceConfig([
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(localStorage.getItem('googleOauth'))
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider(localStorage.getItem('FacebookAppId'))
        },
      ])
    }
  ]
})
export class AccountsModule {
}
