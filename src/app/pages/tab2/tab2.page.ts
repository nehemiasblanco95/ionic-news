import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { IonSegment } from '@ionic/angular';
import { Article } from '../../interfaces/interfaces';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;

categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology' ];
noticias: Article[] = [];

constructor(private noticiasService: NoticiasService) {

}

ngOnInit() {
  this.segment.value = this.categorias[0];
  this.cargarNoticias(this.categorias[0]);
}

loadData( event ) {
  this.cargarNoticias( this.segment.value, event );
    }

cambioCategoria(event){
this.noticias = [];
this.cargarNoticias(event.detail.value);
}

cargarNoticias(categoria: string, event?) {
  this.noticiasService.getTopHeadlinesCategoria(categoria).subscribe(resp => {
    console.log(resp);
    this.noticias.push(...resp.articles);

    if ( event) {
      event.target.complete();
    }
  });

}


}
