import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrderHistoryComponent} from './order-history/order-history.component';
import {AddressBookComponent} from './address-book/address-book.component';
import {EditAddressComponent} from './edit-address/edit-address.component';
import {ProfileContainerComponent} from './profile-container/profile-container.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent
      },
      {
        path: 'addresses-book',
        component: AddressBookComponent
      },
      {
        path: 'edit-address/:id',
        component: EditAddressComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
