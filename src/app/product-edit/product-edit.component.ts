import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../model/ProductModel';
import { ProductService } from '../services/product.service';
import { SanphamService } from '../services/sanpham.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  Id: number = 0;
  model: ProductModel = new ProductModel();

  loaisanpham: [];

  constructor(
    private SanphamService: SanphamService,
    private router: ActivatedRoute,
    private ProductService: ProductService
  ) { }

  ngOnInit(): void {
    this.init();
    this.getProduct();
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

  getProduct(){
    this.router.params.subscribe((params) => {
      this.Id = params.id;
    });
    console.log(this.Id);
    var result: any;
    this.ProductService.getById(this.Id).subscribe((res)=> {
      result = res;
    }, err => {
      alert('Sửa thất bại');
    }, ()=> {
      this.model.productName = result.object.productName;
      this.model.productIdType = result.object.categoryId;
      this.model.productPrice = result.object.price;
      this.model.productAmount = result.object.amount;
      this.model.productSupplier = result.object.supplier;
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
        alert("Sửa không thành công");
        console.log(this.model);
      }, () => {
        alert("Sửa thành công");
        console.log(this.model);
      });
    }
  }

}
