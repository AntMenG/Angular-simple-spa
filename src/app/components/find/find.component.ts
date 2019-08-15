import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styles: []
})
export class FindComponent implements OnInit {
  heroes:Heroe[] = [];
  termino:string;

  constructor(
    private _heroes: HeroesService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.termino = params['nombre'];
      this.heroes = _heroes.buscarHeroe(this.termino);
    });
  }

  ngOnInit() {

  }

}
