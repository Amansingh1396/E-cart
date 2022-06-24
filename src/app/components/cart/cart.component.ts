import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public  products:any=[];
  public allProducts  :any;



  constructor(private cartApi:CartapiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.products=res;
      this.allProducts=this.cartApi.getTotalAmount();
    })
  }
  removeProduct(item:any){
    this.cartApi.removeCartData(item);
  }
  removeAllProduct(){
    this.cartApi.removeAllCart();
  }

}
