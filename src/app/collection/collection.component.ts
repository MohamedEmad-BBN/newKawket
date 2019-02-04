import {Component} from '@angular/core';
import {CollectionBaseComponent} from '@bbndev/ngx-bbn-zvendo';
import {listStaggerAnimation} from '../animations/listAnimation';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
  animations: [
    listStaggerAnimation
  ]
})
export class CollectionComponent extends CollectionBaseComponent {
}
