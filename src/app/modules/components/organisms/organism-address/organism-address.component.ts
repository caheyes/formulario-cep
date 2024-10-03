import { Component } from '@angular/core';
//services
import { CepService } from '../../../../services/cep.services';

@Component({
  selector: 'organism-address',
  standalone: true,
  imports: [],
  templateUrl: './organism-address.component.html',
  styleUrl: './organism-address.component.scss'
})
export class OrganismAddressComponent {
  public endereco: any = {
    road: '',
    neighborhood: '',
    city: '',
    state: ''
  };

  constructor(private cepService: CepService) {}

  onCepChange(cep: string) {
    if (cep.length === 8) {
      this.cepService.getAddress(cep).subscribe(data => {
        if (!data.erro) {
          this.endereco.road = data.logradouro;
          this.endereco.neighborhood = data.bairro;
          this.endereco.city = data.localidade;
          this.endereco.state = data.uf;
        } else {
          alert('CEP não encontrado!');
        }
      });
    }
  }

  clear() {
    this.endereco = {
      road: '',
      neighborhood: '',
      city: '',
      state: ''
    };
  }
}
