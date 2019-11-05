import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ProductDetailsComponent } from 'product-details/product-details.component';
import { HttpServiceService } from '../http-service/http-service.service';
import { ProductService } from '../products/products.service';

@Injectable()
export class  RouteServiceService  implements CanActivate {
product:ProductDetailsComponent
 productDetails; 
productID;
  constructor(private activatedRoute:ActivatedRoute,private httpservice:HttpServiceService, private _router: Router,private productservice:ProductService ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
   // let temp=this.httpservice.getService('product/productlist').;
   console.log(next.params);
   this.productID = next.params.productID;
     this.httpservice.getService('product/productdetails/' + this.productID).subscribe(
      (res) => {
       this.productservice.setProducts(res['product']);
        //this._router.navigate(['/productdetails']);
        return true;
      },
      
    );
   
  return true;

  }

}
