import { Component, OnInit, Input} from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';   //paso 1 para api




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent  implements OnInit {


  @Input() titulo: string = 'My Store';
  listaCarrito: Product[] = [];
  total = 0;
  products: Product[] = [];
  showProductDetail = false;
  productChosen: Product = {
    id   : '',
    price: 0,
    images : [],
    title : '',
    category: {
      id:'',
      name:'',
    },
    description: '',
  };

  constructor( private _StoreService: StoreService ,
               private _ProductsService: ProductsService   )    //paso 2 para api  inyeccion de dependencia
  {
    this.listaCarrito = this._StoreService.getCarrito();
  }


   // paso 3 para api,  debe ir aqui porque es algo asincrono
  ngOnInit(): void {

     this._ProductsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    })

  }

  onAddToShoppingCart( product: Product){
     this._StoreService.addProduct(product);
     this.total = this._StoreService.getTotal();
  }

  toggleProductDetail (){
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id:string){
    this._ProductsService.getProduct(id)
    .subscribe(data =>{
      this.toggleProductDetail();
      this.productChosen = data;
    })
  }


}



// Documentacion  En el hijo
// Paso uno se agrega un boton en el componente producto : <button (click)="onShowDetail()">Ver Detalle</button>
//    onShowDetail( ){this.showProduct.emit(this.producto.id) }  emite el id del producto
//      @Output() showProduct = new EventEmitter<string>();  comunica al padre


// Documentacion En el padre
// (showProduct)="onShowDetail($event)"   el html   recibe el evento del Id
//   Se consulta el servicio
//   onShowDetail(id:string){
//   this._ProductsService.getProduct(id)
//   .subscribe(data =>{
//     console.log('producto',data)
//   })
// }


// asi se programa el servicio: quien se comunica con la base de datos
//  getProduct(id:string){
//   return this.http.get<Product>(`${ this.apiUrl}/${id}`);
// }



// Este es el html para mostrar en productos una seccion con el detalle del producto
// <div class = "product-detail" [class.active]= "showProductDetail">
//   <div>
//     <button  (click)="toggleProductDetail()" >Close</button>
//      Aqui va el Contenido detallado del producto
//   </div>
// </div>

// toggleProductDetail (){
//   this.showProductDetail = !this.showProductDetail;
// }

