import { Component, OnInit } from '@angular/core';
import { ProductDetailsModel } from '../../model/product-details.model';
import { ConstantData } from '../../utils/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../../services/http-service/http-service.service';
import { SharedeventService } from '../../services/shared/sharedevent.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productName;
  imagePath;
  productDetails;
  productSizes = ConstantData.productSizes;
  productList;
  productID;
  productQuantity;
  noDetailsToDisplay;
  cart = 0;
constructor(private _router: Router, private activatedRoute: ActivatedRoute,
            private httpService: HttpServiceService, private _sharedeventService: SharedeventService) { }

  ngOnInit() {
    this.productID = this.activatedRoute.snapshot.params.productID;

    this.httpService.getService('product/productdetails/' + this.productID).subscribe(
      (res) => {
        this.productDetails = res.product;
      },
      (err) => {
        console.log('error in loading details', err);
        this.noDetailsToDisplay = 'Error in loading details' + err.error;
      }
    );


    // this.productDetails = new ProductDetailsModel();
    // this.productDetails.productImagePath = '/assets/products/product_2.jpg';
    // this.productDetails.productDescription = 'Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set ';
    // this.productDetails.productName = 'Overall Lace Split Sheer Top & Pants Set';
    // this.productDetails.productSizes = ['M', 'L'];
    this.productList = [{
      productName: 'Name',
      productImagePath: '/assets/products/product_2.jpg'
    },
    {
      productName: 'Name',
      productImagePath: '/assets/products/product_2.jpg'
    },
    {
      productName: 'Name',
      productImagePath: '/assets/products/product_2.jpg'
    }];
  }

 public  edit(productID) {
    this._router.navigate(['/editproduct/' + productID]);
  }
  public addcart() {
  this._sharedeventService.productItemCountEvent.emit(1);
  this._sharedeventService.addCartEvent.emit(this.productDetails);
  }
}
