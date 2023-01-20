import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosRespuesta } from '../modelos/productos';
import { AuthUserResponse } from './../modelos/auth';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private URL_PRODUCTOS: string='https://dummyjson.com/auth/products';
  public datosProductos: ProductosRespuesta | null = null;
  public datos: AuthUserResponse | null = null;

  constructor(private cliente: HttpClient) { }

  public traerProductos(){
    this.cliente.get<ProductosRespuesta>(this.URL_PRODUCTOS,{
      headers:{
        'Authorization': `Bearer ${this.datos?.token}`,
        'Content-Type': 'application/json'
      }
    }).subscribe(datos =>{
      this.datosProductos = datos;
      console.log(datos)
    })
  }

  public obtenerProductos(){
    return this.datosProductos;
  }
}
