import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AccountsModule} from './accounts/accounts.module';
import {
  AccordionModule,
  CarouselModule,
  CollapseModule,
  ModalModule,
  PaginationModule,
  RatingModule,
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import {OwlModule} from 'ngx-owl-carousel';
import {NouisliderModule} from 'ng2-nouislider';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {CollectionComponent} from './collection/collection.component';
import {ProductComponent} from './collection/product/product.component';
import {CartComponent} from './cart/cart.component';
import {ProductDetailsComponent} from './collection/product-details/product-details.component';
import {LanguageComponent} from './language/language.component';
import {FilterComponent} from './collection/filter/filter.component';
import {TaxonComponent} from './collection/filter/taxon/taxon.component';
import {SearchComponent} from './header/search/search.component';
import {SideMenuComponent} from './header/side-menu/side-menu.component';
import {CompareComponent} from './compare/compare.component';
import {WishListComponent} from './wish-list/wish-list.component';
import {FeatureProductComponent} from './collection/feature-product/feature-product.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {QuickViewComponent} from './collection/quick-view/quick-view.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {TagsComponent} from './collection/tags/tags.component';
import {NgxBbnZvendoModule} from '@bbndev/ngx-bbn-zvendo';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    CollectionComponent,
    ProductDetailsComponent,
    ProductComponent,
    LanguageComponent,
    SearchComponent,
    SideMenuComponent,
    CompareComponent,
    FilterComponent,
    TaxonComponent,
    WishListComponent,
    FeatureProductComponent,
    BreadcrumbComponent,
    QuickViewComponent,
    ContactUsComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    OwlModule,
    NouisliderModule,
    AccountsModule,
    ToastrModule.forRoot(),
    PaginationModule.forRoot(),
    BrowserAnimationsModule,
    NgxBbnZvendoModule.forRoot(environment)
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
