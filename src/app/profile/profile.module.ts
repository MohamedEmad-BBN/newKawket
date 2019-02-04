import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileContainerComponent} from './profile-container/profile-container.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddressBookComponent} from './address-book/address-book.component';
import {OrderHistoryComponent} from './order-history/order-history.component';
import {EditAddressComponent} from './edit-address/edit-address.component';
import {NgxBbnZvendoModule} from '@bbndev/ngx-bbn-zvendo';
import {ModalModule, PaginationModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    NgxBbnZvendoModule,
    ModalModule,
    FormsModule,
    PaginationModule.forRoot(),
  ],
  declarations: [
    ProfileContainerComponent,
    DashboardComponent,
    AddressBookComponent,
    OrderHistoryComponent,
    EditAddressComponent,
    // ChangeVisibilityDirective
  ]
})
export class ProfileModule {
}
