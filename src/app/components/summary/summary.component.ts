import { Component, OnInit } from '@angular/core';
import { SharedeventService } from '../../services/shared/sharedevent.service';
import { ProductDetailsModel } from '../../model/product-details.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private sharedeventService: SharedeventService) {
    this.sharedeventService.addCartEvent.subscribe((productData) => {
      this.productDetails.push(productData);
      this.totalProductAmt += Number(productData.productPrice);
    });
   }

  productDetails: ProductDetailsModel[] = [];
  totalProductAmt = 0;
  ngOnInit() {

  }

}
