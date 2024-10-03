import { Component } from '@angular/core';
import { AtomHeaderComponent } from '../../components/atoms/atom-header/atom-header.component';
import { OrganismAddressComponent } from '../../components/organisms/organism-address/organism-address.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AtomHeaderComponent, OrganismAddressComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
