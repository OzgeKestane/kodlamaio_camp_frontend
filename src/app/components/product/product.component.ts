import { CommonModule } from '@angular/common';
import { ApplicationModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,ApplicationModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product1: any = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5 }
  product2: any = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 5 }
  product3: any = { productId: 3, productName: 'Mause', categoryId: 1, unitPrice: 5 }
  product4: any = { productId: 4, productName: 'Keyboard', categoryId: 1, unitPrice: 5 }
  product5: any = { productId: 5, productName: 'Table', categoryId: 1, unitPrice: 5 }

  products = [this.product1, this.product2, this.product3, this.product4, this.product5];
}
