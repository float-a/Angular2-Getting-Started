import { Component, OnInit } from '@angular/core';
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product Lists';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    _listFilter: string;
    filteredProducts: IProduct[];

    get listFilter() : string {
        return this._listFilter;
    }
    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    products: IProduct[];

    constructor(private _productService: ProductService) {
    }

    ngOnInit() : void {
        this._productService.getProducts()
                                .subscribe(
                                    products => {
                                        this.products = products,
                                        this.filteredProducts = this.products
                                    },
                                    error => this.errorMessage = <any>error)
    }

    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string) : IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct) => 
            (product.productName.toLowerCase().indexOf(filterBy) != -1) || 
            (product.productCode.toLowerCase().indexOf(filterBy) != -1))
        
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
}