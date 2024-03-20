import { CommonModule } from '@angular/common';
import { ApplicationModule, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductResponseModel } from '../../models/productResponseModel';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,ApplicationModule,CommonModule,HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  

  products:Product[] = [];
  //apiUrl="https://localhost:7181/api/products/getall"
  /*productResponseModel:ProductResponseModel={
    data:this.products,
    message:"",
    success:true
  };*/
  constructor(private httpClient:HttpClient){ } //newlemek

  ngOnInit():void { 
    this.getProducts();
  }
  getProducts(){
    this.httpClient
    .get<ProductResponseModel>('https://localhost:7181/api/products/getall')
    .subscribe((response)=>{
      this.products=response.data
    });

  }

}
