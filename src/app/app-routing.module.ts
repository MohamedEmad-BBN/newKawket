import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CollectionComponent} from './collection/collection.component';
import {ProductDetailsComponent} from './collection/product-details/product-details.component';
import {LanguageComponent} from './language/language.component';
import {CompareComponent} from './compare/compare.component';
import {WishListComponent} from './wish-list/wish-list.component';
import {CartComponent} from './cart/cart.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {ResetPasswordComponent} from './accounts/reset-password/reset-password.component';
import {NgxBbnZvendoRouting} from '@bbndev/ngx-bbn-zvendo';

const children: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reset-password/:email/:token',
    component: ResetPasswordComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'collection',
    component: CollectionComponent
  },
  {
    path: 'collection/product/:code',
    component: ProductDetailsComponent
  },
  {
    path: 'compare',
    component: CompareComponent
  },
  {
    path: 'wish-list',
    component: WishListComponent,
  },
  {
    path: 'accounts',
    loadChildren: '../app/accounts/accounts.module#AccountsModule'
  },
  {
    path: 'profile',
    loadChildren: '../app/profile/profile.module#ProfileModule'
  },
  ...NgxBbnZvendoRouting
];

const routes: Routes = [
  {
    path: ':lan',
    children: children

  },
  {
    path: '',
    component: LanguageComponent
  },
  {
    path: '**',
    component: LanguageComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
