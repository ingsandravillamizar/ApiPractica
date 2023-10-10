import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';   //paso 1
import { Product } from './../models/product.model';   //paso 3


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://api.escuelajs.co/api/v1/products'


  constructor( private http: HttpClient) { }      //paso 2 inyectar

  //paso
  getAllProducts(){
    return this.http.get<Product[]>(this.apiUrl);   // paso 4  lo que devuelve que sea de tipo product(del modelo)
  }

  getProduct(id:string){
    return this.http.get<Product>(`${ this.apiUrl}/${id}`);
  }
}





// en pasos:

// En el servicio:
// 1- crear el servicio desde la terminal   ng g s services/products
// 2- importar el modulo HttpCliente en el servcio e inyectar e servicio en el constructor.  import { HttpClientModule } from '@angular/common/http';
// 3 en el servicio se crea el metodo para hace la petición de la API:
// return this.http.get<Product[]>(‘https://fakestoreapi.com/products’);

// En el componente:
// 1- importar el servicio
// 2- inyectar el servicio en el constructor: private productsService: ProductsService
// 3- crear el metodo en el ngOnInit
// this.productsService.getAllProducts()
// .subscribe(data => {
// this.products = data;

// Por ultimo ya estaba creado un array tipado y se debe ajustar los campos con los campos de la API.
