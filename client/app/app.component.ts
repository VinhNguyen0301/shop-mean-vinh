import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';

import { Category } from './shared/models/category.model';
import { Product } from './shared/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

	category = new Category();
  categories: Category[] = [];
  products: Product[] = [];

  constructor(public auth: AuthService,
  						private productService: ProductService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategorys().subscribe(
      data => this.categories = data,
      error => console.log(error)
    );
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      data => this.products = data,
      error => console.log(error)
    );
  }
}
