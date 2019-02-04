import {Component} from '@angular/core';
import {ProductDetailsBaseComponent, TranslatePipe} from '@bbndev/ngx-bbn-zvendo';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [TranslatePipe]
})
export class ProductDetailsComponent extends ProductDetailsBaseComponent {
}
