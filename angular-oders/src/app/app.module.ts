import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import {ProductList} from './products/app.products.productlist';
import {ProductService} from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,ProductList
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
