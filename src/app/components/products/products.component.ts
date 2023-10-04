import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent  implements OnInit {

  listaCarrito: Product[] = [];
  total = 0;
  Products: Product[] =[
    {
      id   : '1',
      name : 'Yorki 1 meses',
      image : "./assets/images/Bebe1.jpeg",
      price: 1000000
    },

    {
      id   : '2',
      name : 'Yorki 2 meses',
      image : "./assets/images/Bebe2.jpeg",
      price: 1100000
    },

    {
      id   : '3',
      name : 'Yorki 3 meses',
      image : "./assets/images/Bebe3.jpeg",
      price: 1200000
    },
    {
      id   : '4',
      name : 'Yorki 4 meses',
      image : "./assets/images/Bebe1.jpeg",
      price: 1300000
    },
    {
      id   : '5',
      name : 'Yorki 5 meses',
      image : "./assets/images/Bebe2.jpeg",
      price: 1400000
    },

    {
      id   : '6',
      name : 'Yorki 3 meses',
      image : "./assets/images/Bebe3.jpeg",
      price: 1000000
    },
  ]


  ngOnInit(): void {

  }

  onAddToShoppingCart( product: Product){
    // console.log(product);
    this.listaCarrito.push(product)
    this.total = this.listaCarrito.reduce((sum,item) => sum + item.price,0)
  }

}
