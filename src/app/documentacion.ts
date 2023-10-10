//   SWIPER
//   Instalar:  npm i swiper@8.4.7 --save

// En app.module

//  import { SwiperModule } from 'swiper/angular';
// imports: [
//   SwiperModule
// ],


// Paso 3 Implementar los stilos
// En el archivo styles.scss :
// @import 'swiper/scss';
// @import 'swiper/scss/navigation';
// @import 'swiper/scss/pagination';

// <div class = "product-detail" [class.active]= "showProductDetail">
//   <div *ngIf = "productChosen">
//     <button  (click)="toggleProductDetail()" >Close</button>
//         <h1>{{ productChosen.title }}</h1>
//         <swiper [slidesPerView]="1">
//           <ng-template swiperSlide *ngFor="let img of productChosen.images"> <img [src]= "img" alt = ""></ng-template>
//         </swiper>
//         <p> {{ productChosen.description }}</p>
//   </div>
// </div>
