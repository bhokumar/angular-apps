import { Component, OnInit } from "@angular/core";
import { IProduct } from "../interfaces/IProduct";
import { ProductService } from "../services/product.service";


@Component({
    selector:'products',
    templateUrl:'./app.products.productlist.html',
    styleUrls: ['app.products.productlist.css'],
})
export  class ProductList implements OnInit{
    imageWidth:number = 50;
    imageMargin:number = 2;
    showImage:boolean = true;
    errorMessage:string;
    products: IProduct[] = [];

    constructor(private productService:ProductService){
        
    }

    ngOnInit():void{
        this.productService.getProducts().subscribe(products=>this.products=products,error=>this.errorMessage=<any>error);
    }
}