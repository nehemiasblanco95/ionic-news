import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html'
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article[] = [];
  @Input() indice: any;
  constructor() { }

  ngOnInit() {}

}
