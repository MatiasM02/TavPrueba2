import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../../servicios/productos.service';
import { ProductosRespuesta } from './../../modelos/productos';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  productos!: ProductosRespuesta;

  constructor(public api: ProductosService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    return this.api.traerProductos();
  }

}
