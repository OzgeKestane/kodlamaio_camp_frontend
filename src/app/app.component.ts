import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Özge Kestane";
  product1: any = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5 }
  product2: any = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 5 }
  product3: any = { productId: 3, productName: 'Mause', categoryId: 1, unitPrice: 5 }
  product4: any = { productId: 4, productName: 'Keyboard', categoryId: 1, unitPrice: 5 }
  product5: any = { productId: 5, productName: 'Table', categoryId: 1, unitPrice: 5 }

  products = [this.product1, this.product2, this.product3, this.product4, this.product5];
}
