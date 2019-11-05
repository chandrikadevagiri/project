import { Component, OnInit } from '@angular/core';
import { ProductDetailsModel } from 'src/app/model/product-details.model';
import { ConstantData } from 'src/app/utils/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss']
})
export class AddcartComponent implements OnInit {

  // product:ProductDetailsModel;
  productName;
  imagePath;
  productDetails;
  productSizes = ConstantData.productSizes;
  productList;
  productID;
  noDetailsToDisplay;
  constructor(private activatedRoute: ActivatedRoute, private _router: Router, private httpService: HttpServiceService) {

   }

  ngOnInit() {
    // this.productID = this.activatedRoute.snapshot.params.productID;

  //   this.httpService.getService('product/addcart/' + this.productID).subscribe(
  //    (res) => {
  //      this.productDetails = res.product;
  //    },
  //    (err) => {
  //      console.log('error in loading details', err);
  //      this.noDetailsToDisplay = 'Error in loading details' + err.error;
  //    }
  //  );
  this.emitCartEvent()
  }


}

