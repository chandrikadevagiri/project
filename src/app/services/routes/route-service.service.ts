import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ProductDetailsComponent } from 'product-details/product-details.component';
=======
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {map, catchError, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ProductDetailsComponent } from 'src/app/components/product-details/product-details.component';
>>>>>>> ebddb390977ad36ae33a3a98098a157e448ee1d4
import { HttpServiceService } from '../http-service/http-service.service';
import { ProductService } from '../products/products.service';

@Injectable()
export class  RouteServiceService  implements CanActivate {
product: ProductDetailsComponent;
 productDetails;
productID;
  constructor(private httpservice: HttpServiceService, private productservice: ProductService ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
   // let temp=this.httpservice.getService('product/productlist').;
   console.log(next);
   this.productID = next.params.productID;
   return this.httpservice.getService('product/productdetails/' + this.productID)
   .pipe(map(
      (res) => {
       this.productservice.setProducts(res.product);
       return true;
      }),
      catchError((er: any, caught: Observable<any>) => of(false)));
  }

}
