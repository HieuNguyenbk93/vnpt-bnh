import { Component, OnInit } from '@angular/core';
import { SanphamService } from '../services/sanpham.service';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../model/ProductModel';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  model: ProductModel = new ProductModel();

  loaisanpham: [];
  totalType: number = 0;

  idType: number = 0;

  constructor(
    private SanphamService: SanphamService,
    private ProductService: ProductService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    var result: any;
    this.SanphamService.getList().subscribe((res) => {
      result = res;
    }, err => {
      console.log(err);
    }, () => {
      this.loaisanpham = result.object.items;
      console.log(this.loaisanpham);
    });
  }

  submitData(){
    if (this.model.formGroup.valid){
      this.ProductService.add({
        "productName": this.model.productName,
        "categoryId": this.model.productIdType,
        "price": this.model.productPrice,
        "amount": this.model.productAmount,
        "supplier": this.model.productSupplier
      }).subscribe((res) => {

      }, err => {
        alert("Thêm mới không thành công");
        console.log(this.model);
      }, () => {
        alert("Thêm mới thành công");
        this.model.productName = "";
        this.model.productIdType = 0;
        this.model.productPrice = 0;
        this.model.productAmount = 0;
        this.model.productSupplier = "";
        console.log(this.model);
      });
    }
  }

}
