import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styles: []
})
export class TargetComponent implements OnInit {
  @Input() heroe:any = {};
  @Input() i:number;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  verHeroe () {
    this.router.navigate([ '/heroe', this.i ]);
  }

}
