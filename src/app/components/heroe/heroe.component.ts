import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {
  heroe:any = {};

  constructor(
    private _heroes: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroes.getHeroe(params['id']);
    });
  }

}
